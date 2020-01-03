import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import * as builtin_titles from "./builtin_titles";
import "bootstrap/dist/css/bootstrap.min.css";
import Button from "react-bootstrap/Button";
import Figure from "react-bootstrap/Figure";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import FormControl from "react-bootstrap/FormControl";
import Modal from "react-bootstrap/Modal";
import ModalHeader from "react-bootstrap/ModalHeader";
import ModalBody from "react-bootstrap/ModalBody";
import ModalFooter from "react-bootstrap/ModalFooter";
import ModalTitle from "react-bootstrap/ModalTitle";

const titles = builtin_titles.titles;

class Page extends React.Component {
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
        ),
        response = await request.json(),
        result = response.results[0];
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

class TitlesDisplay extends React.Component {
  render() {
    return (
      <Row>
        {this.props.titles.map((obj, index) => {
          return (
            <Obj
              key={index}
              objID={index}
              title={obj.title}
              score={obj.score}
              airing={obj.airing}
              rated={obj.rated}
              episodes={obj.episodes}
              synopsis={obj.synopsis}
              image_url={obj.image_url}
              url={obj.url}
              deleteClick={this.props.deleteClick}
              infoClick={this.props.infoClick}
            />
          );
        })}
      </Row>
    );
  }
}

class Obj extends React.Component {
  render() {
    return (
      <Col xs="6" sm="4" md="3" className="p-sm-3">
        <Figure>
          <Figure.Image
            rounded
            alt={this.props.title + " thumbnail"}
            src={this.props.image_url}
            className="display-img shadow"
          />
          <span className="lead text-white">{this.props.title}</span>
          <Figure.Caption className="text-light">
            {"Rating: " + this.props.score + " / 10"}
          </Figure.Caption>
          <Button
            block
            size="md"
            variant="outline-info"
            objid={this.props.objID}
            onClick={this.props.infoClick}
          >
            More Info
          </Button>
          <Button
            block
            size="md"
            variant="danger"
            objid={this.props.objID}
            onClick={this.props.deleteClick}
          >
            Remove
          </Button>
        </Figure>
      </Col>
    );
  }
}

function PreviewModal(props) {

    return (
        <Modal
          show={props.modalVisible}
          onHide={props.closeModal}
          currenttitle={props.currentTitle}
          >
          <ModalHeader closeButton  className="bg-secondary text-light">
            <ModalTitle>Is this correct?</ModalTitle>
          </ModalHeader>
          <ModalBody id="previewModalBody"/>
          <Row>
            <Col xs="4">
              <img 
                src={props.currentTitle.image_url}
                className="figure-img img-fluid rounded"
                alt={props.currentTitle.title + " thumbnail"}></img>
            </Col>
            <Col xs="8">
              <p className="lead">Title: {props.currentTitle.title}</p>
              <p>
                <span className="lead">Synopsis:
                  <br></br>
                </span>
                <span>{props.currentTitle.synopsis}</span>
              </p>
            </Col>
          </Row>
          <ModalFooter className="bg-secondary text-light">
            <Button
              variant="success" 
              onClick={props.confirmTitle}>
              Yep! :)
            </Button>
            <Button
              variant="danger" 
              onClick={props.closeModal}>
              Nope :(
            </Button>
          </ModalFooter>
        </Modal>
    );
  
};

function InfoModal(props) {
  let airing = "";
  if (props.currentTitle.airing){
    airing = "Yes";
  } else {
    airing = "No";
  }
return (
    <Modal
      show={props.modalVisible}
      onHide={props.closeModal}
      size="large"
      backdrop="static"
      enforceFocus
      >
      <ModalHeader closeButton  className="bg-secondary text-light">
        <ModalTitle>{props.currentTitle.title}</ModalTitle>
      </ModalHeader>
      <ModalBody id="previewModalBody"/>
      <Row>
        <Col xs="4"className="mx-auto">
          <img 
            src={props.currentTitle.image_url}
            className="figure-img img-fluid rounded"
            alt={props.currentTitle.title + " thumbnail"}></img>
        </Col>
        <Col className="container" xs="10">
        <p className="lead">Title: {props.currentTitle.title}</p>
            <p>
              <span className="lead">Synopsis:<br/></span>
              <span>{props.currentTitle.synopsis}</span>
            </p>
            <p>
              <span className="lead">Airing: </span>
              <span>{airing}</span>
            </p>
            <p>
              <span className="lead"># of episodes: </span>
              <span>{props.currentTitle.episodes}</span>
            </p>
            <p>
              <span className="lead">Score: </span>
              <span>{props.currentTitle.score} / 10</span>
            </p>
            <p>
              <span className="lead">Rated: </span>
              <span>{props.currentTitle.rated}</span>
            </p>
            <small className="text-muted ">All information retreived from MyAnimeList.net via
            the Jikan API</small>
        </Col>
      </Row>
      <ModalFooter>
          <Button 
            href={props.currentTitle.url}
            target="_black"
            rel="noopener"
            className="w-100"
            >
            Read more on MyAnimeList.net</Button>
           
      </ModalFooter>
    </Modal>
)};


class Header extends React.Component {
  render() {
    return (
      <Col xs="12" className="mx-auto p-2 mt-5">
        <h1 className="display-4 text-center text-light mb-4">Anime List</h1>
      </Col>
    );
  }
}

class SearchForm extends React.Component {
  render() {
    return (
      <Col
        xs
        md="8"
        className="mx-auto bg-secondary p-3 text-light rounded shadow"
      >
        <legend>Find New Title</legend>
        <Form id="searchForm">
          <FormControl
            id="title"
            size="lg"
            type="text"
            placeholder="anime title"
          ></FormControl>
          <small id="titleHelp" className="form-text mb-2">
            Enter the title of the anime you wish to add.
          </small>
          <Button type="submit" onClick={this.props.findTitle}>
            Find It
          </Button>
        </Form>
      </Col>
    );
  }
}


ReactDOM.render(<Page />, document.getElementById("root"));
