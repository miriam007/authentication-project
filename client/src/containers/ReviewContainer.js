import { connect } from 'react-redux';
import ReviewList from '../components/ReviewList';
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

const ReviewContainer= connect(mapStateToProps, mapDispatchToProps)(ReviewList)
export default ReviewContainer;