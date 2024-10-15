import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "../App";
import ErrorPage from "../pages/Error/ErrorPage";
import AdminDashboard from "../pages/User/AdminDashboard";
import Dashboard from "../components/user/Admins/Dashboard/Dashboard";
import Members from "../components/user/Admins/Members/Members";
import Communities from "../components/user/Admins/Communities/Communities";
import Settings from "../components/user/Admins/Settings/Settings";
import Messages from "../components/user/Admins/Messages/Messages";
import AdminForm from "../components/common/AddOrEditForm/AddOrEditForm";
import Admin from "../components/user/Admins/Admin/Admin";
import Profile from "../components/user/Admins/Profile/Profile";
import InvestorDashboard from '../pages/User/InvestorDashboard';
import InvDashboard from '../components/user/Investor/Dashboard/Inv_DashBoard';
import InvInvestments from "../components/user/Investor/Investments/Inv_Investments";
import InvProposals from "../components/user/Investor/Proposals/Inv_Proposals";
import ProposalsDetails from "../components/user/Investor/ProposalsDetails/ProposalsDetails";
import InvMessages from "../components/user/Investor/Messages/Inv_Messages";
import InvSettings from "../components/user/Investor/Settings/Inv_Settings";
import InvCommunities from "../components/user/Investor/Communities/Inv_Communities";
import MemberForm from "../components/common/AddOrEditForm/components/MemberForm";
import Login from "../pages/Auth/login";
import ProtectedRoute from "../components/ProtectedRoute";
import PublicRoute from "../components/PublicRoutes";
import ModeratePages from "../components/common/ModeratePages";
import ModerateUsers from "../components/common/ModerateUsers";

const Router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/register",
    element: <PublicRoute>
      <Login />
    </PublicRoute>,
  },
  {
    path: "/login",
    element: <PublicRoute>
      <Login />
    </PublicRoute>,
  },
  {
    path: "/admin-dashboard",
    element: (
      <ProtectedRoute>
        <AdminDashboard />
      </ProtectedRoute>
    ),
    children: [
      {
        index: true,
        element: <Dashboard />,
      },
      {
        path: "dashboard",
        element: <Dashboard />,
        children: [
          {
            path: "add-member",
            element: <MemberForm />,
          },
          {
            path: "moderate-pages",
            element: <ModeratePages />,
          },
          {
            path: "moderate-users",
            element: <ModerateUsers />,
          }
        ]
      },
      {
        path: "admin",
        element: <Admin />,
        children: [
          {
            path: "add-admin",
            element: <AdminForm />,
          },
          {
            path: "view-admins",
            element: <Admin />,
          },
          {
            path: "edit-admin/:admin_id",
            element: <AdminForm />,
          },
          {
            path: "profile",
            element: <Profile />,
          },
        ]
      },
      {
        path: "members",
        element: <Members />,
        children: [
          {
            path: "add-member",
            element: <MemberForm />,
          },
          {
            path: "edit-member/:id",
            element: <MemberForm />,
          },
          {
            path: "view-members",
            element: <Members />,
          }
        ]
      },
      {
        path: "communities",
        element: <Communities />,
        children: [
          {
            path: "add-community",
            element: <MemberForm />,
          },
          {
            path: "edit-community/:id",
            element: <MemberForm />,
          },
          {
            path: "view-communities",
            element: <Communities />,
          }
        ]
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
    path: "investor-dashboard",
    element: (
      <ProtectedRoute>
        <InvestorDashboard />
      </ProtectedRoute>
    ),
    children: [
      {
        index: true,
        element: <InvDashboard />,
      },
      {
        path: "dashboard",
        element: <InvDashboard />,
      },
      {
        path: "communities",
        element: <InvCommunities />,
      },
      {
        path: "investments",
        element: <InvInvestments />,
      },
      {
        path: "proposals",
        element: <InvProposals />,
      },
      {
        path: "proposals/:id",
        element: <ProposalsDetails />,
      },
      {
        path: "messages",
        element: <InvMessages />,
      },
      {
        path: "settings",
        element: <InvSettings />,
      },
    ]
  }
]);

const AppRouters = () => {
  return (
    <RouterProvider router={Router} />
  );
};

export default AppRouters;
