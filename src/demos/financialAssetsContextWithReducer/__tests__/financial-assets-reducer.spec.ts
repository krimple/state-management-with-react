import { BondAsset, CashAsset, StockAsset, isBondAsset, isCashAsset, isStockAsset } from '~/types';
import financialAssetsReducer, { FinancialAssetsState } from '../financial-assets-reducer';

describe('Financial Assets Context Reducer', () => {
    const state: FinancialAssetsState = {
        assets: {
            cash: [],
            bonds: [],
            stocks: [],
        },
    };

    beforeEach(() => {
        state.assets = {
            stocks: [
                {
                    id: 1,
                    ticker: 'AAPL',
                    basisCost: 150.1,
                    description: 'Apple Inc.',
                } as StockAsset,
            ],
            cash: [
                {
                    id: 2,
                    accountNumber: 'aaa-dg-3dfdf-34e3',
                    accountType: 'SAVINGS',
                    balance: 200.2,
                } as CashAsset,
            ],
            bonds: [
                {
                    id: 3,
                    bondSeries: 'EE',
                    issuingAgency: 'US Government',
                    initialValue: 100,
                    targetValue: 200,
                    maturityInMonths: 360,
                } as BondAsset,
            ],
        };
    });

    it('should read when updating stock in item #1', () => {
        const newState: FinancialAssetsState = financialAssetsReducer(state, {
            type: 'UPDATE_STOCK_ASSET',
            payload: {
                id: 1,
                ticker: 'ZAMAZON',
                basisCost: 30.4,
                description: 'Blamazon.com, Inc.',
            } as StockAsset,
        });
        const updatedAsset = newState.assets.stocks.find((s: StockAsset) => s.id === 1);
        expect(isStockAsset(updatedAsset)).toBeTruthy();
        const stockAsset = updatedAsset as StockAsset;
        expect(stockAsset).toEqual({
            id: 1,
            ticker: 'ZAMAZON',
            basisCost: 30.4,
            description: 'Blamazon.com, Inc.',
        });
    });
    it('properly update a bond asset', () => {
        const newState: FinancialAssetsState = financialAssetsReducer(state, {
            type: 'UPDATE_BOND_ASSET',
            payload: {
                id: 3,
                issuingAgency: 'The Illuminati',
                bondSeries: 'ZZ',
                initialValue: 10.5,
                targetValue: 30.4,
                maturityInMonths: 20,
            } as BondAsset,
        });
        const updatedAsset = newState.assets.bonds.find((s: BondAsset) => s.id === 3);
        expect(isBondAsset(updatedAsset)).toBeTruthy();
        const bondAsset = updatedAsset as BondAsset;
        expect(bondAsset).toEqual({
            id: 3,
            issuingAgency: 'The Illuminati',
            bondSeries: 'ZZ',
            initialValue: 10.5,
            targetValue: 30.4,
            maturityInMonths: 20,
        });
    });

    it('should properly update a cash asset', () => {
        const newState: FinancialAssetsState = financialAssetsReducer(state, {
            type: 'UPDATE_CASH_ASSET',
            payload: {
                id: 2,
                accountNumber: '999999',
                accountType: 'CHECKING',
                balance: 10.4,
            } as CashAsset,
        });
        const updatedAsset = newState.assets.cash.find((s: CashAsset) => s.id === 2);
        expect(isCashAsset(updatedAsset)).toBeTruthy();
        const cashAsset = updatedAsset as CashAsset;
        expect(cashAsset).toEqual({
            id: 2,
            accountNumber: '999999',
            accountType: 'CHECKING',
            balance: 10.4,
        });
    });
});
