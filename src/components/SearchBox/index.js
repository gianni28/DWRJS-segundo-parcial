import React from "react";
import SearchInput from "./searchInput";
import { ReactComponent as HomeIcon } from "../../assets/home.svg"; 
import { ReactComponent as Search } from "../../assets/search.svg";
import { useFilterContext } from "../../Context/filtersCtx"; 
import { useNavigate } from "react-router-dom"; 

import "./index.css";

const SearchBox = () => { 
    const { filters, setFilters } = useFilterContext();
    const navigate = useNavigate(); 

    const handleSearchChange = (value) => {
        setFilters({ ...filters, search: value });
    };

    const handleHomeClick = () => {
        setFilters({ search: '' }); // Limpiar el filtro de búsqueda
        navigate('/'); // Redirigir a la página principal
    };

    return (
        <div className="search-container">
            <HomeIcon className="home-icon" onClick={handleHomeClick} />
            <div className="search-box">
                <Search />
                <SearchInput onChange={handleSearchChange} /> 
            </div>
        </div>
    );
};

export default SearchBox;
