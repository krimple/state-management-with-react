import {beforeEach, describe, expect, it} from 'vitest';
import financialAssetsReducer, { FinancialAssetsState } from '../financial-assets-reducer';

describe('Financial Assets Context Reducer', () => {

  describe('should properly update the right item', () => {
    let state: FinancialAssetsState = {
      stocks: [],
      bonds: [],
      cash: []
    };

    beforeEach(() => {
      state.stocks = [
        {
          id: 1,
          ticker: 'AAPL',
          basisCost: 150.1,
          description: 'Apple Inc.',
        },
        {
          id: 2,
          ticker: 'MSFT',
          basisCost: 200.2,
          description: 'Microsoft Corporation',
        },
        {
          id: 3,
          ticker: 'GOOG',
          basisCost: 2500.3,
          description: 'Alphabet Inc.',
        },
        {
          id: 4,
          ticker: 'AMZN',
          basisCost: 3300.4,
          description: 'Amazon.com, Inc.',
        },
        {
          id: 5,
          ticker: 'TSLA',
          basisCost: 750.5,
          description: 'Tesla, Inc.',
        },
      ];
    });
    it('should read when updating stock #4', () => {
      const newState = financialAssetsReducer(state, {
        type: 'UPDATE_STOCK',
        payload: {
          id: 4,
          ticker: 'ZAMAZON',
          basisCost: 30.4,
          description: 'Blamazon.com, Inc.',
        },
      });
      const updatedState = newState.stocks.find(s => s.id === 4);
      expect(updatedState).toBeDefined();
      expect(updatedState?.ticker).toBe('ZAMAZON');
      expect(updatedState?.basisCost).toBe(30.4);
      expect(updatedState?.description).toBe('Blamazon.com, Inc.');
    });

  });
});


