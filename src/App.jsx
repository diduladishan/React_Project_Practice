import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import BlogPost from "./pages/reactRouter/BlogPost";
import HomePage from "./pages/reactRouter/HomePage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/blog/:id" element={<BlogPost />} />
      </Routes>
    </Router>
  );
}

export default App;
