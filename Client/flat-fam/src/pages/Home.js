import React from 'react';
import homeimg from '../assets/homeimg.jpeg';
import '../styles/home.css';
function Home() {
  return (
    <div className='home'>
      <div className='img'>
      <img height="600px" width="100%" src={homeimg} alt="home page image" />
      <div className='searchbar'>
      <p><span>FlatMates</span></p>
        <div className='search'>
          
        <form>
          <input type="text" placeholder="Location" />
          <button>Search</button>
        </form>
        </div>
      </div>
      </div>
      
    </div>
  )
}

export default Home;
