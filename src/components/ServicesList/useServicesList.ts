import { useEffect, useState } from "react";
import { useFetching } from "../../hooks/useFetching";
import { Service } from "../../types/api";

const activateById = (services: Service[], id: number) =>
  services.map((service) =>
    service.id === id ? { ...service, activated: true } : service
  );

const activationRequest = (id: number) =>
  new Promise((res) => setTimeout(() => res(id), 700));

export const useServicesList = (rawServises: Service[]) => {
  const [services, setServices] = useState(rawServises);

  const { start, loading: isActivating } = useFetching({
    request: activationRequest,
  });

  const activateServicePromocode = async (id: number) => {
    await start(id);
    setServices((prev) => activateById(prev, id));
  };

  useEffect(() => {
    setServices(rawServises);
  }, [rawServises]);

  return { services, activateServicePromocode, isActivating };
};
