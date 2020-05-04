import React, { useState, useEffect } from 'react';
import { BrowserRouter as Ruoter, Route, Switch, Link } from 'react-router-dom';
import Search from './Search';
import Title from 'react-vanilla-tilt'
import './Recipes.css';



function CategoriesList({match}) {
    const [query, setQuery] = useState('');
    const [recipes, setRecipes] = useState([])

    useEffect(() => {
        fetchRecipe()
    }, [query])

    const fetchRecipe = async () => {
        const response = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${match.params.name}`);
        const data = await response.json();
        setRecipes(data)
        console.log(data.categories)


    }

    return (

        <div className='categoriesList'>
            <div>
                {recipes.meals == undefined
                    ? <p>Nooo</p>
                    : <div className='categoriesList-recipes'>
                        {recipes.meals.map(recipe => (
                            <Title className='categoriesList-flex'>
                                <div className='categoriesList-image'>
                                <img src={recipe.strMealThumb} /></div>
                                <div className='categoriesList-content'>
                                    <h2>{recipe.strMeal}</h2>
                                    <Link to= {'/recipe/'+ recipe.idMeal} >
                                        <p>MORE ABOUT</p>
                                    </Link>
                                </div>
                            </Title>
                        ))}
                    </div>
                }
            </div>
        </div>
    )
}


export default CategoriesList;

