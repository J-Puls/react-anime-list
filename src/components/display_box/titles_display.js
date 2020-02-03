import React from "react";
import Row from "react-bootstrap/Row";
import TitleObject from "./title_object";
import { connect } from "react-redux";

const TitlesDisplay = props => {
  const titles = Array.from(props.titles);
  return (
    <Row>
      {titles.reverse().map(title => {
        return <TitleObject key={title.mal_id} title={title} />;
      })}
    </Row>
  );
};

const mapStateToProps = state => {
  return {
    titles: state.titles
  };
};

export default connect(mapStateToProps)(TitlesDisplay);
