import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider } from 'react-router';
import { createBrowserRouter } from 'react-router-dom';
import App from './App';
import FinancialAssetsContextDriven from './demos/financialAssetsContext/FinancialAssetsContextDriven';
import FinancialAssetsContextWithReducer from './demos/financialAssetsContextWithReducer/FinancialAssetsContextWithReducer';
import FinancialAssetsLocalState from './demos/financialAssetsLocalState/FinancialAssetsLocalState';
import FinancialAssetsWithRedux from './demos/financialAssetsRedux/FinancialAssetsWithRedux';
import FinancialAssetsWithReactQuery from './demos/reactQuery/FinancialAssetsWithReactQuery';
import './styles.css';

const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        children: [
            {
                path: 'local-state',
                element: <FinancialAssetsLocalState />,
            },
            {
                path: 'context',
                element: <FinancialAssetsContextDriven />,
            },
            {
                path: 'context-reducer',
                element: <FinancialAssetsContextWithReducer />,
            },
            {
                path: 'redux',
                element: <FinancialAssetsWithRedux />,
            },
            {
                path: 'react-query',
                element: <FinancialAssetsWithReactQuery />,
            },
        ],
    },
]);
ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>
);
