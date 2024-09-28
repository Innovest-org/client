import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "../App";
import AdminDashboard from "../pages/User/AdminDashboard";
import Dashboard from "../components/user/Dashboard/Dashboard";
import Members from "../components/user/Members/Members";
import Communities from "../components/user/Communities/Communities";
import Settings from "../components/user/Settings/Settings";
import Messages from "../components/user/Messages/Messages";
import AddOrEditForm from "../components/common/AddOrEditForm/AddOrEditForm";
import Admin from "../components/user/Admin/Admin";
import Profile from "../components/user/Profile/Profile";

const Router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
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
]);

const AppRouters = () => {
  console.log("AppRouters rendering");
  return (
    <RouterProvider router={Router} />
  )
}

export default AppRouters;