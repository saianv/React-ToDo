var React = require('react');
var ReactDOM = require('react-dom');
var {Provider} = require('react-redux');
var {hashHistory} = require('react-router');

import firebase from 'firebase';
import router from 'app/router/index';


var actions = require('actions');
var store = require('configureStore').configure();

store.subscribe(()=>{
  console.log('New state: ', store.getState());
});

firebase.auth().onAuthStateChanged((user)=>{
	if(user){
		hashHistory.push('/todos');
	}else{
		hashHistory.push("/");
	}

});


store.dispatch(actions.startAddTodos());


// Load foundation
$(document).foundation();

// App css
require('style!css!sass!applicationStyles');


ReactDOM.render(
  <Provider store = {store}>
    {router}
  </Provider>,
  document.getElementById('app')
);
