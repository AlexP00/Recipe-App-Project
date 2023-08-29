import { Link } from "react-router-dom";
import { useEffect,useState } from "react";
import '../styles/recipecard.scss';


const RecipeCard = () => {
    const [recipe, setRecipe] = useState([])
    const [recipeTwo, setRecipeTwo] = useState([])

    useEffect(() => {
        getDataOne(),
        getDataTwo()
    },[])


    const getDataOne = async () => {
        const res = await fetch('https://www.themealdb.com/api/json/v1/1/filter.php?i=chicken_breast');
        const data = await res.json();
        setRecipe(data.meals)
        console.log(data.meals)
        
        return data;
    };

    const getDataTwo = async () => {
        const response = await fetch("https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood");
        const dataTwo = await response.json();
        setRecipeTwo(dataTwo.meals)

        return dataTwo;
    };

   

    return (
    
    <div className="card-container">
        
        {recipe.map((meals) => {
            return(
               <Link className="card" to={`/recipes/${meals.idMeal}`}>
               <div className="image">
                 <img src={meals.strMealThumb} alt={meals.strMeal} />
               </div>
               <div className="info">
                <h3>Name: {meals.strMeal}</h3>
                <p>See Recipe...</p>
               </div>
               </Link>
            )
        })}
        {recipeTwo.map((meals) => {
            return(
               <Link className="card" to={`/recipes/${meals.idMeal}`}>
               <div className="image">
                 <img src={meals.strMealThumb} alt={meals.strMeal} />
               </div>
               <div className="info">
                <h3>Name: {meals.strMeal}</h3>
                <p>See Recipe...</p>
               </div>
               </Link>
            )
        })}
   
    </div>
    )
};


 
export default RecipeCard;

