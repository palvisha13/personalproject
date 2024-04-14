import React from 'react';
import logo from './logo.svg';
import './App.css';
import MovieCards from "./components/movieCards";
import Navigation from "./components/navigation";
function App() {
  return (
    <div className="App">
      <header className="App-header" >
          <div>
              <Navigation/>

          </div>

          <h2 style={{textAlign:'left'}}>Horror</h2>
          <MovieCards/>
          <h2>Comedy</h2>
          <MovieCards/>
          <h2>Mystery</h2>
          <MovieCards/>
      </header>
    </div>
  );
}

export default App;
