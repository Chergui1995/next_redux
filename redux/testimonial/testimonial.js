export const FETCH_TESTIMONIALS_SUCCESS = 'FETCH_TESTIMONIALS_SUCCESS';
export const ADD_TESTI_SUCCESS = 'ADD_TESTI_SUCCESS';
export const EDIT_TESTI_SUCCESS = 'EDIT_TESTI_SUCCESS';

export const add_testi_redux = (testimonial) => async dispatch => {
  dispatch(add_testiSuccess(testimonial));
};

export const edit_testi_redux = (testimonial) => async dispatch => {
  dispatch(edit_testiSuccess(testimonial));
};

export const add_testiSuccess = (testimonial) => {
  return {
    type: ADD_TESTI_SUCCESS,
    payload: testimonial,
  };
};

export const edit_testiSuccess = (testimonial) => {
  return {
    type: EDIT_TESTI_SUCCESS,
    payload: testimonial,
  };
};
const initialState = {
  testimonials: [
    { id: 1, name: 'John Doe', email: 'john.doe@example.com', message: 'Super expérience!' },
    { id: 2, name: 'Jane Smith', email: 'jane.smith@example.com', message: 'Très satisfait du service.' }
  ]
};

const TestiReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_TESTIMONIALS_SUCCESS:
      return {
        ...state,
        testimonials: action.payload,
      };
    case ADD_TESTI_SUCCESS:
      return {
        ...state,
        testimonials: [...state.testimonials, action.payload],
      };
    case EDIT_TESTI_SUCCESS:
      return {
        ...state,
        testimonials: state.testimonials.map(testi =>
          testi.id === action.payload.id ? action.payload : testi
        ),
      };
    default:
      return state;
  }
};

export default TestiReducer;
