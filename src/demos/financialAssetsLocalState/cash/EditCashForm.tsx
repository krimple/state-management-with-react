import { CashAsset } from "../../../types";
import { ChangeEvent, FormEvent, useState } from "react";
import Button from "../../../components/Button.tsx";
import { saveAsset } from "../../../apis/save-asset.ts";

interface EditCashFormProps {
  cash: CashAsset;
  onClose: () => void;
}

export default function EditCashForm({
  cash: originalCashData,
  onClose,
}: EditCashFormProps) {
  const [cashState, setFormState] = useState<CashAsset>(originalCashData);

  function handleChange(event: ChangeEvent<HTMLInputElement>) {
    setFormState((formState: CashAsset) => {
      return { ...formState, [event.target.name]: event.target.value };
    });
  }

  async function handleSubmit(event: FormEvent) {
    event.preventDefault();
    try {
      await saveAsset(cashState);
    } catch (e) {
      alert("Save failed. Check log.");
      console.error(e);
    }
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
