import React from "react";
import Row from "react-bootstrap/Row";
import Obj from "./obj";

const TitlesDisplay = props => {
  const titles = Array.from(props.titles);
  return (
    <Row>
      {titles.reverse().map((obj, index) => {
        return (
          <Obj
            key={index}
            objID={obj.mal_id}
            title={obj.title}
            score={obj.score}
            airing={obj.airing}
            rated={obj.rated}
            episodes={obj.episodes}
            synopsis={obj.synopsis}
            image_url={obj.image_url}
            url={obj.url}
            deleteClick={props.deleteClick}
            infoClick={props.infoClick}
            updateClick={props.updateClick}
          />
        );
      })}
    </Row>
  );
};
export default TitlesDisplay;
