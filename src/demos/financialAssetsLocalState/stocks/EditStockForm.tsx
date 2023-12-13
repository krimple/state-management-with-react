import { ChangeEvent, FormEvent, useState } from 'react';
import { StockAsset } from '../../../types';
import Button from '../../../components/Button.tsx';
import { saveAsset } from '../../../apis/save-asset.ts';

interface EditStockFormProps {
  stock: StockAsset,
  onClose: () => void
}

export default function EditStockForm({stock: originalStockData, onClose}: EditStockFormProps) {

  const [stockState, setFormState] = useState<StockAsset>(originalStockData);

  function handleChange(event: ChangeEvent<HTMLInputElement>) {
    setFormState((formState: StockAsset) => {
      return {...formState, [event.target.name]: event.target.value};
    });
  }

  async function handleSubmit(event: FormEvent) {
    event.preventDefault();
    await saveAsset(stockState);
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
        defaultValue={stockState.ticker}
        onChange={handleChange}
      />
      <label htmlFor="basisCost">
        Basis
      </label>
      <input
        type="number"
        min={0}
        name="basisCost"
        defaultValue={stockState.basisCost}
        onChange={handleChange}
      />
      <label htmlFor="currentValue">
        Current Value
      </label>
      <input
        type="number"
        min={0}
        name="currentValue"
        defaultValue={stockState.currentValue}
        onChange={handleChange}
      />
      <label htmlFor="description">
        Info
      </label>
      <input
        type="text"
        name="description"
        defaultValue={stockState.description}
        onChange={handleChange}
      />
      { /* Two-column grid, skip a column before button */}
      <div>&nbsp;</div>
      <Button label="Save" type="submit"/>
    </form>
  )
}
