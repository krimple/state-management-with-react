import { BondAsset } from "../../../types";
import { useState } from "react";
import Button from "../../../components/Button";
import EditBondForm from "./EditBondForm.tsx";

export interface BondProps {
  bond: BondAsset;
  onUpdated: () => void;
}

export default function Bond({ bond, onUpdated }: BondProps) {
  const [editing, setEditing] = useState(false);

  function handleSaveCompleted() {
    setEditing(false);
    onUpdated();
  }

  // TODO - turn form toggle into hook?
  function toggleForm() {
    setEditing(!editing);
  }

  if (!bond) {
    return <p>Loading...</p>;
  }
  return (
    <>
      {!editing && (
        <section>
          Bond: {bond.issuingAgency} - Series {bond.bondSeries} -
          {bond.initialValue}
          for {bond.maturityInMonths} months = {bond.targetValue}
        </section>
      )}
      {editing && <EditBondForm bond={bond} onClose={handleSaveCompleted} />}
      <Button
        type="button"
        label={editing ? "Close" : "Edit"}
        onClick={toggleForm}
      />
    </>
  );
}
