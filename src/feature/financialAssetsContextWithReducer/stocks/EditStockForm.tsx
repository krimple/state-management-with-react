import { ChangeEvent, FormEvent, useState } from 'react';
import { useFinancialAssetsContext } from '../useFinancialAssetsContextWithReducer.ts';
import { StockAssetType } from '../../../types';
import Button from '../../../components/Button.tsx';

interface EditStockFormProps {
  stock: StockAssetType,
  onClose: () => void
}
export default function EditStockForm({stock, onClose}: EditStockFormProps) {

  const [stockData, setStockData] = useState<StockAssetType>(stock);
  const {dispatch} = useFinancialAssetsContext();

  function handleChange(event: ChangeEvent<HTMLInputElement>) {
    switch (event.target.name) {
      case 'ticker':
        setStockData((state: StockAssetType) => {
          return {...state, ticker: event.target.value};
        });
        break;
      case 'basisCost':
        setStockData((state: StockAssetType) => {
          return {...state, basisCost: Number.parseFloat(event.target.value)};
        });
        break;
      case 'description':
        setStockData((state: StockAssetType) => {
          return {...state, description: event.target.value};
        });
        break;
      default:
        return;
    }
  }
  function handleSubmit(event: FormEvent) {
    event.preventDefault();
    dispatch({type: 'UPDATE_ASSET', payload: stockData});
    onClose();
  }

  return (
    <form
      className="bg-white p-4
                 border border-gray-200 rounded-3xl
                 grid grid-cols-2"
      onSubmit={handleSubmit}>
      <label htmlFor="ticker">Ticker</label>
        <input
          type="text"
          name="ticker"
          defaultValue={stockData.ticker}
          onChange={handleChange}
        />
        <label htmlFor="basisCost">
          Basis
        </label>
        <input
          type="number"
          min={0}
          name="basisCost"
          defaultValue={stockData.basisCost}
          onChange={handleChange}
        />
        <label htmlFor="description">
          Info
        </label>
        <input
          type="text"
          name="description"
          defaultValue={stockData.description}
          onChange={handleChange}
        />
      <Button label="Save" type="submit" />
    </form>
  )
}
