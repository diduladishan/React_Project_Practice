import React from "react";
import { Link, Outlet } from "react-router-dom";

const Dashboard = () => {
  return (
    <div>
      <Outlet />
    </div>
  );
};

export default Dashboard;
