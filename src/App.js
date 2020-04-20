import React from 'react';
import {Provider} from 'react-redux'
import './App.css';
import StudentResults from './container/ResultsDashBoard/ResultsDashBoard'
import store from './store/store'

function App() {
  return (
    <div >
      <Provider store={store}>
      <StudentResults/>
      </Provider>
    </div>
  );
}

export default App;
