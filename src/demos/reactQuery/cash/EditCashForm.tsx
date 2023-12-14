import { CashAsset } from "../../../types";
import { ChangeEvent, FormEvent, useState } from "react";
import Button from "../../../components/Button";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { fetchJsonThrowingErrors } from "../utils/fetch-utils";

interface EditCashFormProps {
  cash: CashAsset;
  onClose: () => void;
}

export default function EditCashForm({
  cash: originalCashData,
  onClose,
}: EditCashFormProps) {
  const [cashState, setFormState] = useState(originalCashData);
  const client = useQueryClient();
  const { mutate, isError, error, isSuccess, isPending } = useMutation({
    mutationFn: (updatedCash: CashAsset) => {
      return fetchJsonThrowingErrors(`/api/cash/${updatedCash.id}`, {
        method: "PUT",
        body: JSON.stringify(updatedCash),
        headers: { "Content-Type": "application/json" },
      });
    },
    onSuccess: () => {
      return client.invalidateQueries({ queryKey: ["cash"] });
    },
  });

  if (isError) {
    return <pre>An error occurred during update: ${error.message}</pre>;
  }

  if (isPending) {
    return <p>Updating...</p>;
  }

  if (isSuccess) {
    return <p>Update successful.</p>;
  }

  function handleChange(event: ChangeEvent<HTMLInputElement>) {
    setFormState((formState: CashAsset) => {
      return { ...formState, [event.target.name]: event.target.value };
    });
  }

  function handleSubmit(event: FormEvent) {
    event.preventDefault();
    mutate(cashState);
    onClose();
  }

  return (
    <form className="grid-form" onSubmit={handleSubmit}>
      <label htmlFor="balance">Balance</label>
      <input
        type="number"
        name="balance"
        min={0}
        defaultValue={cashState.balance}
        onChange={handleChange}
      />
      <label htmlFor="accountNumber">Account Number</label>
      <input
        type="text"
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
      <Button label="Save" type="submit" />
    </form>
  );
}
