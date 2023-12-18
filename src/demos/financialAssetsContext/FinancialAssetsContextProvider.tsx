import { ReactNode, useEffect, useState } from 'react';
import { getBonds, getCash, getStocks } from '../../apis/get-assets';
import { BondAsset, CashAsset, StockAsset } from '../../types';
import { FinancialAssetsContext } from './useFinancialAssetsWithContext';

export const FinancialAssetsContextProvider = ({ children }: { children: ReactNode }) => {
    const [assets, setAssets] = useState<{ stocks: StockAsset[]; bonds: BondAsset[]; cash: CashAsset[] }>({
        stocks: [],
        bonds: [],
        cash: [],
    });

    const fetchAssets = async () => {
        try {
            const stocksData = await getStocks();
            const bondsData = await getBonds();
            const cashData = await getCash();
            setAssets({ stocks: stocksData, bonds: bondsData, cash: cashData });
        } catch (e) {
            throw new Error('fetch failed');
        }
    };

    useEffect(() => {
        fetchAssets();
    }, []);

    return (
        <FinancialAssetsContext.Provider value={{ assets, fetchAssets }}>{children}</FinancialAssetsContext.Provider>
    );
};
