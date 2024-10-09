import React from 'react';
import Meal from "../../components/Meal"; 
import { useFilterContext } from "../../Context/filtersCtx"; 
import useMeals from "../../hooks/useMeals"; 

import './index.css';

const ListMeal = () => {
    const { filters } = useFilterContext(); 
    const { meals, loading, error } = useMeals(filters.search); 

    return (
        <div className='App'>
            <div className="content-wrapper">
                {loading && <p>Cargando...</p>}
                {error && <p>{error}</p>}
                {!loading && meals.length === 0 && <p>No hay recetas disponibles.</p>}
                {!loading && meals.length > 0 && (
                    <div className="meal-grid">
                        {meals.map((meal) => (
                            <Meal key={meal.idMeal} meal={meal} /> 
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
}

export default ListMeal;
