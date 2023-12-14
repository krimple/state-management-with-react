import Cash from "./Cash";
import { CashAsset } from "../../../types";
import { useEffect, useState } from "react";
import { getCash } from "../../../apis/get-assets";

export default function CashView() {
  const [cash, setCash] = useState<CashAsset[]>([]);
  useEffect(() => {
    (async () => {
      await loadData();
    })();
  }, []);

  async function loadData() {
    setCash(await getCash());
  }

  const cashElements = cash.map((cashEntry) => (
    <Cash key={cashEntry.id} cash={cashEntry} onUpdated={loadData} />
  ));

  return <>{cashElements}</>;
}
