import React from 'react';
import './App.css';
import Header from './components/header';
import Home from './pages/Home';
import Listing from './pages/Listing';
import  {BrowserRouter as Router, Route, Routes} from "react-router-dom";
function App() {
  return (
    <div className="App">
       <Router>
        <Header/>
        <Routes>
      <Route path="/" exact element={<Home/>}/>
      <Route path="/Listing" exact element={<Listing/>}/>
      </Routes>
      </Router>
    </div>
  );
}

export default App;
