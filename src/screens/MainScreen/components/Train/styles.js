import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-flow: row wrap;
`;

export const HeadImg = styled.img`
  user-select: none;
  max-height: ${({ cartSize, theme }) =>
    `${theme.carts.dimensions[cartSize].height +
      0.8 * theme.carts.dimensions[cartSize].height}px`};
`;
