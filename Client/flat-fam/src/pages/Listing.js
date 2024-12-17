import React from 'react'
import { useState } from 'react';
import '../styles/listing.css';
function Listing() {
    const [details,setDetails]=useState({
        Location:"",
        bhk:"",
        furnishing:"",
        rent:"",
        lookingfor:""
      });
      function handleChange(e){
        setDetails((prevValue)=>{
          return{...prevValue, [e.target.name]:e.target.value}});

      }
      console.log(details);
      async function handleClick(e){
        
        const response=await fetch("http://localhost:8080/addlisting",{
          method:"POST",
          body:JSON.stringify(details),
          headers:{
            "Content-Type":"application/json"}
        });
        
        const result=await response.json();
        console.log(result);
        
      }



  return (
    <div className='listing'>
      <form onSubmit={handleClick}>    
                <p>Location</p>                      
                <input onChange={handleChange} type='text' name="Location" placeholder="Name of the Owner" value={details.Location} />
                <p>BHK</p> 
                <input onChange={handleChange} type='text'  name="bhk" placeholder="BHK" value={details.bhk} />
                <p>Furnishing</p> 
                <input onChange={handleChange} type='text' name="furnishing" placeholder="Furnishing" value={details.furnishing} />
                <p>Rent</p>
                <input onChange={handleChange} type='text' name="rent" placeholder="Rent" value={details.rent} /> 
                <p>Looking For</p> 
                <input onChange={handleChange} type='text' name="lookingfor" placeholder="Male,Female,Couple" value={details.lookingfor} />
                <button type="submit">CONTINUE</button>
      </form>
    </div>
  )
}

export default Listing;
