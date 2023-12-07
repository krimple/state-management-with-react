import { StockAssetType } from '../../../types';
import { useState } from 'react';
import Button from '../../../components/Button.tsx';
import EditStockForm from './EditStockForm.tsx';

export interface StockProps {
  stock: StockAssetType
}
export default function Stock({stock}: StockProps) {


  const [editing, setEditing] = useState(false);

  function toggleForm() {
    setEditing(!editing);
  }


  return (
    <>
     { !editing &&
          <div>Ticker: {stock.ticker} - Basis: {stock.basisCost}, Info {stock.description} </div>
      }
      { editing &&
        <EditStockForm stock={stock} onClose={() => setEditing(false)} /> }
      <Button
        type="button"
        label={ editing ? 'Close' : 'Edit'}
        onClick={toggleForm} />
    </>
  );
}
