/* eslint-disable */
import React from "react";
import ReactDOM from "react-dom/client";
import Home from "./components/pages/Homme"
import Category1 from "./components/pages/categories/Category1";
import Category2 from "./components/pages/categories/Category2";
import Category3 from "./components/pages/categories/Category3";
import Category4 from "./components/pages/categories/Category4";
import Category5 from "./components/pages/categories/Category5";

  {/*this is charts calling*/}
    import Debut from "./components/pages/charts/Debut";
    import Credit from "./components/pages/charts/Credit";
    import Compare from "./components/pages/charts/Compare";
    import CashFlow from "./components/home/Cashflow";


import "./App.css";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import App from "./App";

const router = createBrowserRouter(
  createRoutesFromElements(
      <Route path="/" element={<App />} >             
        <Route index element={<Home />} />
        <Route path="Category1" element={<Category1 />} />
        <Route path="Category2" element={<Category2 />} />
        <Route path="Category3" element={<Category3 />} />
        <Route path="Category4" element={<Category4 />} />
        <Route path="Category5" element={<Category5 />} />
          {/*this is charts calling*/}
          <Route path="Debut" element={<Debut />} />
          <Route path="Credit" element={<Credit />} />
          <Route path="Compare" element={<Compare />} />
          <Route path="CashFlow" element={<CashFlow />} />

      </Route>
  )

);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
