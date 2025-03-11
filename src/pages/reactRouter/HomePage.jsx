import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <div>
      <Link to="/dashboard">Dashboard</Link>

      <Link to="/dashboard/profile">S</Link>
      <Link to="/dashboard/settings">Aaaa</Link>
    </div>
  );
};

export default HomePage;
