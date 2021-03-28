import styled from "styled-components";

const HeaderStyled = styled.header`
  width: 100%;
  background: white;
  height: 80px;
  display: flex;
  flex-direction: row;
  padding: 0 32px;
  align-items: center;
`;

const BlockInfo = styled.div`
  &:not(:last-child) {
    margin-right: 24px;
  }
`;

const BlockHeader = styled.div`
  font-size: 13px;
  color: #7d7d7d;
`;

const BlockContent = styled.div`
  font-size: 19px;
  color: #262626;
`;

export const Header = () => (
  <HeaderStyled>
    <BlockInfo>
      <BlockHeader>Balance</BlockHeader>
      <BlockContent>213 920$</BlockContent>
    </BlockInfo>
    <BlockInfo>
      <BlockHeader>Payout</BlockHeader>
      <BlockContent>159 465$</BlockContent>
    </BlockInfo>
  </HeaderStyled>
);
