import { LOAD, LIKE, DELETE, ADD, CHANGE, SEARCH } from "../types"
const initialState = {
   workers: []
}
const  loadReducer = (state=initialState, action) => {
   switch(action.type) {
      case LOAD:
         return [...action.data];
      case LIKE: 
         return [...action.data];
      case DELETE:
         return [...action.data];
      case ADD:
         return [...action.data];
      case CHANGE:
         return [...action.data];
      case SEARCH:
         return [...action.data];
      default:
         return state
   }
}

export default loadReducer