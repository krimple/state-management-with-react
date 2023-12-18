export interface StockAsset {
    id: number;
    ticker: string;
    basisCost: number;
    currentValue: number;
    description: string;
}

export function isStockAsset(object: any): object is StockAsset {
    return 'ticker' in object && 'basisCost' in object && 'description' in object;
}

export interface BondAsset {
    id: number;
    issuingAgency: string;
    bondSeries: string;
    initialValue: number;
    targetValue: number;
    maturityInMonths: number;
}

export function isBondAsset(object: any): object is BondAsset {
    return (
        'issuingAgency' in object &&
        'bondSeries' in object &&
        'initialValue' in object &&
        'targetValue' in object &&
        'maturityInMonths' in object
    );
}

export interface CashAsset {
    id: number;
    accountType: string;
    accountNumber: string;
    balance: number;
}

export function isCashAsset(object: any): object is CashAsset {
    return 'accountType' in object && 'accountNumber' in object && 'balance' in object;
}

export type FinancialAssetType = StockAsset | BondAsset | CashAsset;
