import { FinancialAssetType } from '../../types';
import { Dispatch } from 'react';

export interface FinancialAssetsState {
  assets: Array<FinancialAssetType>;
}

export type LoadDataAction = {
  type: 'LOAD_DATA',
  payload: FinancialAssetType[]
};

export type UpdateAssetAction = {
  type: 'UPDATE_ASSET',
  payload: FinancialAssetType
};

// TODO can we pull the dispatch method in this file, and not force it into the component? Doubtful but maybe.
export async function doLoadData(dispatch: Dispatch<Actions>) {
  const responses = await Promise.all([
    fetch('/api/cash'),
    fetch('/api/bonds'),
    fetch('/api/stocks')
  ]);
  if (responses.find(r => !r.ok)) {
    throw new Error('Failed response. Check logs.');
  }
  const jsonResults = await Promise.all<[any, any, any]>([
    responses[0].json(),
    responses[1].json(),
    responses[2].json(),
  ]);
  const flatResults = jsonResults.flat() as FinancialAssetType[];

  // now send it off to the reducer
  dispatch({type: 'LOAD_DATA', payload: flatResults});
}

export type Actions = LoadDataAction | UpdateAssetAction;

export default function financialAssetsReducer(state: FinancialAssetsState, action: Actions) {
  switch (action.type) {
    case 'LOAD_DATA':
      return {assets: [...action.payload]};
    case 'UPDATE_ASSET':
      return {
        assets: state.assets.map(asset => asset.id === action.payload.id ? action.payload : asset)
      };
   default:
      return state;
  }
}
