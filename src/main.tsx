import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { createBrowserRouter } from "react-router-dom";
import FinancialAssetsContextDriven from "./demos/financialAssetsContext/FinancialAssetsContextDriven.tsx";
import FinancialAssetsContextWithReducer from "./demos/financialAssetsContextWithReducer/FinancialAssetsContextWithReducer.tsx";
import { RouterProvider } from "react-router";
import FinancialAssetsWithRedux from "./demos/financialAssetsRedux/FinancialAssetsWithRedux.tsx";
import FinancialAssetsWithReactQuery from "./demos/reactQuery/FinancialAssetsWithReactQuery.tsx";
import FinancialAssetsLocalState from "./demos/financialAssetsLocalState/FinancialAssetsLocalState.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "local-state",
        element: <FinancialAssetsLocalState />,
      },
      {
        path: "context",
        element: <FinancialAssetsContextDriven />,
      },
      {
        path: "context-reducer",
        element: <FinancialAssetsContextWithReducer />,
      },
      {
        path: "redux",
        element: <FinancialAssetsWithRedux />,
      },
      {
        path: "react-query",
        element: <FinancialAssetsWithReactQuery />,
      },
    ],
  },
]);
ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
