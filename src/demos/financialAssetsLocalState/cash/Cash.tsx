import { CashAsset } from '../../../types';
import { useState } from 'react';
import Button from '../../../components/Button';
import EditCashForm from './EditCashForm.tsx';


export interface CashProps {
  cash: CashAsset,
  onUpdated: () => void
}

export default function Cash({cash, onUpdated}: CashProps) {
  const [editing, setEditing] = useState(false);

  function handleSaveCompleted() {
    setEditing(false);
    onUpdated();
  }

  // TODO - turn form toggle into hook?
  function toggleForm() {
    setEditing(!editing);
  }

  if (!cash) {
    return <p>Loading...</p>
  }
  return (
    <>
      {!editing &&
          <section>
              Cash in {cash.accountNumber && ''.concat('XXXXXX', cash.accountNumber.substring(-1, 5))} -
              Value: {cash.balance} -
              Type: {cash.accountType}
          </section>
      }
      { editing &&
          <EditCashForm cash={cash} onClose={handleSaveCompleted} /> }
      <Button
        type="button"
        label={ editing ? 'Close' : 'Edit'}
        onClick={toggleForm} />
    </>
  )
}
