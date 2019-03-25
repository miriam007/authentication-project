import { connect } from 'react-redux';
import Profile from '../components/Profile';
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

const ProfileContainer= connect(mapStateToProps, mapDispatchToProps)(Profile)
export default ProfileContainer;