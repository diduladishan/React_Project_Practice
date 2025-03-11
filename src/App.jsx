import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/reactRouter/HomePage";
import PageNotFound from "./pages/reactRouter/PageNotFound";
import Dashboard from "./pages/reactRouter/Dashboard";
import Settings from "./pages/reactRouter/Settings";
import Profile from "./pages/reactRouter/Profile";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="dashboard" element={<Dashboard />}>
          <Route path="profile" element={<Profile />} />
          <Route path="settings" element={<Settings />} />
        </Route>
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
