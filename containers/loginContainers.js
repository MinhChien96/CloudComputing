import LoginComponent from '../components/LoginComponent';
import { isLogin } from '../actions';
import { connect } from 'react-redux';
const mapStateToProps = state => {
    return {

    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        loginSucess: (status) => {
            dispatch(isLogin(status));
        }
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginComponent);