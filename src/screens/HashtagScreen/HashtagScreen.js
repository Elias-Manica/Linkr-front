import React from "react";

import TopBar from "../../Components/TopBar/TopBar";
import { Container, ContainerOfViewsInfos, Title } from "./styles";

export default function HashtagScreen() {
  return (
    <>
      <TopBar />
      <Container>
        <ContainerOfViewsInfos>
          <Title>DEV</Title>
        </ContainerOfViewsInfos>
      </Container>
    </>
  );
}
