import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from 'components/App';
import './index.css';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

const defaultState = {
  cash: 0,
}

const reducer = (state = defaultState, action) => {
  if (action.type === 'ADD_CASH') {
      return {...state, cash: state.cash + action.payload}
  }else if(action.type === 'GET_CASH'){
    return {...state, cash: state.cash - action.payload}
  }else{
    return state;
  }
}

const store = createStore(reducer)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
