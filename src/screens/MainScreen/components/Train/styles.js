import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: flex-start;
  align-items: flex-end;
`;

export const HeadImg = styled.img`
  user-select: none;
  max-height: ${({ cartSize, theme }) =>
    `${2.3 * theme.carts.dimensions[cartSize].height}px`};
  margin-left: ${({ cartSize, theme }) => theme.carts.margins[cartSize] + "px"};
`;
