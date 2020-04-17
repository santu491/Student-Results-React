import React from 'react';
import {Provider} from 'react-redux'
import './App.css';
import StudentResults from './container/StudentResults'
import store from './store/store'

function App() {
  return (
    <div className="App">
      <Provider store={store}>
      <StudentResults/>
      </Provider>
    </div>
  );
}

export default App;
