import { useCallback, useEffect, useState } from "react";

interface Arguments<RequestArg, Result> {
  request: (arg: RequestArg) => Promise<Result>;
  onMount?: boolean;
}
export const useFetching = <RequestArg, Result>({
  request,
  onMount,
}: Arguments<RequestArg, Result>) => {
  const [data, setData] = useState<Result | null>(null);
  const [loading, setLoading] = useState(false);

  const start = useCallback(
    async (arg?: RequestArg) => {
      setLoading(true);
      const data = await request(arg as RequestArg);
      setData(data);
      setLoading(false);
    },
    [request]
  );

  useEffect(() => {
    if (!onMount) return;
    start();
  }, [start, onMount]);

  return {
    loading,
    data,
    start,
  };
};
