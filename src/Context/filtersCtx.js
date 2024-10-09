import React, { createContext, useContext, useState } from 'react';

// Crear el contexto
const FilterContext = createContext();

// Proveedor de contexto
export const FilterProvider = ({ children }) => {
    const [filters, setFilters] = useState({
        search: '', // Filtro de búsqueda
    });

    return (
        <FilterContext.Provider value={{ filters, setFilters }}>
            {children}
        </FilterContext.Provider>
    );
};

// Custom hook para usar el contexto
export const useFilterContext = () => {
    return useContext(FilterContext);
};