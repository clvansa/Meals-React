import React, { useState, useEffect } from 'react';
import { BrowserRouter as Ruoter, Route, Switch, Link } from 'react-router-dom';
import Search from './Search'
import './RecipeItem.css';



function RecipesItem({ match }) {
    const [query, setQuery] = useState('');
    const [recipe, setRecipe] = useState([])

    useEffect(() => {
        fetchRecipe();
        console.log(recipe)
    }, [])

    const fetchRecipe = async () => {
        const response = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${match.params.id}`);
        const data = await response.json();
        setRecipe(data)


    }

    const table = (len) => {
        let table = []
        recipe.meals.map(recipe => {
            for (let i = 0; i <= len; i++) {
                let localArray = [<tr></tr>]
                localArray.push(<td>{recipe['strMeasure' + i]}</td>)
                localArray.push(<td>{recipe['strIngredient' + i]}</td>)
                table.push(localArray)

            }
        })
        return table
    }



    return (
        <div className='recipeItem'>


            <div>
                {recipe.meals == undefined
                    ? <p className='not'>Not </p>
                    : <div className='recipe'>
                        {recipe.meals.map(recipe => (
                            <div>
                            <div className='flex'>
                                <div className='image'>
                                    <img src={recipe.strMealThumb} />
                                </div>
                                <div className='content'>
                                    <h2>{recipe.strMeal}</h2>
                                    <h3>Category : {recipe.strCategory}</h3>
                                    <h4>{recipe.strArea}</h4>
                                    <table>
                                        {table(20)}
                                    </table>

                                </div>
                            </div>
                            <p className='instructions'>{recipe.strInstructions}</p>

                            </div>
                        ))}
                    </div>
                }
            </div>
        </div>
    )
}

export default RecipesItem;

