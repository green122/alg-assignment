import { ServicesList } from "../ServicesList/ServicesList";
import useGetServices from "./useGetServices";

export const Services: React.FC = () => {
  const { services, loading } = useGetServices();
  return (
    <div>
      <ServicesList {...{ services }} />
    </div>
  );
};
