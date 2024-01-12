import { BondAsset, CashAsset, StockAsset } from '../../types';

export type FinancialAssetsStateType = {
    bonds: BondAsset[];
    cash: CashAsset[];
    stocks: StockAsset[];
};

export type FinancialAssetsContextType = {
    assets: FinancialAssetsStateType;
    fetchAssets: () => void;
};
