import { CombinedFinancialAssetsStateType } from '../../types';

export type FinancialAssetsContextType = {
    assets: CombinedFinancialAssetsStateType;
    fetchAssets: () => void;
};
