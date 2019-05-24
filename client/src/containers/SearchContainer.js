import { connect } from 'react-redux';
import Search from '../components/Search';
import { loadUserId } from '../actions';

function mapStateToProps(state){
    console.log('SearchContainer.mapStateToProps', state)
    return {
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

const SearchContainer = connect(mapStateToProps, mapDispatchToProps)(Search)
export default SearchContainer;