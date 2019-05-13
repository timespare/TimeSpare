import { connect } from "react-redux";
import { login } from "../../actions/user_actions";
import { removeErrors } from "../../actions/user_actions";
import Login from "./login";

const mapStateToProps = state => {
  return {
    errors: state.errors.session
  };
};

const mapDispatchToProps = dispatch => {
  return {
    processForm: user => dispatch(login(user)),
    removeErrors: () => dispatch(removeErrors())
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Login);
