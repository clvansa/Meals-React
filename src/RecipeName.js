import React, { useState, useEffect } from 'react';
import { BrowserRouter as Ruoter, Route, Switch, Link } from 'react-router-dom';
import Search from './Search'



function RecipeName() {
    let [query, setQuery] = useState('')
    let [search, setSearch] = useState('');
    const [recipe, setRecipe] = useState([]);

    useEffect(() => {
        fetchRecipe()
    }, [query])

    const fetchRecipe = async () => {  
        let response ;
        if(search == ''){
            query = 'random'
             response = await fetch(`https://www.themealdb.com/api/json/v1/1/${query}.php`)
        }else if(query !== '' ){
            response = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${query}`)
        }
        else{
            response = await fetch(`https://www.themealdb.com/api/json/v1/1/categories.php`)
        }
            const data = await response.json();
            setRecipe(data);
            

        
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


    const updateSearch =(e)=> {
        setSearch(e.target.value)
    }

    const getSearch = (e) =>{
        e.preventDefault();
        setQuery(search);
        fetchRecipe();

    }

    

    



    return (
        <div className='recipeItem'>
            <div>
            <form onSubmit={getSearch}>
                <input type='text' onChange={updateSearch} placeholder='Search for a Meal'/>            
                <input type='submit' value={search == '' ? 'Random':'Search'} />
            </form>
                {recipe.meals == undefined
                    ? <p className='not'>{query} is not found</p>
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

export default RecipeName;

