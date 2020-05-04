import React ,{useState,useEffect}from 'react';
import {BrowserRouter as Ruoter,Route,Switch,Link} from 'react-router-dom';
import './App.css';


function App() {

 
  return (
        <nav > 
            <h1 className='logo'>Logo</h1>
          
            <ul>
            <Link to='/'>
                <li>Home</li>
            </Link>

            <Link to='/search'>
                <li>Search Recipes</li>
            </Link>

            <Link>
                <li>Prodact</li>
            </Link>
            </ul>
            
           
            
        </nav>
  );
}

export default App;