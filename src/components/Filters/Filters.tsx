import styled from "styled-components";

const FilterInput = styled.input`
  font-size: 11px;
  color: #262626;
  padding: 17px 22px;
  border: 1px solid #cfd2d9;
  border-radius: 4px;
  width: 300px;
  position: relative;

  &:focus {
    border: 1px solid #2f80ed;
    outline: 3px solid red;
  }
`;

const ResetButton = styled.button`
  font-size: 19px;
  border: 1px solid #cfd2d9;
  background: none;
  box-sizing: border-box;
  border: 1px solid #cfd2d9;
  border-radius: 4px;
  padding: 10px 50px;
  margin-left: 8px;
`;

const FilterWrapper = styled.div`
  display: flex;
  flex-direction: row;
  margin-bottom: 24px;
`;

export const Filters: React.FC = () => {
  return (
    <FilterWrapper>
      <FilterInput />
      <ResetButton children="Reset" />
    </FilterWrapper>
  );
};
