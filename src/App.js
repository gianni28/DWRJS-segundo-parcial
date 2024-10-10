import "./App.css";
import { Route, Router, Routes } from "react-router-dom"; 
import Home from "./pages/home";
import DetailMeal from "./pages/DetailMeal/index"; 

function App() {
  return (
    <Router basename={process.env.PUBLIC_URL}>
    <div className="App">
      <Routes> 
        <Route path="/" element={<Home />} />
        <Route path="/meal/:idMeal" element={<DetailMeal />} /> 
      </Routes>
    </div>
    </Router>
  );
}

export default App;
