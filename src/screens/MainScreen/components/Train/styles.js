import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: flex-start;
  align-items: flex-end;
`;

export const TrainImg = styled.img`
  user-select: none;
  margin-left: ${({ cartSize, theme }) => theme.carts.margins[cartSize] + "px"};
  max-height: ${({ cartSize, theme }) =>
    `${2.3 * theme.carts.dimensions[cartSize].height}px`};
  margin-left: ${({ cartSize, theme }) => theme.carts.margins[cartSize] + "px"};
`;
