import { BondAsset, CashAsset, CombinedFinancialAssetsStateType, StockAsset } from '../types';

export async function getAssets(): Promise<CombinedFinancialAssetsStateType> {
    try {
        let stocksData = await getStocks();
        const bondsData = await getBonds();
        const cashData = await getCash();
        return { stocks: stocksData, bonds: bondsData, cash: cashData } as CombinedFinancialAssetsStateType;
    } catch (e) {
        throw new Error('fetch failed');
    }
}

export async function getCash() {
    const response = await fetch('/api/cash');
    if (response.ok) {
        return (await response.json()) as CashAsset[];
    }
    throw new Error(`Network error. ${response.status} = ${response.statusText}`);
}

export async function getStocks() {
    const response = await fetch('/api/stocks');
    if (response.ok) {
        return (await response.json()) as StockAsset[];
    }
    throw new Error(`Network error. ${response.status} = ${response.statusText}`);
}

export async function getBonds() {
    const response = await fetch('/api/bonds');
    if (response.ok) {
        return (await response.json()) as BondAsset[];
    }
    throw new Error(`Network error. ${response.status} = ${response.statusText}`);
}
