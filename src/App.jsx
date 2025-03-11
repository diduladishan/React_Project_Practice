import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/reactRouter/HomePage";
import BlogPost from "./pages/reactRouter/BlogPost";
import PageNotFound from "./pages/reactRouter/PageNotFound";
import ProductDetails from "./pages/reactRouter/ProductDetails";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />

        <Route path="/blog/:id" element={<BlogPost />} />
        <Route path="/product/:id" element={<ProductDetails />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
