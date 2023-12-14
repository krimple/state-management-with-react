import Bond from "./Bond";
import { BondAsset } from "../../../types";
import { useQuery } from "@tanstack/react-query";
import { fetchJsonThrowingErrors } from "../utils/fetch-utils.ts";

export default function BondsView() {
  const {
    data,
    isError,
    error,
    isFetching,
  }: {
    data: BondAsset[] | undefined;
    isError: boolean;
    error: any;
    isFetching: any;
  } = useQuery({
    queryKey: ["bonds"],
    queryFn: () =>
      fetchJsonThrowingErrors<BondAsset[]>("/api/bonds", { method: "GET" }),
  });

  if (isFetching) {
    return <p>Loading...</p>;
  }

  if (isError) {
    return <pre>An error occurred: {error.message}</pre>;
  }

  if (!data) {
    return <p>No data.</p>;
  }

  const bondElements =
    data.map((bondAsset: BondAsset) => (
      <Bond key={bondAsset.id} bond={bondAsset} />
    )) || [];

  return <>{bondElements}</>;
}
