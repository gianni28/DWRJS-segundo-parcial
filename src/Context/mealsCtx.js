import React, { createContext, useContext, useReducer } from 'react';
import mealReducer, { initialMealState } from './mealsReducer';

// Crear contexto
const MealsContext = createContext();
const MealsDispatchContext = createContext();

// Proveedor del contexto
export const MealsProvider = ({ children }) => {
  const [state, dispatch] = useReducer(mealReducer, initialMealState);

  return (
    <MealsContext.Provider value={state}>
      <MealsDispatchContext.Provider value={dispatch}>
        {children}
      </MealsDispatchContext.Provider>
    </MealsContext.Provider>
  );
};

// Hooks para consumir el contexto
export const useMealsContext = () => useContext(MealsContext);
export const useMealsDispatch = () => useContext(MealsDispatchContext);
