import { useState, useEffect, useCallback } from "react";
import { FetchMealByFirstLetter, SearchMealByName } from '../services/mealtService.js'; 

const useMeals = (search) => { // Recibir el término de búsqueda
  const [meals, setMeals] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchMeals = useCallback(async () => {
    setLoading(true);
    setError(null);
    const letters = 'abcdefghijklmnopqrstuvwxyz'.split('');
    let allMeals = [];

    try {
      for (let letter of letters) {
        const data = await FetchMealByFirstLetter(letter);
        if (data) {
          allMeals = allMeals.concat(data); // Agregar los meals obtenidos
        }
      }
      setMeals(allMeals);
    } catch (error) {
      setError('Error fetching meals');
    } finally {
      setLoading(false);
    }
  }, []);

  const searchMeals = useCallback(async () => {
    if (search) {
      setLoading(true);
      setError(null);
      try {
        const data = await SearchMealByName(search); // Buscar meals por nombre
        setMeals(data || []);
      } catch (error) {
        setError('Error fetching meals');
      } finally {
        setLoading(false);
      }
    } else {
      await fetchMeals(); // Si no hay búsqueda, obtener todos los meals
    }
  }, [search, fetchMeals]);

  useEffect(() => {
    searchMeals(); // Buscar meals al cambiar la entrada de búsqueda
  }, [search, searchMeals]);

  return { meals, loading, error };
};

export default useMeals;
