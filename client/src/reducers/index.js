import { combineReducers } from 'redux';

function currentUserId(state = "", action) {
    if (action.type === "SET_USER_ID") {
      return action.value;
    }
    return state;
   }

const rootReducer=combineReducers({
    currentUserId
});

export default rootReducer;
   