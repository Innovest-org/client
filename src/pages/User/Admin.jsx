import React, { useContext } from "react";
import { AppContext } from "../../context/AppContext";
import Sidebar from "../../components/common/LeftSidebar/Sidebar";
import Dashboard from "../../components/user/Dashboard/Dashboard";
import Admin from "../../components/user/Admin/Admin";
import Members from "../../components/user/Members/Members";
import Communities from "../../components/user/Communities/Communities";
import Settings from "../../components/user/Settings/Settings";
import Messages from "../../components/user/Messages/Messages";
import DashboardHeader from "../../components/layout/DashboardHeader";

const AdminUser = () => {
  const { activeComponent } = useContext(AppContext);

  const renderComponent = () => {
    switch (activeComponent) {
      case "Admin":
        return <Admin />;
      case "Members":
        return <Members />;
      case "Communities":
        return <Communities />;
      case "Settings":
        return <Settings />;
      case "Messages":
        return <Messages />;
      default:
        return <Dashboard />;
    }
  };

  return (
    <div className="admin-container container-fluid">
      <div className="row">
        <div className="col-12 col-md-3 col-lg-2 p-0 d-none d-md-block">
          <Sidebar />
        </div>
        
        <div className="col-12 col-md-9 col-lg-10">
          <DashboardHeader />
          {renderComponent()}
        </div>
      </div>

      <div className="d-block d-md-none">
        <Sidebar />
      </div>
    </div>
  );
};

export default AdminUser;
