import styled from "styled-components";
import { Service } from "../../types/api";

interface TProps {
  service: Service;
  onActivate: (id: number) => void;
}

const Row = styled.div`
  display: flex;
  padding: 24px 32px;
  border: 1px solid #e2e5ec;
  box-sizing: border-box;
  border-radius: 6px;
  justify-content: space-between;
  background: white;
  &:not(:last-child) {
    margin-bottom: 24px;
  }
`;

const DescriptionSection = styled.section``;

const PromoSection = styled.section``;

const Button = styled.button`
  border: none;
  background: #0085ff;
  border-radius: 4px;
  color: white;
  padding: 12px 87px;
  width: 300px;
  margin-left: 24px;
`;

const Promocode = styled.div`
  width: 300px;
  padding: 15px 30px 15px;
  border: 1px solid #cfd2d9;
  border-radius: 4px;
`;

const FormSection = styled.div`
  display: flex;
  width: 100%;
`;

const Label = styled.div`
  font-size: 11px;
  color: #7d7d7d;
`;

const ServiceName = styled.div`
  font-size: 29px;
`;

const Description = styled.div`
  font-size: 15px;
  color: #7d7d7d;
  width: 300px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const ServiceRow: React.FC<TProps> = ({ service, onActivate }) => (
  <Row>
    <DescriptionSection>
      <ServiceName>{service.name}</ServiceName>
      <Description>{service.description}</Description>
    </DescriptionSection>
    <PromoSection>
      <Label>PROMOCODE</Label>
      <FormSection>
        <Promocode children={service.promocode} />
        <Button onClick={() => onActivate(service.id)}>Activate bonus</Button>
      </FormSection>
    </PromoSection>
  </Row>
);
