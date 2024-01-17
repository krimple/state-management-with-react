import { Dispatch } from 'react';
import { getAssets, saveBond, saveCashAccount, saveStock } from '../../apis';
import { BondAsset, CashAsset, CombinedFinancialAssetsStateType, StockAsset } from '../../types';

export interface FinancialAssetsState {
    assets: CombinedFinancialAssetsStateType;
}

export type LoadDataAction = {
    type: 'LOAD_DATA';
    payload: CombinedFinancialAssetsStateType;
};

export type UpdateBondAssetAction = {
    type: 'UPDATE_BOND_ASSET';
    payload: BondAsset;
};

export type UpdateCashAssetAction = {
    type: 'UPDATE_CASH_ASSET';
    payload: CashAsset;
};

export type UpdateStockAssetAction = {
    type: 'UPDATE_STOCK_ASSET';
    payload: StockAsset;
};

// TODO can we pull the dispatch method in this file, and not force it into the component? Doubtful but maybe.
export async function doLoadData(dispatch: Dispatch<Actions>) {
    dispatch({ type: 'LOAD_DATA', payload: await getAssets() });
}

export async function doSaveBond(bond: BondAsset, dispatch: Dispatch<Actions>) {
    await saveBond(bond);
    dispatch({ type: 'UPDATE_BOND_ASSET', payload: bond });
}

export async function doSaveCashAccount(cash: CashAsset, dispatch: Dispatch<Actions>) {
    await saveCashAccount(cash);
    dispatch({ type: 'UPDATE_CASH_ASSET', payload: cash });
}

export async function doSaveStock(stock: StockAsset, dispatch: Dispatch<Actions>) {
    await saveStock(stock);
    dispatch({ type: 'UPDATE_STOCK_ASSET', payload: stock });
}

export type Actions = LoadDataAction | UpdateBondAssetAction | UpdateCashAssetAction | UpdateStockAssetAction;

export default function financialAssetsReducer(state: FinancialAssetsState, action: Actions) {
    switch (action.type) {
        case 'LOAD_DATA':
            return { assets: { ...action.payload } };
        case 'UPDATE_BOND_ASSET':
            return {
                assets: {
                    ...state.assets,
                    bonds: state.assets.bonds.map((bondAsset: BondAsset) =>
                        bondAsset.id === action.payload.id ? action.payload : bondAsset
                    ),
                },
            };
        case 'UPDATE_CASH_ASSET':
            return {
                assets: {
                    ...state.assets,
                    cash: state.assets.cash.map((cashAsset: CashAsset) =>
                        cashAsset.id === action.payload.id ? action.payload : cashAsset
                    ),
                },
            };
        case 'UPDATE_STOCK_ASSET':
            return {
                assets: {
                    ...state.assets,
                    stocks: state.assets.stocks.map((stockAsset: StockAsset) =>
                        stockAsset.id === action.payload.id ? action.payload : stockAsset
                    ),
                },
            };
        default:
            return state;
    }
}
