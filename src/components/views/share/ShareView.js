import React, {useEffect} from "react";
import AuthenticatedHeader from "../authenticated/AuthenticatedHeader";
import ShareHeader from "./ShareHeader";
import TitlesDisplay from "./display_box/titles_display";
import { connect, useDispatch } from "react-redux";
import { getShareTitles } from "../../../state/actions";

const ShareView = props => {
    // const dispatch = useDispatch();
    // const username = props.location.pathname.split('/')[ props.location.pathname.split('/').length - 1];
    // useEffect(dispatch(getShareTitles(username)), []);

  return (
    <div>
      {props.isLoggedIn && <AuthenticatedHeader history={props.history} />}
      {!props.isLoggedIn && <ShareHeader history={props.history} />}

      {props.titles.size === 0 && (
        <div className="p-5">
          <p className="text-center text-light lead">
            This user has not added any titles to their list yet...
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
    titles: state.shareTitles,
    isLoggedIn: state.userCreds.isLoggedIn
  };
};

export default connect(mapStateToProps)(ShareView);
