import React, { useState, useEffect } from 'react';
import { BrowserRouter as Ruoter, Route, Switch, Link } from 'react-router-dom';
import Search from './Search'
import './Recipes.css';



function Recipes() {
    const [query, setQuery] = useState('');
    const [recipes, setRecipes] = useState([])

    useEffect(() => {
        fetchRecipe()
    }, [])

    const fetchRecipe = async () => {
        const response = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood`);
        const data = await response.json();
        setRecipes(data)


    }



    return (
        <div className='recipes-B'>
           
            <div>
                <div className='back'></div>
                {recipes.meals == undefined
                    ? <p>Nooo</p>
                    : <div className='recipes'>
                        {recipes.meals.map(recipe => (
                            <div className='flex'>
                                <div>
                                <img src={recipe.strMealThumb} /></div>
                                <div className='content'>
                                    <h2>{recipe.strMeal}</h2>
                                    <Link to= {'/recipe/'+recipe.idMeal} >
                                        <p>See More</p>
                                    </Link>
                                </div>
                            </div>
                        ))}
                    </div>
                }
            </div>
        </div>
    )
}

export default Recipes;

