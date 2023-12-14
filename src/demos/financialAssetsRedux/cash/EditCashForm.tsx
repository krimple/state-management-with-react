import { CashAsset } from "../../../types";
import { ChangeEvent, FormEvent, useState } from "react";
import Button from "../../../components/Button";
import { updateCash } from "./cash-slice";
import { useAppDispatch } from "../store/hooks";

interface EditCashFormProps {
  cash: CashAsset;
  onClose: () => void;
}

export default function EditCashForm({
  cash: originalCashData,
  onClose,
}: EditCashFormProps) {
  const dispatch = useAppDispatch();
  const [cashState, setFormState] = useState(originalCashData);

  function handleChange(event: ChangeEvent<HTMLInputElement>) {
    setFormState((formState: CashAsset) => {
      return { ...formState, [event.target.name]: event.target.value };
    });
  }

  async function handleSubmit(event: FormEvent) {
    event.preventDefault();
    dispatch(updateCash(cashState));
    onClose();
  }

  return (
    <form className="grid-form" onSubmit={handleSubmit}>
      <label htmlFor="accountNumber">Account Number</label>
      <input
        type="string"
        name="accountNumber"
        defaultValue={cashState.accountNumber}
        onChange={handleChange}
      />
      <label htmlFor="accountType">Account Type</label>
      <input
        type="string"
        name="accountType"
        defaultValue={cashState.accountType}
        onChange={handleChange}
      />
      <label htmlFor="balance">Balance</label>
      <input
        type="number"
        name="balance"
        defaultValue={cashState.balance}
        onChange={handleChange}
      />
      <Button label="Save" type="submit" />
    </form>
  );
}
