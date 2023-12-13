import { StockAsset } from '../../../types';
import { useState } from 'react';
import EditStockForm from './EditStockForm.tsx';
import Button from '../../../components/Button.tsx';

type StockProps = {
  stock: StockAsset
}
export default function Stock({stock}: StockProps) {

  const [editing, setEditing] = useState(false);

  function toggleForm() {
    setEditing(!editing);
  }

  return (
    <div>
      { !editing &&
          <section>
              Ticker Symbol: {stock.ticker} -
              Basis: {stock.basisCost} -
              Current value: {stock.currentValue} -
              Info:  {stock.description}
          </section>
      }

      { editing &&
          <section>
              <EditStockForm stock={stock} onClose={() => setEditing(false) } />
          </section>
      }

      <Button
        type="button"
        label={ editing ? 'Close' : 'Edit '}
        onClick={toggleForm} />

    </div>
  )

}
