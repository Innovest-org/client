import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "../App";
import ErrorPage from "../pages/Error/ErrorPage";
import AdminDashboard from "../pages/User/AdminDashboard";
import Dashboard from "../components/user/Dashboard/Dashboard";
import Members from "../components/user/Members/Members";
import Communities from "../components/user/Communities/Communities";
import Settings from "../components/user/Settings/Settings";
import Messages from "../components/user/Messages/Messages";
import AddOrEditForm from "../components/common/AddOrEditForm/AddOrEditForm";
import Admin from "../components/user/Admin/Admin";
import Profile from "../components/user/Profile/Profile";

// Innovest Components 
import InvestorDashboard from '../pages/User/InvestorDashboard'
import InvDashboard from '../components/user/Investor/Dashboard/Inv_DashBoard'
import InvInvestments from "../components/user/Investor/Investments/Inv_Investments";
import InvProposals from "../components/user/Investor/Proposals/Inv_Proposals";
import ProposalsDetails from "../components/user/Investor/ProposalsDetails/ProposalsDetails";
import InvMessages from "../components/user/Investor/Messages/Inv_Messages";
import InvSettings from "../components/user/Investor/Settings/Inv_Settings";
import Inv_Communities from "../components/user/Investor/Communities/Inv_Communities";

const Router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/admin-dashboard",
    element: <AdminDashboard />,
    children: [
      {
        index: true,
        element: <Dashboard />,
      },
      {
        path: "dashboard",
        element: <Dashboard />,
      },
      {
        path: "admin",
        element: <Admin />,
        children: [
          {
            path: "add-admin",
            element: <AddOrEditForm />,
          },
        {
          path: "edit-admin",
          element: <AddOrEditForm />,
        },
        {
          path: "profile",
          element: <Profile />,
        }
        ]
      },
      {
        path: "members",
        element: <Members />,
      },
      {
        path: "communities",
        element: <Communities />,
      },
      {
        path: "settings",
        element: <Settings />,
      },
      {
        path: "messages",
        element: <Messages />,
      },
      {
        path: "profile",
        element: <Profile />,
      },
      {
        path: "profile/:id",
        element: <Profile />,
      }
    ],
  },
  {
    path: 'innovest-dashboard',
    element: <InvestorDashboard />,
    children: [
      {
        index: true,
        element: <InvDashboard />,
      },
      {
        path: 'dashboard',
        element: <InvDashboard />,
      },
      {
        path: 'communities',
        element: <Inv_Communities />,
      },
      {
        path: 'investments',
        element: <InvInvestments />,
      },
      {
        path: 'proposals',
        element: <InvProposals />,
      },
      {
        path: 'proposals/:id',
        element: <ProposalsDetails />,
      },
      {
        path:'messages',
        element: <InvMessages />,
      },
      {
        path:'settings',
        element: <InvSettings />,
      },
    ]
  }
]);

const AppRouters = () => {
  console.log("AppRouters rendering");
  return (
    <RouterProvider router={Router} />
  )
}

export default AppRouters;