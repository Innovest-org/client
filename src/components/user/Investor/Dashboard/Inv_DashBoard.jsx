import React from 'react'
import OverviewCard from '../../../common/OverviewCard/OverviewCard'
import RightSidebar from '../../../common/RightSidebar/RightSidebar'
import RecentProposals from '../../../common/RecentProposals/RecentProposals'

const Inv_DashBoard = () => {


  return (
    <>
      <div className="investor-dashboard-container container m-3">
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

        <div className="mt-5 p-3">
          <RecentProposals />
        </div>

        </div>

        <div className="right-sidebar col-12 col-md-2 mt-md-2  mb-4">
          {/* Render the SideBar depend on the userType (Admin - investor) */}
          <RightSidebar userType={'investor'} />
        </div>
      </div>
    </div>
    </>
  )
}

export default Inv_DashBoard