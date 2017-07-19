import React from 'react';
import { render } from 'react-dom';
import App from './Components/App';
import {Provider} from 'react-redux'
import {createStore} from 'redux';

// rendering App.js when server hits div-id = app in index.html 
// const squareState = {
// 	currentState: null,
// 	previousStates: []
// };

// const boardReducer = (state = {
// 	currentState: new Array(25),
// 	previousStates: []
// },action) => {
//   	action = "HUMAN_PLAYER";
//   	console.log("action"+ action.type)
//    switch (action){
//    	 case "HUMAN_PLAYER":
//    	 		console.log('inside reducer');
//    	 		state = {
//    	 			//...state,
//    	   //currentState: state.currentState[action.payload]='X'
//    	   [action.payload] : {
//    	   	 currentState: {$set: }
//    	   }
//    	   previousStates:[...state.previousStates, action.payload]
//    	   	};
//    	   break;
//    	 case "SQUARE_STATE_COMP":
//    	   		state ={
//    	   			//...state,
//    	   currentState: action.payload,
//    	   previousStates:[...state.previousStates, action.payload]
//    	};
//    	   break;
//    }
//    return state;
// };
// const store = createStore(boardReducer); // 1 is initial state
// store.subscribe(() => {
// });

//render(<Provider store={store}><App /></Provider>, document.getElementById('app')); 
render(<App />, document.getElementById('app'))