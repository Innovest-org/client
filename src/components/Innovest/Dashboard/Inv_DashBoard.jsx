import React from 'react'
import CustomButton from '../../common/CustomButton/CustomButton'
import OverviewCard from '../../common/OverviewCard/OverviewCard'
import UserTable from '../../common/UserTable/UsersData'
import RightSidebar from '../../common/RightSidebar/RightSidebar'

const Inv_DashBoard = () => {

  return (
    <>
      <div className="dashboard-container container m-3">
      <div className="row">
        <div className="col-12 col-md-7 ps-4">
          <h2>
            Welcome, <span className='dashboard-text'>Charles Doe</span>
          </h2>
        </div>
      </div>

      <div className="dashboard-content row">
        <div className="main-content col-12 col-md-9 col-sm-12">
          <div className="my-2">
            <OverviewCard />
          </div>

        </div>

        <div className="right-sidebar col-12 col-md-2 mt-md-2  mb-4">
          <RightSidebar />
        </div>
      </div>
    </div>
    </>
  )
}

export default Inv_DashBoard