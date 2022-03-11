import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import store from './redux/store';

let renderTree = (state) => {
   ReactDOM.render(
      <React.StrictMode>
         <App
            state={state}
            dispath={store.dispath.bind(store)}
         />
      </React.StrictMode>,
      document.getElementById('root')
   );
}



renderTree(store.getState());

store.subscribe(renderTree)
