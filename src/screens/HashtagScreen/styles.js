import styled from "styled-components";

export const Container = styled.div`
  margin-top: 72px;
  display: flex;
  justify-content: center;
`;

export const ContainerOfViewsInfos = styled.div`
  width: 80%;
  margin-left: auto;
  margin-right: auto;
  margin-top: 20px;
  @media (max-width: 935px) {
    width: 100%;
  }
`;

export const Title = styled.h1`
  font-family: "Oswald";
  font-style: normal;
  font-weight: 700;
  font-size: 43px;
  line-height: 64px;
  /* identical to box height */
  margin-bottom: 20px;
  color: #ffffff;
  @media (max-width: 935px) {
    margin-left: 20px;
  }
`;
