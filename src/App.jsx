import "./App.css";
// import AccordionFAQSection from "./pages/AccordionFAQSection";
// import BMICalculator from "./pages/BMICalculator";
// import ColorFlipper from "./pages/ColorFlipper";
// import ExpenseTracker from "./pages/ExpenseTracker";
// import GroceryListApp from "./pages/GroceryListApp";
// import Light_DarkModeToggle from "./pages/Light_DarkModeToggle";

// import ReactCalculator from "./pages/ReactCalculator";
// import SimpleCounterApp from "./pages/SimpleCounterApp";
// import SimpleFormValidation from "./pages/SimpleFormValidation";
// import TemperatureConverter from "./pages/TemperatureConverter";
// import CounterWithLocalStorage from "./pages/useEffect/CounterWithLocalStorage";
// import DarkModeToggle from "./pages/useEffect/DarkModeToggle";
// import FetchAndDisplayAPIData from "./pages/useEffect/FetchAndDisplayAPIData";
// import TitleUpdater from "./pages/useEffect/TitleUpdater";
// import WindowResizeListener from "./pages/useEffect/WindowResizeListener";
// import ToDoList from "./pages/useReducer/TodoList";
// import ToggleThemeApp from "./pages/useReducer/ToggleThemeApp";
// import UseReducerPractice from "./pages/UseReducerPractice";

// import RandomQuoteGenerator from "./pages/useEffect/RandomQuoteGenerator";
// import SimpleWeatherApp from "./pages/useEffect/SimpleWeatherApp";

import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import HomePage from "./pages/reactRouter/HomePage";
import About from "./pages/reactRouter/About";
import Projects from "./pages/reactRouter/Projects";
import Contact from "./pages/reactRouter/Contact";
import PageNotFound from "./pages/reactRouter/PageNotFound";
function App() {
  return (
    <BrowserRouter>
      <nav className="bg-green-700 py-2 text-2xl flex items-center gap-4">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/projects">Projects</Link>
        <Link to="/contact">Contact us</Link>
      </nav>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
