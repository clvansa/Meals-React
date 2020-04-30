import React, { useState, useEffect } from 'react';
import { BrowserRouter as Ruoter, Route, Switch } from 'react-router-dom';
import Nav from './Nav';
import Categories from './Categories';
import CategoriesList from './CategoriesList';
import Search from './Search';
import Recipes from './Recipes';
import RecipeItem from './RecipeItem';
import RecipeName from './RecipeName';
import Footer from './Footer';
import './App.css';





function App() {
  const [query, setQuery] = useState('');

  return (
    <div className="App">
      <Ruoter>
        <Nav />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/recipe/:id' exact component={RecipeItem} />
          <Route path='/categories/:name' exact component={CategoriesList} />
          <Route path='/search' exact component={RecipeName} />
        </Switch>
        <Footer />
      </Ruoter>

    </div>
  );
}


const Home = () => {

  return (
    <div>
      <div className='home'>
        <div className='title'>
          <h1>LOREM <span>PRODUCTS</span></h1>
          <p>Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable.</p>
        </div>
        <div className='prducts'>
          <div>
            <img src='https://www.themealdb.com/images/ingredients/Chicken.png'></img>
            <p>Chicken</p>
          </div>
          <div>
            <img src='https://www.themealdb.com/images/ingredients/Salmon.png'></img>
            <p>Salmon</p>
          </div>
          <div>
            <img src='https://www.themealdb.com/images/ingredients/Beef.png'></img>
            <p>Beef</p>
          </div>
          <div>
            <img src='https://www.themealdb.com/images/ingredients/Pork.png'></img>
            <p>Pork</p>
          </div>
          <div>
            <img src='https://www.themealdb.com/images/ingredients/Avocado.png'></img>
            <p>Avocado</p>
          </div>
        </div>
        <div className='list'>
          <div className='item'>
            <img src='https://www.themealdb.com/images/meal-icon.png'></img>
            <div className='item-content'>
              <h2>251</h2>
              <p>Total Meals</p>
            </div>
          </div>
          <div className='item'>
            <img src='https://www.themealdb.com/images/meal-icon.png'></img>
            <div className='item-content'>
              <h2>15</h2>
              <p>Total Categories</p>
            </div>
          </div>
          <div className='item'>
            <img src='https://www.themealdb.com/images/meal-icon.png'></img>
            <div className='item-content'>
              <h2>540</h2>
              <p>Total Ingredient</p>
            </div>
          </div>
        </div>
      </div>
      <Categories />
      {/* <Recipes /> */}
    </div>
  )
}

export default App;
