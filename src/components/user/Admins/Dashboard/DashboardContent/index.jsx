import React from "react";
import OverviewCard from "../../../../common/OverviewCard/OverviewCard";
import UserTable from "../../../../common/tables/UsersData";

const DashboardContent = ({ users }) => {
  return (
    <div>
      <div className="my-2">
        <OverviewCard />
      </div>

      <div className="my-2 p-3">
        <UserTable users={users} />
      </div>
    </div>
  );
};

export default DashboardContent;
