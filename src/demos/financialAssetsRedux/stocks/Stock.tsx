import { StockAsset } from "../../../types";
import { useState } from "react";
import Button from "../../../components/Button";
import EditStockForm from "./EditStockForm";

export interface StockProps {
  stock: StockAsset;
}

export default function Stock({ stock }: StockProps) {
  const [editing, setEditing] = useState(false);

  function toggleForm() {
    setEditing(!editing);
  }

  // TODO format better
  return (
    <>
      {!editing && (
        <section>
          Ticker: {stock.ticker} - Basis: {stock.basisCost} - Current:{" "}
          {stock.currentValue} - Info: {stock.description}
        </section>
      )}
      {editing && (
        <EditStockForm stock={stock} onClose={() => setEditing(false)} />
      )}
      <Button
        type="button"
        label={editing ? "Close" : "Edit"}
        onClick={toggleForm}
      />
    </>
  );
}
