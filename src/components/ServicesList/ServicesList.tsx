import styled from "styled-components";
import { Service } from "../../types/api";
import { ServiceRow } from "../ServiceRow/ServiceRow";
import { useServicesList } from "./useServicesList";

const ListWrapper = styled.div`
  height: 600px;
  overflow-y: scroll;
`;

export const ServicesList: React.FC<{ services: Service[] }> = ({
  services: rawServices,
}) => {
  const { services, activateServicePromocode } = useServicesList(rawServices);

  return (
    <ListWrapper>
      {services.map((service) => (
        <ServiceRow {...{ service }} onActivate={activateServicePromocode} />
      ))}
    </ListWrapper>
  );
};
