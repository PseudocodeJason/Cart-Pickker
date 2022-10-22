import { HIDE_API, SHOW_API } from "../actionType";
const initial_state = {
    apiList: [],
}
export default (state = initial_state, action) => {
    if (action.type == SHOW_API) {
      var myarray = action.payload.list
      console.log(myarray)
      return {
        ...state,
        apiList: myarray
      };
    } else if (action.type == HIDE_API) {
      return {
        ...state,
        apiList: [],
      };
    }
    return state;
  };