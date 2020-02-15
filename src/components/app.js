import React from "react";
import Alert from "react-bootstrap/Alert";
import Container from "react-bootstrap/Container";
import LoadingSpinner from "./loading_spinner";
import { connect, useDispatch } from "react-redux";
import {
  PreviewModal,
  UpdateModal,
  InfoModal,
  DeleteModal,
  UserModal,
  AccountDeleteModal
} from "./modals";
import { AuthenticatedView } from "./views";
import { Router, Switch, Route } from "react-router-dom";
import UserAuthentication from "./views/unauthenticated/authentication/UserAuthentication";
import LandingView from "./views/unauthenticated/landing/LandingView";
// import ShareView from "./views/share/ShareView";
import { hideAlert } from "../state/actions";

const App = props => {
  const dispatch = useDispatch();
  return (
    <Router history={props.history}>
      <Container>
        <Alert
          variant={props.alertType}
          dismissible
          show={props.alertVis}
          className="text-center"
          onClose={() => dispatch(hideAlert())}
        >
          <Alert.Heading>{props.alertHeading}</Alert.Heading>
          <p>{props.alertMessage}</p>
        </Alert>
        <Switch>
          <Route path="/" exact component={LandingView} />
          <Route path="/authentication" exact component={UserAuthentication} />
          <Route path="/user/:username" exact component={AuthenticatedView} />
          {/* <Route path="/view/:username" exact component={ShareView}/> */}
        </Switch>
      </Container>

      <PreviewModal />
      <InfoModal />
      <UpdateModal />
      <DeleteModal />
      <UserModal />
      <AccountDeleteModal history={props.history} />
      <LoadingSpinner />
    </Router>
  );
};
const mapStateToProps = (state, ownProps) => {
  return {
    history: ownProps.history,
    alertHeading: state.errorAlert.heading,
    alertMessage: state.errorAlert.message,
    alertType: state.errorAlert.variant,
    alertVis: state.errorAlert.visibility
  };
};
export default connect(mapStateToProps)(App);
