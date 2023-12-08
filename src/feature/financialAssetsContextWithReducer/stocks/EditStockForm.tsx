import { ChangeEvent, FormEvent, useState } from 'react';
import { useFinancialAssetsContext } from '../useFinancialAssetsContextWithReducer.ts';
import { StockAsset } from '../../../types';
import Button from '../../../components/Button.tsx';

interface EditStockFormProps {
  stock: StockAsset,
  onClose: () => void
}
export default function EditStockForm({stock, onClose}: EditStockFormProps) {

  const [stockData, setStockData] = useState<StockAsset>(stock);
  const {dispatch} = useFinancialAssetsContext();

  function handleChange(event: ChangeEvent<HTMLInputElement>) {
    switch (event.target.name) {
      case 'ticker':
        setStockData((state: StockAsset) => {
          return {...state, ticker: event.target.value};
        });
        break;
      case 'basisCost':
        setStockData((state: StockAsset) => {
          return {...state, basisCost: Number.parseFloat(event.target.value)};
        });
        break;
      case 'description':
        setStockData((state: StockAsset) => {
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
      className="grid-form"
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
