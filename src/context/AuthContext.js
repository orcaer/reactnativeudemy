import React from 'react';
import createDataContext from './createDataContext';
import trackerApi from '../api/tracker';

// when we call 'dispatch' React calls the reducer function

const authReducer = (state, action) => {
  switch(action.type){
    case 'add_error':
      return {...state, errorMessage: action.payload}
    default:
      return state;
  }
};

const signup = dispatch =>{
  return async ({email, password}) =>{
    try {
      const response = await trackerApi.post('/signup',{email,password});
      console.log(response.data);
    } catch(err){
      console.log(err.message);
      dispatch({type:'add_error', payload:'Something went wrong with signing up'})
    }
    // make api request to signup with that email and Password

    // if we sign up, modify state and say we are authenticated

    // if signing up fails we need to reflect an error message
  };
};

const signin = dispatch => {
  return ({email, password}) =>{
    //Try to sign in
    //Handle success by updating state
    //Handle failure by showing error message

  };
};

const signout = dispatch =>{
  return () =>{
    //Somehow sign out!
  };
};


export const { Provider, Context } = createDataContext(
  authReducer,
  {signin, signout, signup},
  {isSignedIn: false, errorMessage:''}

);
