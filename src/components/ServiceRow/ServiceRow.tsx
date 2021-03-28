import { Service } from "../../types/api";
import { copyToClipboard } from "../../utils/copy";
import {
  Button,
  CopyIconStyled,
  Description,
  DescriptionSection,
  FormSection,
  Label,
  Promocode,
  PromoSection,
  Row,
  ServiceName,
} from "./ServiceRow.styled";

interface TProps {
  service: Service;
  isActivating?: boolean;
  onActivate: (id: number) => void;
}

export const ServiceRow: React.FC<TProps> = ({
  service,
  onActivate,
  isActivating,
}) => (
  <Row>
    <DescriptionSection>
      <ServiceName>{service.name}</ServiceName>
      <Description>{service.description}</Description>
    </DescriptionSection>
    <PromoSection>
      <Label>PROMOCODE</Label>
      <FormSection>
        <Promocode>
          {service.promocode}
          <CopyIconStyled onClick={() => copyToClipboard(service.promocode)} />
        </Promocode>
        <Button
          disabled={isActivating}
          data-activated={service.activated}
          onClick={service.activated ? undefined : () => onActivate(service.id)}
        >
          {service.activated ? "Activated" : "Activate bonus"}
        </Button>
      </FormSection>
    </PromoSection>
  </Row>
);
