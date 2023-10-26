import { useState } from 'react';
import './App.css';
import Stars from './Stars.tsx';
import Listing from './Listing.tsx';
import json from './etsy.tsx';

function App() {

  const count: number = 0;
 // const items: [] = [];
//console.log(json);
//const obj = JSON.parse(json);
//console.log(obj);

  return (
    <>
      <ul className="card-body-stars u-clearfix">
        <li>
          <Stars count={count} />
        </li>
      </ul>
      <div className='item-list'>
        <Listing items={json}/>
        {/* {json.map((el, index) => 
          <Listing items={el} key={index}/>)} */}
      </div>
      
    </>
  )
}

export default App
