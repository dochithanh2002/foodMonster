import { createBrowserRouter } from "react-router-dom";
import Home from "../../components/Pages/Home/Home/Home";
import Services from "../../components/Pages/Services/Services/Services";
import ServiceSingle from "../../components/Pages/Services/ServiceSingle/ServiceSingle";
import NotFoundPage from "../../components/Shared/NotFoundPage/NotFoundPage";
import Main from "../../layout/Main";
import Anket from "../../components/Pages/Anket/Anket/Anket";

// const baseUrl = process.env.REACT_APP_BACKEND_URL;

const Router = createBrowserRouter([
  {
    path: "/foodMonster",
    element: <Main></Main>,
    children: [
      {
        path: "",
        loader: async () => fetch(`http://54.179.44.247:8000/api/eateries/all`),
        element: <Home></Home>,
      },
      {
        path: "services",
        loader: async () => fetch(`http://54.179.44.247:8000/api/eateries/all`),
        element: <Services></Services>,
      },
      {
        path: "services/:_id",
        loader: async ({ params }) =>
          fetch(`http://54.179.44.247:8000/api/eateries/${params._id}`),
        element: <ServiceSingle></ServiceSingle>,
      },
      {
        path: "anket",
        element: <Anket></Anket>,
      },
    ],
  },
  {
    path: "*",
    element: <NotFoundPage></NotFoundPage>,
  },
]);

export default Router;
