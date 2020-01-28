import React, { useState } from "react";
import titles from "../builtin_titles";
import Container from "react-bootstrap/Container";
import TitlesDisplay from "./titles_display";
import PreviewModal from "./preview_modal";
import InfoModal from "./info_modal";
import Header from "./header";
import SearchForm from "./search_form";
import UpdateModal from "./update_modal";
import LoadingSpinner from "./loading_spinner";
import { trackPromise } from "react-promise-tracker";

const App = props => {
  // set up hooks
  const [titleList, setTitleList] = useState(new Set(titles)),
    [previewModalVis, setPreviewModalVis] = useState(false),
    [infoModalVis, setInfoModalVis] = useState(false),
    [updateModalVis, setUpdateModalVis] = useState(false),
    [newTitle, setNewTitle] = useState({}),
    [infoModalTitle, setInfoModalTitle] = useState({}),
    [updateModalTitle, setUpdateModalTitle] = useState({});

  /*
    Copy the current state of titleList.
    Add newTitle to the copy.
    Update the state of titleList.
  */
  const confirmTitle = () => {
    const newList = titleList;
    newList.add(newTitle);
    setTitleList(newList);
    setPreviewModalVis(false);
  };

  /*
    Fetch data from API by user's query (triggers loading spinner).
    Parse necessary data from response and update state of newTitle.
    Reset search box.
    Check if title exists, if yes, break and alert.
    Open preview modal.
    OR
    Handle empty query condition.
  */
  const findTitle = async e => {
    e.preventDefault();
    const query = document.getElementById("title").value;
    let titleExists = false;
    // eslint-disable-next-line
    if (query != "") {
      const request = await trackPromise(
          fetch("https://api.jikan.moe/v3/search/anime?q=" + query + "&limit=1")
        ).catch(error => console.log("Something went wrong...", error)),
        response = await request.json(),
        result = response.results[0];

      for (const x of titleList) {
        if (x.mal_id === result.mal_id) {
          titleExists = true;
          break;
        }
      }
      document.getElementById("title").value = "";
      if (titleExists) {
        alert("This title is already in your list!");
      } else {
        setNewTitle({
          mal_id: result.mal_id,
          title: result.title,
          score: result.score,
          airing: result.airing,
          rated: result.rated,
          episodes: result.episodes,
          synopsis: result.synopsis,
          image_url: result.image_url,
          url: result.url
        });
        setPreviewModalVis(true);
      }
    } else {
      alert("Please enter a search term.");
    }
  };

  /*
    Find the mal_id of the object to be displayed.
    Set the infoModal title to matching object.
    Open the modal.
  */
  const openInfoModal = title => {
    const currentId = parseInt(title.target.getAttribute("objid"));
    for (const x of titleList) {
      if (x.mal_id === currentId) {
        setInfoModalTitle(x);
        break;
      }
    }
    setInfoModalVis(true);
  };

  /*
    Find the mal_id of the object to be edited.
    Set the updateModal title to matching object.
    Open the modal.
  */
  const openUpdateModal = title => {
    const currentId = parseInt(title.target.getAttribute("objid"));
    for (const x of titleList) {
      if (x.mal_id === currentId) {
        setUpdateModalTitle(x);
        break;
      }
    }
    setUpdateModalVis(true);
  };

  /*
    Get any modified values from inputs.
    Limit score to 0 - 10.
    Get current ID.
    Create copy of current state of titleList.
    Update object values & state.
    Close modal.
  */
  const saveChanges = () => {
    const updatedTitle = document.querySelector("#updateTitle").value,
      updatedSynopsis = document.querySelector("#updateSynopsis").value,
      updatedEpisodes = document.querySelector("#updateEpisodes").value,
      updatedAiring = document.querySelector("#updateAiring").checked,
      updatedRated = document.querySelector("#updateRated").value;
    let updatedScore = document.querySelector("#updateScore").value;

    updatedScore = updatedScore > 10 ? 10 : updatedScore;
    updatedScore = updatedScore < 0 ? 0 : updatedScore;

    const currentId = updateModalTitle.mal_id;
    let newList = new Set(titleList);
    for (const x of newList) {
      if (x.mal_id === currentId) {
        x.title = updatedTitle;
        x.synopsis = updatedSynopsis;
        x.airing = updatedAiring;
        x.episodes = updatedEpisodes;
        x.score = updatedScore;
        x.rated = updatedRated;
        break;
      }
    }
    setTitleList(newList);
    setUpdateModalVis(false);
  };

  /*
    Find the mal_id of the object to be deleted.
    Copy the current state of titleList.
    Remove object with the matching mal_id.
    Update the state.
  */
  const deleteTitle = e => {
    const toDeleteId = parseInt(e.target.getAttribute("objid"));
    let newList = new Set(titleList);
    for (const x of titleList) {
      if (x.mal_id === toDeleteId) {
        newList.delete(x);
        break;
      }
    }
    setTitleList(newList);
  };

  return (
    <div>
      <Container>
        <Header />
        <SearchForm findTitle={e => findTitle(e)} />
        <br />
        <TitlesDisplay
          titles={titleList}
          deleteClick={e => deleteTitle(e)}
          infoClick={i => openInfoModal(i)}
          updateClick={i => openUpdateModal(i)}
        />
      </Container>
      <PreviewModal
        modalVisible={previewModalVis}
        closeModal={() => setPreviewModalVis(false)}
        currentTitle={newTitle}
        confirmTitle={() => confirmTitle()}
      />
      <InfoModal
        modalVisible={infoModalVis}
        closeModal={() => setInfoModalVis(false)}
        currentTitle={infoModalTitle}
      />
      <UpdateModal
        modalVisible={updateModalVis}
        saveChanges={() => saveChanges()}
        currentTitle={updateModalTitle}
        closeModal={() => setUpdateModalVis(false)}
      />
      <LoadingSpinner />
    </div>
  );
};
export default App;
