import { createContext } from 'react';
import { BondAsset, CashAsset, StockAsset } from '../../types';

export type FinancialAssetContextType = {
    assets: {
        stocks: StockAsset[];
        bonds: BondAsset[];
        cash: CashAsset[];
    };
    fetchAssets: () => void;
};

export const FinancialAssetsContext = createContext<FinancialAssetContextType>({
    assets: {
        stocks: [],
        bonds: [],
        cash: [],
    },
    fetchAssets: () => {},
});
