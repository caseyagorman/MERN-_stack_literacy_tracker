import axios from 'axios';
import dispatch from 'react'
import { GET_STUDENTS, ADD_STUDENT, DELETE_STUDENT, STUDENTS_LOADING } from './types';

export const getStudents = () => {
  dispatch(setStudentsLoading());
  axios
  .get('/api/items')
  .then(res =>
    dispatch({
      type: GET_STUDENTS,
      payload: res.data
    })
  );
};

export const deleteStudent = id => {
  return {
    type: DELETE_STUDENT,
    payload: id
      };
};
export const setStudentsLoading = () => {
  return {
    type: STUDENTS_LOADING
    };
};
