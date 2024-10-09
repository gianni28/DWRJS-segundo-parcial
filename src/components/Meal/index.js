import React from 'react';
import { Link } from 'react-router-dom'; 
import "./index.css";

const Meal = ({ meal }) => {
  return (
    <div className="meal-card">
      <Link to={`/meal/${meal.idMeal}`}>
        <img src={meal.strMealThumb} alt={meal.strMeal} />
      </Link>
    </div>
  );
};

export default Meal;
