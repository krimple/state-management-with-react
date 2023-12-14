import { CashAsset } from "../../../types";
import { useState } from "react";
import EditCashForm from "./EditCashForm.tsx";
import Button from "../../../components/Button.tsx";

type CashProps = {
  cash: CashAsset;
};
export default function Cash({ cash }: CashProps) {
  const [editing, setEditing] = useState(false);

  function toggleForm() {
    setEditing(!editing);
  }

  return (
    <div>
      {!editing && (
        <section>
          Account Number: {cash.accountNumber} - Account Type:{" "}
          {cash.accountType} - Balance {cash.balance}
        </section>
      )}

      {editing && (
        <section>
          <EditCashForm cash={cash} onClose={() => setEditing(false)} />
        </section>
      )}

      <Button
        type="button"
        label={editing ? "Close" : "Edit "}
        onClick={toggleForm}
      />
    </div>
  );
}
