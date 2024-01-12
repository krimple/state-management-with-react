import { createContext } from 'react';
import { FinancialAssetsContextType } from './FinancialAssetsContextType';

const FinancialAssetsContext = createContext<FinancialAssetsContextType | null>(null);

export default FinancialAssetsContext;
