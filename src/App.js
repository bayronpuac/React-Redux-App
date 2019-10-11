import React from 'react';
import './App.css';
import RickInfo from './components/RickInfo';

// const store = createStore(rootReducer, applyMiddleware(thunk));

function App() {
  return (
    <div className="App">
      <h1>Rick and Morty</h1>
      <RickInfo />
    </div>
  );
}

export default App;
