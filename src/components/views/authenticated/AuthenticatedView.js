import React, { useEffect } from "react";
import AuthenticatedHeader from "./AuthenticatedHeader";
import SearchForm from "./search_form";
import TitlesDisplay from "./display_box/titles_display";
import { connect } from "react-redux";

const AuthenticatedView = props => {
  useEffect(() => {
    if (!props.isLoggedIn) {
      props.history.push("/");
    }
  }, [props.isLoggedIn, props.history]);

  return (
    <div>
      <AuthenticatedHeader history={props.history} />
      <SearchForm />
      {props.titles.size === 0 && (
        <div className="p-5">
          <p className="text-center text-light lead">
            Your list is empty...
            <br />
            Search for a title to start building your collection!
          </p>
        </div>
      )}
      {props.titles.size > 0 && <TitlesDisplay />}
    </div>
  );
};

const mapStateToProps = (state, ownProps) => {
  return {
    history: ownProps.history,
    titles: state.titles,
    isLoggedIn: state.userCreds.isLoggedIn
  };
};

export default connect(mapStateToProps)(AuthenticatedView);
