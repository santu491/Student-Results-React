import React from 'react';
import {Provider} from 'react-redux'
import './App.css';
import ResultsDashBoard from './container/ResultsDashBoard/ResultsDashBoard'
import store from './store/store'

function App() {
  return (
    <div >
      <Provider store={store}>
      <ResultsDashBoard/>
      </Provider>
    </div>
  );
}

export default App;
