import React from "react";
import titles from "../builtin_titles";
import Container from "react-bootstrap/Container";
import { TitlesDisplay } from "./titles_display.js";
import { PreviewModal } from "./preview_modal.js";
import { InfoModal } from "./info_modal.js";
import { Header } from "./header.js";
import { SearchForm } from "./search_form.js";
import { UpdateModal } from "./update_modal.js"
import { LoadingSpinner } from "./loading_spinner.js"
import { trackPromise } from 'react-promise-tracker';

export class Page extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        titleList: titles,
        previewModalVis: false,
        infoModalVis: false,
        updateModalVis: false,
        newTitle: {},
        infoModalTitle: {},
        updateModalTitle: {},
        updateTitleID: ""
      };
    }
  
    addTitle(newTitle) {
      const list = this.state.titleList,
      toAdd = [newTitle];
      console.log(list)
      list.forEach(item => {
        item.mal_id ++;
      });
      this.setState({
        titleList: toAdd.concat(list)
      });
    }
  
    async findTitle(e) {
        e.preventDefault();
        const query = document.getElementById("title").value;
        // eslint-disable-next-line
        if (query != "") {
          
          const request = await trackPromise(fetch(
              "https://api.jikan.moe/v3/search/anime?q=" + query + "&limit=1"
            )).catch(error => console.log("Something went wrong...", error)),
            response = await request.json(),
            result = response.results[0];

            this.setState({
              newTitle: {
                mal_id: 1,
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
        };
    };
  
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
  
    openUpdateModal(title){
      const currentID = title.target.getAttribute("objid");
      const currentTitle = this.state.titleList.filter(function(value, index, arr) {
         // eslint-disable-next-line
          return index == currentID;
        });
      
      this.setState({
        updateModalTitle: currentTitle[0],
        updateModalVis: true
      });
      
    };

    closeUpdateModal(){
      this.setState({
        updateModalVis: false
      });
    };
    saveChanges(objid){
      let currentTitle = this.state.updateModalTitle,
          updatedTitle = document.querySelector('#updateTitle').value,
          updatedSynopsis = document.querySelector('#updateSynopsis').value,
          updatedEpisodes = document.querySelector('#updateEpisodes').value,
          updatedScore = document.querySelector('#updateScore').value,
          updatedRated = document.querySelector('#updateRated').value;
          updatedScore = (updatedScore > 10) ? 10 : updatedScore
          updatedScore = (updatedScore < 0) ? 0: updatedScore;
      const updateTitle = {
          mal_id: currentTitle.mal_id,
          title: updatedTitle,
          score: updatedScore,
          airing: currentTitle.airing,
          rated: updatedRated,
          episodes: updatedEpisodes,
          synopsis: updatedSynopsis,
          image_url: currentTitle.image_url,
          url: currentTitle.url
        };
      const list = this.state.titleList,
            aList = list.slice(0, currentTitle.mal_id - 1),
            bList = list.slice(currentTitle.mal_id, list.length),
            newList = aList.concat(updateTitle).concat(bList);
      console.log(newList);
      
      this.setState({
        updateModalVis: false,
        titleList: newList
      });
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
      }, () => {
        const list = this.state.titleList;
        list.forEach((item, index) => {
          item.mal_id = index + 1;
        });
        this.setState({
          titleList: list
        });
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
            updateClick={i => this.openUpdateModal(i)}
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
        <UpdateModal 
          modalVisible={this.state.updateModalVis}
          saveChanges={() => this.saveChanges()}
          currentTitle={this.state.updateModalTitle}
          closeModal={() => this.closeUpdateModal()}
        />
        <LoadingSpinner/>
        </div>
        
      );
    }
  }