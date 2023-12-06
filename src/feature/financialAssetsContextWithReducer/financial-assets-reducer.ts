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

export type Actions = LoadDataAction;

export default function financialAssetsReducer(state: FinancialAssetsState, action: Actions) {
  console.dir(state);
  console.dir(action);
  switch (action.type) {
    case 'LOAD_DATA':
      return {...action.payload};
    default:
      return state;
  }
}
