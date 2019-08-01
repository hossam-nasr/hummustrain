import styled from "styled-components";
import Background from "../../assets/img/hummustrain.jpg";

export const Container = styled.div`
  display: flex;
  flex: 1;
  background-image: url(${Background});
  background-size: cover;
  height: 100vh;
  width: 100vw;
  justify-content: center;
  align-items: center;
`;

export const Title = styled.div`
  color: white;
  font-size: 100px;
`;
