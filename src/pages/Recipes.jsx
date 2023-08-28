import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const Recipes = ( ) => {
    const {id} = useParams()

    const [onlyRecipe, setOnlyRecipe] = useState(null)

    useEffect (() => {
        getDataThree()
    },[])

    const setRecipeData = () => {
        onlyRecipe !== null ? setOnlyRecipe(dataThree.meals[0].strInstructions) : null
    }

    const getDataThree = async () => {
        const response = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`);
        const dataThree = await response.json();
        console.log(dataThree.meals[0])
    
    }

    // console.log(onlyRecipe)
    
    return (
        <div></div>
    )
       
     
    
    
}
 
export default Recipes;