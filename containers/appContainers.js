import AppComponent  from '../components/AppComponent';
import { isLogin } from '../actions';
import { connect } from "react-redux";
const mapStateToProps = state => {
    return {
        is_login: state.loginReducers
    }
}

const mapDispatchToProps = (dispatch) => {
    return {

    };
}

export default connect(mapStateToProps, mapDispatchToProps)(AppComponent);