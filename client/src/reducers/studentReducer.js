import { GET_STUDENTS, ADD_STUDENT, DELETE_STUDENT, STUDENTS_LOADING } from '../actions/types';

const initialState = {
  students: [],
  loading: false
};

export default function(state = initialState, action) {
  switch(action.type){
    case GET_STUDENTS:
      return {
        ...state,
        students: action.payload,
        loading: false
      };
    case DELETE_STUDENT:
      return {
        ...state,
        students: state.students.filter(student => student.id !== action.payload)
      };
    // case ADD_ITEM:
    //     return {
    //       ...state,
    //       students: [action.payload, ...state.students]
    //     };
    case STUDENTS_LOADING:
        return {
          ...state,
          loading: true
        };
    default:
      return state;
  }
}
