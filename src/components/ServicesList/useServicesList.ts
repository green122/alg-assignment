import { useEffect, useState } from "react";
import { Service } from "../../types/api";

const activateById = (services: Service[], id: number) =>
  services.map((service) =>
    service.id === id ? { ...service, activated: true } : service
  );

export const useServicesList = (rawServises: Service[]) => {
  const [services, setServices] = useState(rawServises);

  const activateServicePromocode = (id: number) => {
    setServices((prev) => activateById(prev, id));
  };

  useEffect(() => {
    setServices(rawServises);
  }, [rawServises]);

  return { services, activateServicePromocode };
};
