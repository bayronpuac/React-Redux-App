import React from 'react';
import RickFacts from './components/RickInfo';
import './App.css';

// const store = createStore(rootReducer, applyMiddleware(thunk));

function App() {
  return (
    <div className="App">
      <h1>Rick and Morty</h1>
      <RickFacts />
    </div>
  );
}

export default App;
