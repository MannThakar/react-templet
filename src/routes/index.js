import DashBoardLayout from "../pages/DashBoardLayout";
import LoginForm from "../pages/LoginForm";

export const ALL_ROUTES = [
  {
    path: "/login",
    name: "Login",
    element: <LoginForm />,
    isPrivate: false,
  },
  {
    path: "/",
    name: "SideNav",
    element: <DashBoardLayout />,
    isPrivate: false,
  },
];
