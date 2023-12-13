import Bond from './Bond';
import { BondAsset } from '../../../types';
import { useEffect, useState } from 'react';
import { getBonds } from '../../../apis/get-assets.ts';

export default function BondsView() {
  const [bonds, setBonds] = useState<BondAsset[]>([]);

  useEffect(() => {
    (async() => {
      setBonds(await getBonds());
    })();
  }, []);
  const bondElements = bonds.map((bond) => (<Bond key={bond.id} bond={bond}/>));
  return (
    <>
      { bondElements }
    </>
  )
}
