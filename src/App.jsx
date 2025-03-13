import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/reactRouter/HomePage";
import PageNotFound from "./pages/reactRouter/PageNotFound";
import Dashboard from "./pages/reactRouter/Dashboard";
import Settings from "./pages/reactRouter/Settings";
import Profile from "./pages/reactRouter/Profile";
import Contact from "./pages/reactRouter/Contact";
import Projects from "./pages/reactRouter/Projects";
import NavBar from "./pages/reactRouter/NavBar";

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="dashboard" element={<Dashboard />}>
          <Route path="profile" element={<Profile />} />
          <Route path="settings" element={<Settings />} />
        </Route>

        <Route path="/contact" element={<Contact />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
