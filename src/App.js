import React from 'react';
import './style.css';

export default function App() {
  return (
    <div className="main">
      <h1 className="h1">Hello StackBlitz!</h1>

      <div class="topnav" id="myTopnav">
        <a href="#home" class="active">
          Home
        </a>
        <a href="#news">News</a>
        <a href="#contact">Contact</a>
        <a href="#about">About</a>
        <a href="javascript:void(0);" class="icon" onclick="myFunction()">
          <i class="fa fa-bars"></i>
        </a>
      </div>

      <p>A sample page to experiment with.</p>
      <p>Looking for a link to GitHub</p>
      <div className="nav">
        <ul>
          <li>
            <button className="button">Nav1</button>
          </li>
          <li>
            <button className="button">Nav2</button>
          </li>
          <li>
            <button className="button">Nav3</button>
          </li>
        </ul>
      </div>

      <div className="card">
        <div>
          <h1>Card here</h1>
          <div className="description">Card Description</div>
        </div>
      </div>
    </div>
  );

  function myFunction() {
    var x = document.getElementById('myTopnav');
    if (x.className === 'topnav') {
      x.className += ' responsive';
    } else {
      x.className = 'topnav';
    }
  }
}
