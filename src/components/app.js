import React from "react";
// React Router
import { Router, Switch, Route } from "react-router-dom";
// Redux
import { connect, useDispatch } from "react-redux";
import { hideAlert } from "state/actions";
// Bootstrap
import Alert from "react-bootstrap/Alert";
import Container from "react-bootstrap/Container";
// Custom
import LoadingSpinner from "components/loading_spinner";
import { PreviewModal, UpdateModal, InfoModal,
  DeleteModal, UserModal, AccountDeleteModal } from "components/modals";
import { AuthenticatedView } from "components/views";
import UserAuthentication from "components/views/unauthenticated/authentication/user_authentication";
import LandingView from "components/views/unauthenticated/landing/landing_view";
// import ShareView from "./views/share/ShareView";


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
