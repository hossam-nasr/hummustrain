import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-flow: row nowrap;
  align-self: flex-end;
  margin-right: 50px;
  justify-content: center;
  align-items: flex-end;
`;

export const Label = styled.div`
  color: black;
  font-family: sans-serif;
  font-size: 22px;
  margin-right: 10px;
`;

export const SizeButton = styled.div`
  cursor: pointer;
  user-select: none;
  background-color: ${({ selected }) => (selected ? "dodgerBlue" : "gray")};
  color: black;
  height: 35px;
  width: 35px;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
`;

export const SizeButtonGroup = styled.div`
  display: flex;
  flex-flow: row nowrap;
`;
