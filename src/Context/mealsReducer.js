export const initialMealState = {
    meals: [],
    loading: false,
    error: null,
  };
  
  export const mealActions = {
    FETCH_MEALS_REQUEST: 'FETCH_MEALS_REQUEST',
    FETCH_MEALS_SUCCESS: 'FETCH_MEALS_SUCCESS',
    FETCH_MEALS_ERROR: 'FETCH_MEALS_ERROR',
  };
  
  const mealReducer = (state, action) => {
    switch (action.type) {
      case mealActions.FETCH_MEALS_REQUEST:
        return { ...state, loading: true, error: null };
      case mealActions.FETCH_MEALS_SUCCESS:
        return { ...state, loading: false, meals: action.payload };
      case mealActions.FETCH_MEALS_ERROR:
        return { ...state, loading: false, error: action.payload };
      default:
        return state;
    }
  };
  
  export default mealReducer;
  