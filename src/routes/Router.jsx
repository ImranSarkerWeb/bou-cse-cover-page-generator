import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../pages/Home/Home/Home";
import PageGenerator from "../pages/Home/PageGenerator/PageGenerator";
import ResultCheker from "../pages/Home/ResultChecker/ResultCheker";
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
      {
        path: "/result-checker",
        element: <ResultCheker></ResultCheker>,
      },
    ],
  },
]);
export default router;
