import { useEffect } from "react";
import { useFetching } from "../../hooks/useFetching";
import { getPromocodes } from "../../server/fetchData";

export default function useGetServices(search?: string) {
  const { data: services, start } = useFetching({
    request: getPromocodes,
  });

  useEffect(() => {
    start(search);
  }, [start, search]);

  return { services };
}
