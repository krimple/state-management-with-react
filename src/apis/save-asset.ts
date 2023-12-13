import { FinancialAssetType, isBondAsset, isCashAsset, isStockAsset } from '../types';

export async function saveAsset(asset: FinancialAssetType) {
  let apiEndpointType = '';
  if (isBondAsset(asset)) {
    apiEndpointType = 'bonds';
  } else if (isCashAsset(asset)) {
    apiEndpointType = 'cash';
  } else if (isStockAsset(asset)) {
    apiEndpointType = 'stocks';
  } else {
    throw new Error('Invalid endpoint type');
  }

  const response = await fetch(`/api/${apiEndpointType}/${asset.id}`, {
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(asset),
    method: 'PUT'
  });
  if (response.ok) {
    return true;
  } else {
    throw new Error(`Networking error - ${response.status} = ${response.statusText}`);
  }
}
