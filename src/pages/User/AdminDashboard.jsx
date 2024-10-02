// AdminDashboard.jsx
import React from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "../../components/common/LeftSidebar/Sidebar";
import DashboardHeader from "../../components/layout/DashboardHeader";

const AdminDashboard = () => {
  return (
    <div className="admin-container container-fluid">
      <div className="row">
        <div className="col-md-3 col-lg-2 p-0 d-none d-md-block">
          <Sidebar role={'admin'} />
        </div>
        
        <div className="col-12 col-md-9 col-lg-10 mx-auto">
          <DashboardHeader />
          <Outlet />
        </div>
      </div>

      <div className="d-block d-md-none">
        <Sidebar />
      </div>
    </div>
  );
};

export default AdminDashboard;