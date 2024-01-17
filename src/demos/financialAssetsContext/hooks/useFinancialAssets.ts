import { useContext } from 'react';
import FinancialAssetsContext from '../FinancialAssetsContext';

export default function useFinancialAssets() {
    const context = useContext(FinancialAssetsContext);
    if (!context) {
        throw new Error('Context not installed.');
    }
    return context;
}
