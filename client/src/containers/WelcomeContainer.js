import { connect } from 'react-redux';
import Welcome from '../components/Welcome';
import { loadUserId } from '../actions';

function mapStateToProps(state){
    return{
        currentUserId: state.currentUserId
    }
}

function mapDispatchToProps(dispatch){
    return {
        loadUserId(){
            dispatch(loadUserId())
        }
    }
}

const WelcomeContainer= connect(mapStateToProps, mapDispatchToProps)(Welcome)
export default WelcomeContainer;