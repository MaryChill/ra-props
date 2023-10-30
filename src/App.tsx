import { useState } from 'react';
import './App.css';
import Stars from './Stars.tsx';
import Listing from './Listing.tsx';
import data from './etsy.tsx';

function App() {

  const count: number = 3;

  return (
    <>
      <ul className="card-body-stars u-clearfix">
        <li>
          <Stars count={count} />
        </li>
      </ul>
        <Listing items={data}/>
    </>
  )
}

export default App
