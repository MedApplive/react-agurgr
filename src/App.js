import React from 'react';
import './style.css';

export default function App() {
  return (
    <div className="main">
      <h1 className="h1">Hello StackBlitz!</h1>
      <p>A sample page to experiment with.</p>
      <p>Looking for a link to GitHub</p>
      <ul>
        <li><button className="button">Nav1</button></li>
        <li><button className="button">Nav2</button></li>
        <li><button className="button">Nav3</button></li>
      </ul>
      <div className="card">
        <div> 
          <h1>Card here</h1>
          <div className="description">Card Description</div>
        
        </div>
       
      </div>
    </div>
  );
}
