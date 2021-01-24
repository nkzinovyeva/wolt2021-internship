import React, { useState, useEffect } from 'react';
import './App.css';
import Carousel from './components/Carousel.js';

function App() {

  const [data, setData] = useState([]);

  /** 
   * get data from a local JSON file
   **/

  const getData=()=>{
    fetch('discovery_page.json'
    ,{
      headers : { 
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      }
    }
    )
      .then(function(response){
        return response.json();
      })
      .then(function(data) {
        setData(data.sections);
      });
  }

  useEffect(()=>{
    getData()
  },[])

  return (
    <div className="App">
     {
      data && data.length > 0 && data.map((item, index)=>
        <Carousel key={index} restaurants={item.restaurants} title={item.title} />
       )
     }
    </div>
 );
}

export default App;
