import styled from "styled-components";

import { ReactComponent as CopyIcon } from "../../assets/copyIcon.svg";

export const Row = styled.div`
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

export const DescriptionSection = styled.section``;

export const PromoSection = styled.section``;

export const Button = styled.button`
  border: none;
  background: #0085ff;
  border-radius: 4px;
  color: white;
  padding: 12px 87px;
  width: 300px;
  margin-left: 24px;
  cursor: pointer;

  &:disabled {
    background: lightgray;
    cursor: wait;
  }

  &[data-activated="true"] {
    background: white;
    color: #0085ff;
    border: 1px solid #cfd2d9;
    cursor: not-allowed;
  }
`;

export const Promocode = styled.div`
  position: relative;
  width: 300px;
  padding: 15px 30px 15px 17px;
  border: 1px solid #cfd2d9;
  border-radius: 4px;

  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const FormSection = styled.div`
  display: flex;
  width: 100%;
`;

export const Label = styled.div`
  font-size: 11px;
  color: #7d7d7d;
`;

export const ServiceName = styled.div`
  font-size: 29px;
  width: 380px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const Description = styled.div`
  font-size: 15px;
  color: #7d7d7d;
  width: 380px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const CopyIconStyled = styled(CopyIcon)`
  width: 14px;
  color: #0085ff;
  position: absolute;
  right: 17px;
  top: 17px;
  cursor: pointer;
`;
