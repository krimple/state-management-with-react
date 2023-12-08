import { BondAsset } from '../../../types';
import { useState } from 'react';
import EditBondForm from './EditBondForm.tsx';
import Button from '../../../components/Button.tsx';

type BondProps = {
  bond: BondAsset
}
export default function Bond({bond}: BondProps) {

  const [editing, setEditing] = useState(false);

  function toggleForm() {
    setEditing(!editing);
  }

  return (
    <>
      { !editing &&
        <div>
            Bond: {bond.issuingAgency} -
            Series {bond.bondSeries} -
            Initial Value {bond.initialValue} -
            Term {bond.maturityInMonths} months -
            Target value {bond.targetValue}
        </div>
      }

      { editing &&
        <EditBondForm bond={bond} onClose={() => setEditing(false) } />
      }
      <Button
        type="button"
        label={ editing ? 'Close' : 'Edit '}
        onClick={toggleForm} />

    </>
  )

}
