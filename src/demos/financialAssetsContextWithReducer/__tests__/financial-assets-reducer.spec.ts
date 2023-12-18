import { beforeEach, describe, expect, it } from 'vitest';
import {
    BondAsset,
    CashAsset,
    FinancialAssetType,
    StockAsset,
    isBondAsset,
    isCashAsset,
    isStockAsset,
} from '../../../types';
import financialAssetsReducer, { FinancialAssetsState } from '../financial-assets-reducer';

describe('Financial Assets Context Reducer', () => {
    describe('should properly update the right item', () => {
        const state: FinancialAssetsState = {
            assets: [],
        };

        beforeEach(() => {
            state.assets = [
                {
                    id: 1,
                    ticker: 'AAPL',
                    basisCost: 150.1,
                    description: 'Apple Inc.',
                } as StockAsset,
                {
                    id: 2,
                    accountNumber: 'aaa-dg-3dfdf-34e3',
                    accountType: 'SAVINGS',
                    balance: 200.2,
                } as CashAsset,
                {
                    id: 3,
                    bondSeries: 'EE',
                    issuingAgency: 'US Government',
                    initialValue: 100,
                    targetValue: 200,
                    maturityInMonths: 360,
                } as BondAsset,
            ] as FinancialAssetType[];
        });
        it('should read when updating stock in item #1', () => {
            const newState: FinancialAssetsState = financialAssetsReducer(state, {
                type: 'UPDATE_ASSET',
                payload: {
                    id: 1,
                    ticker: 'ZAMAZON',
                    basisCost: 30.4,
                    description: 'Blamazon.com, Inc.',
                } as StockAsset,
            });
            console.dir(newState);
            const updatedAsset = newState.assets.find((s) => s.id === 1);
            console.dir(updatedAsset);
            expect(isStockAsset(updatedAsset)).toBeTruthy();
            const stockAsset = updatedAsset as StockAsset;
            expect(stockAsset.ticker).toBe('ZAMAZON');
            expect(stockAsset.basisCost).toBe(30.4);
            expect(stockAsset.description).toBe('Blamazon.com, Inc.');
        });
        it('should read when updating bond in item #3', () => {
            const newState: FinancialAssetsState = financialAssetsReducer(state, {
                type: 'UPDATE_ASSET',
                payload: {
                    id: 3,
                    issuingAgency: 'The Illuminati',
                    bondSeries: 'ZZ',
                    initialValue: 10.5,
                    targetValue: 30.4,
                    maturityInMonths: 20,
                } as BondAsset,
            });
            console.dir(newState);
            const updatedAsset = newState.assets.find((s) => s.id === 3);
            console.dir(updatedAsset);
            expect(isBondAsset(updatedAsset)).toBeTruthy();
            const bondAsset = updatedAsset as BondAsset;
            expect(bondAsset.issuingAgency).toBe('The Illuminati');
            expect(bondAsset.bondSeries).toBe('ZZ');
            expect(bondAsset.initialValue).toBe(10.5);
            expect(bondAsset.targetValue).toBe(30.4);
        });

        it('should read when updating cash in item #2', () => {
            const newState: FinancialAssetsState = financialAssetsReducer(state, {
                type: 'UPDATE_ASSET',
                payload: {
                    id: 2,
                    accountNumber: '999999',
                    accountType: 'CHECKING',
                    balance: 10.4,
                } as CashAsset,
            });
            const updatedAsset = newState.assets.find((s) => s.id === 2);
            expect(isCashAsset(updatedAsset)).toBeTruthy();
            const cashAsset = updatedAsset as CashAsset;
            expect(cashAsset.balance).toBe(10.4);
            expect(cashAsset.accountType).toBe('CHECKING');
            expect(cashAsset.accountNumber).toBe('999999');
        });
    });
});
