import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import Navbar from "./pages/LandingPage/Navbar.jsx";
import LandingPage from "./pages/LandingPage/LandingPage.jsx";
import Signin from "./pages/Auth/SignIn.jsx";
import Signup from "./pages/Auth/Signup.jsx";
import Forgot from "./pages/Auth/ForgetPass/Screen1.jsx";
import Forget1 from "./pages/Auth/ForgetPass/Screen2.jsx";
import Forget2 from "./pages/Auth/ForgetPass/Screen3.jsx";
import Forget3 from "./pages/Auth/ForgetPass/Screen4.jsx";
import Forget4 from "./pages/Auth/ForgetPass/Screen5.jsx";
import Footer from "./pages/LandingPage/Footer.jsx";

const Layout = () => {
  const location = useLocation();

  const isAuthPage =
    location.pathname.includes("/sign-in") ||
    location.pathname.includes("/sign-up") ||
    location.pathname.includes("/forget-password");

  return (
    <>
      <Navbar />

      <main style={{ paddingTop: "70px" }}>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/invest" element={<div>Invest Page</div>} />
          <Route path="/how-it-works" element={<div>How It Works Page</div>} />
          <Route path="/discover" element={<div>Discover Page</div>} />
          <Route path="/about" element={<div>About Page</div>} />

          <Route path="/sign-in" element={<Signin />} />
          <Route path="/sign-up" element={<Signup />} />

          <Route path="/forget-password" element={<Forgot />} />
          <Route path="/forget-password1" element={<Forget1 />} />
          <Route path="/forget-password2" element={<Forget2 />} />
          <Route path="/forget-password3" element={<Forget3 />} />
          <Route path="/forget-password4" element={<Forget4 />} />
        </Routes>
      </main>

      {!isAuthPage && <Footer />}
    </>
  );
};

const App = () => {
  return (
    <Router>
      <Layout />
    </Router>
  );
};

export default App;
