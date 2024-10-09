import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { FetchMealById } from "../../services/mealtService";
import SearchBox from '../../components/SearchBox/index';

import "./index.css"

const DetailMeal = () => {
  const { idMeal } = useParams();
  const [meal, setMeal] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const data = await FetchMealById(idMeal);
      setMeal(data);
    };

    fetchData();
  }, [idMeal]);

  if (!meal) return <p>Cargando...</p>;

    return (
        <div className="meal-detail">
            <SearchBox />
            <h1>{meal.strMeal}</h1>
            <div className="content">  
                <img src={meal.strMealThumb} alt={meal.strMeal} />
                <p>{meal.strInstructions}</p>
            </div>
        </div>
    );
};

export default DetailMeal;
