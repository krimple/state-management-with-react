import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { createBrowserRouter } from 'react-router-dom';
import FinancialAssetsContextDriven from './feature/financialAssetsContext/FinancialAssetsContextDriven.tsx';
import FinancialAssetsContextWithReducer
  from './feature/financialAssetsContextWithReducer/FinancialAssetsContextWithReducer.tsx';
import { RouterProvider } from 'react-router';

const router = createBrowserRouter([

  {
    path: '/',
    element: <App />,
    children: [
      {
        path: 'context',
        element: <FinancialAssetsContextDriven />
      },
      {
        path: 'context-reducer',
        element: <FinancialAssetsContextWithReducer />
      }
    ]
  }
])
ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
