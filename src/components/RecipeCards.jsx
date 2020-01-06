import React, { Component } from 'react'

export default class RecipeCards extends Component {
    state = {
    recipes : [
        {name : 'spicy noodles', votes : 5},
        {name : 'chicken noodles', votes : 6},
        {name : 'lemon noodles', votes : 2} 
    ]
    }


    render() {
        return (
            <div>
                <ul>
                {this.state.recipes.map(recipe => {
                    return <li key={recipe.name}>
                        {recipe.name}
                        <br/>
                        votes : {recipe.votes}
                        <br/>
                        <button onClick={()=> this.incrementVote(recipe)}>UpVote</button>
                    </li>   
                })}
                </ul>
            </div>
        )
    }

    incrementVote = (recipeToUpdate) => {
        this.setState(currentState => {
            const updatedRecipes = currentState.recipes.map(recipe => {
                if (recipeToUpdate.name === recipe.name) {
                    recipe.votes ++
                    return recipe
                }
            })
            return {...currentState, updatedRecipes}
        })
    }
}
