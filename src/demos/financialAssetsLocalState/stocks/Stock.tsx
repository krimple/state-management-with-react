import { StockAsset } from "../../../types";
import { useState } from "react";
import Button from "../../../components/Button";
import EditStockForm from "./EditStockForm.tsx";

export interface StockProps {
  stock: StockAsset;
  onUpdated: () => void;
}

export default function Stock({ stock, onUpdated }: StockProps) {
  const [editing, setEditing] = useState(false);

  function handleSaveCompleted() {
    setEditing(false);
    onUpdated();
  }

  // TODO - turn form toggle into hook?
  function toggleForm() {
    setEditing(!editing);
  }

  if (!stock) {
    return <p>Loading...</p>;
  }
  return (
    <>
      {!editing && (
        <section>
          Ticker: {stock.ticker} - Basis: {stock.basisCost} - Current Value:{" "}
          {stock.currentValue} - Info {stock.description}
        </section>
      )}
      {editing && <EditStockForm stock={stock} onClose={handleSaveCompleted} />}
      <Button
        type="button"
        label={editing ? "Close" : "Edit"}
        onClick={toggleForm}
      />
    </>
  );
}
