import React from 'react';
import CounterUseReducer from './components/CounterUseReducer';
// import CounterContext from './components/CounterContext';
// import CounterRedux from './components/CounterRedux';
// import CounterReduxToolkit from './components/CounterReduxToolkit';
// import CounterRecoil from './components/CounterRecoil';
import './App.css'; 

function App() {
  return (
    <div className="app-container">
      <h1>Global State Demo</h1>
      <div className="counter-list">
        <CounterUseReducer />
        {/* <CounterContext />
        <CounterRedux />
        <CounterReduxToolkit />
        <CounterRecoil /> */}
      </div>
    </div>
  );
}

export default App;
