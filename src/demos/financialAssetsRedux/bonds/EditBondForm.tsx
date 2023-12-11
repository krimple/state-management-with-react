import { BondAsset } from '../../../types';
import { ChangeEvent, FormEvent, useState } from 'react';
import Button from '../../../components/Button.tsx';
import { updateBond } from './bonds-slice.ts';
import { useAppDispatch } from '../store/hooks.ts';

interface EditBondFormProps {
  bond: BondAsset,
  onClose: () => void
}


export default function EditBondForm({bond: originalBondData, onClose}: EditBondFormProps) {

  const dispatch = useAppDispatch();

  const [bondState, setFormState] = useState(originalBondData);

  function handleChange(event: ChangeEvent<HTMLInputElement>) {
    setFormState((formState: BondAsset) => {
      return {...formState, [event.target.name]: event.target.value};
    });
  }

  function handleSubmit(event: FormEvent) {
      event.preventDefault();
      dispatch(updateBond(bondState));
      onClose();
  }

  return (
    <form
      className="grid-form"
      onSubmit={handleSubmit}>
      <label htmlFor="issuingAgency">Issuing Agency</label>
      <input
        type="text"
        name="issuingAgency"
        defaultValue={bondState.issuingAgency}
        onChange={handleChange}
      />
      <label htmlFor="bondSeries">Bond Series</label>
      <input
        type="text"
        name="bondSeries"
        defaultValue={bondState.bondSeries}
        onChange={handleChange}
      />
      <label htmlFor="initialValue">Initial Value</label>
      <input
        type="number"
        min={1}
        name="initialValue"
        defaultValue={bondState.initialValue}
        onChange={handleChange}
      />
      <label htmlFor="targetValue">Target Value</label>
      <input
        type="number"
        name="targetValue"
        defaultValue={bondState.targetValue}
        onChange={handleChange}
      />
      <label htmlFor="maturityInMonths">Maturity (Months)</label>
      <input
        type="number"
        name="maturityInMonths"
        min={1}
        step={1}
        max={360}
        defaultValue={bondState.maturityInMonths}
        onChange={handleChange}
      />
      <Button label="Save" type="submit" />
    </form>
  )
}
