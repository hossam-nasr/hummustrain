import styled from "styled-components";
import Background from "../../assets/img/hummustrain.jpg";

export const Container = styled.div`
  display: flex;
  flex-flow: column nowrap;
  min-height: 100vh;
  flex: 1;
  background-image: url(${Background});
  background-size: cover;
  justify-content: center;
  align-items: center;
`;

export const Title = styled.div`
  color: white;
  font-size: 100px;
  text-align: center;
`;

export const ButtonContainer = styled.div`
  margin-top: 20px;
`;
