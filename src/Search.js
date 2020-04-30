import React ,{useState,useEffect}from 'react';
import {BrowserRouter as Ruoter,Route,Switch, Link} from 'react-router-dom';
import './App.css';
import RecipeName from './RecipeName'




function Search (prop){
    const [search, setSearch] = useState('');
    const [query, setQuery ] = useState('');


    const updateSearch =(e)=>{
        setSearch(e.target.value)
    }

 

    

    return (
        <div>
            <h1>Search</h1>
            <br />
            
            <form onSubmit={(e)=>{
                  setQuery(search)
                  prop.onSubmit(e.target.value)
             }}>

            
                <input type='text'  
                onChange={updateSearch}  />
            
                <Link to = {'/recipes/' + search}>
                <input type='submit' ></input></Link>
            </form>
            
        </div>
    )
}

export default Search ;

