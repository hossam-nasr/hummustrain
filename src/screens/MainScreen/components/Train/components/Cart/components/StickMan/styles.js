import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  justify-content: center;
`;

export const StickManContainer = styled.div`
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
`;

export const StickManBodyImg = styled.img`
  height: ${({ cartSize, theme }) =>
    theme.carts.dimensions[cartSize].height + "px"};
`;

export const StickManHeadImg = styled.img`
  height: ${({ cartSize, theme }) =>
    theme.carts.dimensions[cartSize].height * 0.3 + "px"};
  border-radius: ${({ cartSize, theme }) =>
    (theme.carts.dimensions[cartSize].height * 0.3) / 2 + "px"};
  overflow: hidden;
`;
