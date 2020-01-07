import React from "react";
import Row from "react-bootstrap/Row";
import Obj from "./obj.js"

export class TitlesDisplay extends React.Component {
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