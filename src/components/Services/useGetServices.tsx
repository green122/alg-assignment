import { useEffect, useState } from "react";
import { getPromocodes } from "../../server/fetchData";
import { Service } from "../../types/api";

export default function useGetServices() {
  const [loading, setLoading] = useState(false);
  const [services, setServices] = useState<Service[]>([]);

  useEffect(() => {
    setLoading(true);

    getPromocodes().then((servicesList) => {
      setLoading(false);
      setServices(servicesList);
    });

    // cause it's a fake request we don't need to put this dependency in a array
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // TODO: errors
  return {
    loading,
    services,
  };
}
