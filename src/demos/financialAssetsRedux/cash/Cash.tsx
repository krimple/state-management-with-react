import { CashAsset } from '../../../types';
import { useState } from 'react';
import Button from '../../../components/Button';
import EditCashForm from './EditCashForm.tsx';


export interface CashProps {
  cash: CashAsset
}

export default function Cash({cash}: CashProps) {
  const [editing, setEditing] = useState(false);

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
          <EditCashForm cash={cash} onClose={() => setEditing(false)} /> }
            <Button
            type="button"
            label={ editing ? 'Close' : 'Edit'}
                        onClick={toggleForm} />
        </>
        )
      }