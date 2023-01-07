import SignUp from "./components/signup/SignUp";
import Home from "./Home";
import "react-toastify/dist/ReactToastify.css";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import "./App.css";

function App() {
  const Layout = () => {
    return (
      <div>
        {/* <Navbar />
        <div style={{ display: "flex" }}>
          <LeftBar />
          <div style={{ flex: 6 }}>
            
          </div>
          <RightBar />
        </div> */}
        <Outlet />
      </div>
    );
  };
  // const ProtectedRoute = ({ children }) => {
  //   if (!currentUser) {
  //     return <Navigate to="/login" />;
  //   }
  //   return children;
  // };
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
      ],
    },
    {
      path: "/login",
      element: <SignUp />,
    },
  ]);
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
