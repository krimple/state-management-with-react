import { CashAsset } from '../../../types';
import { ChangeEvent, FormEvent, useState } from 'react';
import { useFinancialAssetsContext } from '../useFinancialAssetsContextWithReducer.ts';
import Button from '../../../components/Button.tsx';

interface EditCashFormProps {
  cash: CashAsset,
  onClose: () => void
}

export default function EditCashForm({cash, onClose}: EditCashFormProps) {
  const [cashData, setCashData] = useState<CashAsset>(cash);
  const {dispatch} = useFinancialAssetsContext();

  function handleChange(event: ChangeEvent<HTMLInputElement>) {
    switch(event.target.name) {
      case 'accountNumber':
        setCashData((state: CashAsset) => {
          return { ...state, accountNumber: event.target.value };
        });
        break;
      case 'accountType':
        setCashData((state: CashAsset) => {
          return { ...state, accountType: event.target.value };
        });
        break;
      case 'balance':
        setCashData((state: CashAsset) => {
          return { ...state, balance: Number.parseFloat(event.target.value || '0') };
        });
        break;
      default:
        return;
    }
  }

  function handleSubmit(event: FormEvent) {
    event.preventDefault();
    dispatch({type: 'UPDATE_ASSET', payload: cashData});
    onClose();
  }

  return (
    <form
      className="grid-form"
      onSubmit={handleSubmit}>
      <label htmlFor="accountNumber">Account Number</label>
      <input
        type="string"
        name="accountNumber"
        defaultValue={cash.accountNumber}
        onChange={handleChange}
      />
      <label htmlFor="accountType">
        Basis
      </label>
      <input
        type="string"
        name="accountType"
        defaultValue={cashData.accountType}
        onChange={handleChange}
      />
      <label htmlFor="balance">
        Balance
      </label>
      <input
        type="number"
        name="balance"
        defaultValue={cashData.balance}
        onChange={handleChange}
      />
      <Button label="Save" type="submit"/>
    </form>
  )

}
