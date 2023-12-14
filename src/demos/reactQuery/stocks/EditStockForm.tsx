import { StockAsset } from "../../../types";
import { ChangeEvent, FormEvent, useState } from "react";
import Button from "../../../components/Button.tsx";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { fetchJsonThrowingErrors } from "../utils/fetch-utils.ts";

interface EditStockFormProps {
  stock: StockAsset;
  onClose: () => void;
}

export default function EditStockForm({
  stock: originalStockData,
  onClose,
}: EditStockFormProps) {
  const client = useQueryClient();
  const { mutate, isError, error, isSuccess, isPending } = useMutation({
    mutationFn: (updatedStock: StockAsset) => {
      return fetchJsonThrowingErrors(`/api/stocks/${updatedStock.id}`, {
        method: "PUT",
        body: JSON.stringify(updatedStock),
        headers: { "Content-Type": "application/json" },
      });
    },
    onSuccess: () => {
      return client.invalidateQueries({ queryKey: ["stocks"] });
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

  const [stockState, setFormState] = useState(originalStockData);

  function handleChange(event: ChangeEvent<HTMLInputElement>) {
    setFormState((formState: StockAsset) => {
      return { ...formState, [event.target.name]: event.target.value };
    });
  }

  function handleSubmit(event: FormEvent) {
    event.preventDefault();
    mutate(stockState);
    onClose();
  }

  return (
    <form className="grid-form" onSubmit={handleSubmit}>
      <label htmlFor="ticker">Ticker Symbol</label>
      <input
        type="string"
        name="ticker"
        defaultValue={stockState.ticker}
        onChange={handleChange}
      />
      <label htmlFor="basisCost">Cost Basis</label>
      <input
        type="text"
        name="basisCost"
        defaultValue={stockState.basisCost}
        onChange={handleChange}
      />
      <label htmlFor="currentValue">Current Value</label>
      <input
        type="string"
        name="currentValue"
        defaultValue={stockState.currentValue}
        onChange={handleChange}
      />
      <label htmlFor="description">Description</label>
      <input
        type="string"
        name="description"
        defaultValue={stockState.description}
        onChange={handleChange}
      />
      <Button label="Save" type="submit" />
    </form>
  );
}
