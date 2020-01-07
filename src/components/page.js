import React from "react";
import titles from "../builtin_titles";
import Container from "react-bootstrap/Container";
import { TitlesDisplay } from "./titles_display.js"
import { PreviewModal } from "./preview_modal.js"
import { InfoModal } from "./info_modal.js"
import { Header } from "./header.js"
import { SearchForm } from "./search_form.js"

export class Page extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        titleList: titles,
        previewModalVis: false,
        infoModalVis: false,
        newTitle: {},
        infoModalTitle: {}
      };
    }
  
    addTitle(newTitle) {
      const toAdd = [newTitle];
      this.setState({
        titleList: toAdd.concat(this.state.titleList)
      });
    }
  
    async findTitle(e) {
      e.preventDefault();
      const query = document.getElementById("title").value;
       // eslint-disable-next-line
      if (query != "") {
        const request = await fetch(
            "https://api.jikan.moe/v3/search/anime?q=" + query + "&limit=1"
          ).catch(error => console.log("Something went wrong...", error)),
          response = await request.json(),
          result = response.results[0];
          console.log(request);
          this.setState({
            newTitle: {
              mal_id: result.mal_id,
              title: result.title,
              score: result.score,
              airing: result.airing,
              rated: result.rated,
              episodes: result.episodes,
              synopsis: result.synopsis,
              image_url: result.image_url,
              url: result.url
          }
          })
         this.openPreviewModal();
         document.getElementById("title").value = "";
  
      } else {
        alert("Please enter a search term.");
  
      }
    }
  
    openPreviewModal() {
      this.setState({
        previewModalVis: true
      })
    }
  
    closePreviewModal() {
      this.setState({
        previewModalVis: false
      })
    }
  
    openInfoModal(title){
      const currentID = title.target.getAttribute("objid");
      const currentTitle = this.state.titleList.filter(function(value, index, arr) {
         // eslint-disable-next-line
          return index == currentID;
        });
      
      this.setState({
        infoModalTitle: currentTitle[0],
        infoModalVis: true
      });
      
    };
  
    closeInfoModal(){
      this.setState({
        infoModalVis: false
      });
    };
  
    confirmTitle(){
      this.addTitle(this.state.newTitle);
      this.closePreviewModal();
    };
  
    deleteTitle(title) {
      // grab objid attribute of button
      const toDeleteID = title.target.getAttribute("objid");
      this.setState({
        // update list of titles, filtering out selected title ID
        titleList: this.state.titleList.filter(function(value, index, arr) {
          // eslint-disable-next-line
          return index != toDeleteID;
        })
      });
    };
  
  
    render() {
      return (
        <div>
        <Container>
          <Header />
          <SearchForm findTitle={e => this.findTitle(e)} />
          <br/>
          <TitlesDisplay
            titles={this.state.titleList}
            deleteClick={i => this.deleteTitle(i)}
            infoClick={i => this.openInfoModal(i)}
          />
        </Container>
        <PreviewModal 
          modalVisible={this.state.previewModalVis}
          closeModal={() => this.closePreviewModal()}
          currentTitle={this.state.newTitle}
          confirmTitle={() => this.confirmTitle()}
        />
        <InfoModal 
          modalVisible={this.state.infoModalVis}
          closeModal={() => this.closeInfoModal()}
          currentTitle={this.state.infoModalTitle}
        />
        </div>
        
      );
    }
  }