import "./App.css";
import { Route, Routes } from "react-router-dom"; 
import Home from "./pages/home";
import DetailMeal from "./pages/DetailMeal/index"; 

function App() {
  return (
    <div className="App">
      <Routes> 
        <Route path="/" element={<Home />} />
        <Route path="/meal/:idMeal" element={<DetailMeal />} /> 
      </Routes>
    </div>
  );
}

export default App;
