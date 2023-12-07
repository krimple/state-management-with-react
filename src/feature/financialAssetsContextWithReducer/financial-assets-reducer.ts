import { BondAssetType, CashAssetType, StockAssetType } from '../../types';

export interface FinancialAssetsState {
  stocks: StockAssetType[];
  bonds: BondAssetType[];
  cash: CashAssetType[];
}

export type LoadDataAction = {
  type: 'LOAD_DATA',
  payload: FinancialAssetsState
};

export type UpdateStockAction = {
  type: 'UPDATE_STOCK',
  payload: StockAssetType
};

export type UpdateBondAction = {
  type: 'UPDATE_BOND',
  payload: BondAssetType
};

export type UpdateCashAction = {
  type: 'UPDATE_CASH',
  payload: CashAssetType
};

export type Actions = LoadDataAction | UpdateBondAction | UpdateStockAction | UpdateCashAction;

// TODO - split into three slices?
export default function financialAssetsReducer(state: FinancialAssetsState, action: Actions) {
  switch (action.type) {
    case 'LOAD_DATA':
      return {...action.payload};
    case 'UPDATE_STOCK':
      // maybe easier with immer?
      const stockIdx = state.stocks.findIndex((s: StockAssetType)=> (s.id === action.payload.id));
      // did we find the stock to patch?
      if (stockIdx > -1) {
        return {
          bonds: [...state.bonds],
          cash: [...state.cash],
          stocks: [
            ...state.stocks.slice(0, stockIdx -1),
            { ...action.payload },
            ...state.stocks.slice(stockIdx +1)
          ]
        }
      }
      // otherwise fall out and return existing state
      return state;
    default:
      return state;
  }
}
