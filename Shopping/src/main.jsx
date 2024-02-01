import React from "react";
import ReactDOM from "react-dom/client";
import App from "./routes/App.jsx";
import Home from "./routes/Home.jsx";
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Bag from "./routes/Bag.jsx";
import { Provider } from "react-redux";
import AppStore from "./store/index.js";
import NewProduct, { NewProductPostAction } from "./routes/NewProduct.jsx";
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/home", element: <Home /> },
      { path: "/bag", element: <Bag /> },
      {
        path: "/addnewproduct",
        element: <NewProduct />,
        action: NewProductPostAction,
      },
    ],
  },
]);
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={AppStore}>
      <RouterProvider router={router}></RouterProvider>
    </Provider>
  </React.StrictMode>
);
