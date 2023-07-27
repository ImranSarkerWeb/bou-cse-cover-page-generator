import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../pages/Home/Home/Home";
import PageGenerator from "../pages/Home/PageGenerator/PageGenerator";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/page-generator",
        element: <PageGenerator></PageGenerator>,
      },
    ],
  },
]);
export default router;
