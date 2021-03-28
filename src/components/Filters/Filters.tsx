import { ChangeEvent, useState } from "react";
import styled from "styled-components";

const FilterInput = styled.input`
  font-size: 15px;
  color: #262626;
  padding: 17px 22px;
  border: 1px solid #cfd2d9;
  border-radius: 4px;
  width: 300px;
  position: relative;

  &:focus {
    border: 1px solid #2f80ed;
    outline: none;
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

const FiltersHeader = styled.div`
  font-size: 39px;
  font-weight: 300;
  margin-bottom: 16px;
`;

interface Arguments {
  onEnter: (search: string) => void;
}

export const Filters: React.FC<Arguments> = ({ onEnter }) => {
  const [value, setValue] = useState("");

  const onChange = (evt: ChangeEvent<HTMLInputElement>) => {
    const enteredValue = evt.target.value;
    onEnter(enteredValue);
    setValue(enteredValue);
  };

  const onReset = () => {
    onEnter("");
    setValue("");
  };

  return (
    <>
      <FiltersHeader>Services</FiltersHeader>
      <FilterWrapper>
        <FilterInput {...{ value, onChange }} />
        <ResetButton onClick={onReset} children="Reset" />
      </FilterWrapper>
    </>
  );
};
