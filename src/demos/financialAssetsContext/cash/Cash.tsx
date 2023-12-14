import { CashAsset } from "../../../types";

type CashProps = {
  cash: CashAsset;
};

export default function Cash({ cash }: CashProps) {
  return (
    <p>
      Cash in {"".concat("XXXXXX", cash.accountNumber.substring(-1, 5))} :{" "}
      {cash.balance} - Type : {cash.accountType}
    </p>
  );
}
