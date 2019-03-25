import { connect } from 'react-redux';
import TutorProfile from '../components/TutorProfile';
import { loadUserId } from '../actions';

function mapStateToProps(state){
    return{
        userId: state.currentUserId
    }
}

function mapDispatchToProps(dispatch){
    return {
        loadUserId(){
            dispatch(loadUserId())
        }
    }
}

const TutorProfileContainer= connect(mapStateToProps, mapDispatchToProps)(TutorProfile)
export default TutorProfileContainer;