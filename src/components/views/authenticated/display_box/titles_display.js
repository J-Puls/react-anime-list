import React from "react";
import Row from "react-bootstrap/Row";
import TitleObject from "./title_object";
import { connect } from "react-redux";



const TitlesDisplay = props => {
  const titles = Array.from(props.titles);
  return (
    <div>
      <p className="h2 text-light slide-in-right">My Titles</p>
      <Row className="justify-content-center">
      {titles.reverse().map(title => {
        return <TitleObject key={title.mal_id} title={title} />;
      })}
    </Row>
    </div>
    
  );
};

const mapStateToProps = state => {
  return {
    titles: state.titles
  };
};

export default connect(mapStateToProps)(TitlesDisplay);
