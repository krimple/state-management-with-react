import { BondAsset, CashAsset, FinancialAssetType, StockAsset } from '../types';

export async function saveStock(stock: StockAsset) {
    return saveAsset('stocks', stock);
}

export async function saveBond(bond: BondAsset) {
    return saveAsset('bonds', bond);
}

export async function saveCashAccount(cashAccount: CashAsset) {
    return saveAsset('cash', cashAccount);
}

async function saveAsset(assetType: string, asset: FinancialAssetType) {
    if (assetType !== 'stocks' && assetType !== 'cash' && assetType !== 'bonds') {
        throw new Error('Invalid asset type');
    }
    const response = await fetch(`/api/${assetType}/${asset.id}`, {
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(asset),
        method: 'PUT',
    });
    if (response.ok) {
        return true;
    } else {
        throw new Error(`Networking error - ${response.status} = ${response.statusText}`);
    }
}
