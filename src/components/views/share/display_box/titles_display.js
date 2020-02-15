import React from "react";
import Row from "react-bootstrap/Row";
import ShareTitleObject from "./title_object";
import { connect } from "react-redux";

const ShareTitlesDisplay = props => {
  const titles = Array.from(props.titles);
  return (
    <Row className="justify-content-center">
      {titles.reverse().map(title => {
        return <ShareTitleObject key={title.mal_id} title={title} />;
      })}
    </Row>
  );
};

const mapStateToProps = state => {
  return {
    titles: state.shareTitles
  };
};

export default connect(mapStateToProps)(ShareTitlesDisplay);
