import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import '../styles/recipes.scss'
import BackButton from "../components/BackButton";

const Recipes = () => {
  const { id } = useParams();

  const [onlyRecipe, setOnlyRecipe] = useState([]);

  useEffect(() => {
    getDataThree();
  }, []);

  const getDataThree = async () => {
    const response = await fetch(
      `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`
    );
    const dataThree = await response.json();

    setOnlyRecipe(dataThree.meals[0]);
  };


  return (
    
    <div className="container">
      <div className="button-back">
        <BackButton />
      </div>
       <h2>Name: <span>{onlyRecipe.strMeal}</span></h2>
      <div className="method-img">
       <img src={onlyRecipe.strMealThumb} alt="" />
       <div className="info">
        <h3>Method...</h3>
        <p>{onlyRecipe.strInstructions}</p>
       </div>
      </div>
    </div>
  );
};

export default Recipes;