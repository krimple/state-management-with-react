import { CashAsset } from "../../../types";
import { ChangeEvent, FormEvent, useState } from "react";
import { useFinancialAssetsContext } from "../useFinancialAssetsContextWithReducer";
import Button from "../../../components/Button";
import { doSaveAsset } from "../financial-assets-reducer";

interface EditCashFormProps {
  cash: CashAsset;
  onClose: () => void;
}

export default function EditCashForm({
  cash: originalCashData,
  onClose,
}: EditCashFormProps) {
  const [cashData, setCashData] = useState<CashAsset>(originalCashData);
  const { dispatch } = useFinancialAssetsContext();

  function handleChange(event: ChangeEvent<HTMLInputElement>) {
    switch (event.target.name) {
      case "accountNumber":
        setCashData((state: CashAsset) => {
          return { ...state, accountNumber: event.target.value };
        });
        break;
      case "accountType":
        setCashData((state: CashAsset) => {
          return { ...state, accountType: event.target.value };
        });
        break;
      case "balance":
        setCashData((state: CashAsset) => {
          return {
            ...state,
            balance: Number.parseFloat(event.target.value || "0"),
          };
        });
        break;
      default:
        return;
    }
  }

  async function handleSubmit(event: FormEvent) {
    event.preventDefault();
    try {
      await doSaveAsset(cashData, dispatch);
      onClose();
    } catch (e) {
      alert(
        "Update failed. If I were a toast system you would like me. Check the logs in your browser and json-server",
      );
    }
  }

  return (
    <form className="grid-form" onSubmit={handleSubmit}>
      <label htmlFor="accountNumber">Account Number</label>
      <input
        type="string"
        name="accountNumber"
        defaultValue={cashData.accountNumber}
        onChange={handleChange}
      />
      <label htmlFor="accountType">Account Type</label>
      <input
        type="string"
        name="accountType"
        defaultValue={cashData.accountType}
        onChange={handleChange}
      />
      <label htmlFor="balance">Balance</label>
      <input
        type="number"
        name="balance"
        defaultValue={cashData.balance}
        onChange={handleChange}
      />
      <Button label="Save" type="submit" />
    </form>
  );
}
