import { ServicesList } from "../ServicesList/ServicesList";
import useGetServices from "./useGetServices";

export const Services: React.FC<{ search?: string }> = ({ search = "" }) => {
  const { services } = useGetServices(search);
  return <>{services && <ServicesList {...{ services }} />}</>;
};
