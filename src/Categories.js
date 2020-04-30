import React, { useState, useEffect } from 'react';
import { BrowserRouter as Ruoter, Route, Switch, Link } from 'react-router-dom';
import Search from './Search'
import './Recipes.css';



function Categories() {
    const [query, setQuery] = useState('');
    const [recipes, setRecipes] = useState([])

    useEffect(() => {
        fetchRecipe()
    }, [])

    const fetchRecipe = async () => {
        const response = await fetch(`https://www.themealdb.com/api/json/v1/1/categories.php`);
        const data = await response.json();
        setRecipes(data)
        console.log(data.categories)


    }



    return (
        <div className='categories'>

            <div>
                {recipes.categories == undefined
                    ? <p>Nooo</p>
                    : <div className='categorie'>
                        <div>
                            <h1>LOREM <span>CATEGORIES</span></h1>
                            <p>Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition injected humour, or non-characteristic words etc.</p>
                            
                            </div>
                        {recipes.categories.map(recipe => (
                            <Link to={'/categories/' + recipe.strCategory} >
                                <div className='categorie-flex'>
                                    <div className ='categorie-img'>
                                        <img src={recipe.strCategoryThumb} /></div>
                                    <div className='categorie-content'>
                                        <h2>{recipe.strCategory}</h2>
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>
                }
            </div>
        </div>
    )
}

export default Categories;

