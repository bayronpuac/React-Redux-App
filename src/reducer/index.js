import { START_FETCHING, FETCH_SUCCESS, FETCH_FAILURE } from '../actions';


const initialState = {
    rickFacts: [],
    isFetching: false,
    error: ' '
}


const reducer = (state = initialState, action) => {
    switch (action.type) {
      case START_FETCHING:
        return {
          ...state,
          isFetching: true,
          error: ''
        };
      case FETCH_SUCCESS:
          console.log(action.payload)
        return {
          ...state,
          isFetching: false,
          error: '',
          rickFacts: action.payload
        };
      case FETCH_FAILURE:
        return {
          ...state,
          error: action.payload,
          isFetching: false
        };
      default:
        return state;
    }
  };
  
  export default reducer;