import { Container, ContainerImage, ContainerInfosUser, Logo } from "./styles";

import { IoIosArrowDown } from "react-icons/io";

export default function TopBar() {
  return (
    <>
      <Container>
        <Logo>Linkr</Logo>
        <ContainerInfosUser>
          <IoIosArrowDown />
          <ContainerImage
            src={"https://pbs.twimg.com/media/Etgtr65XEAEaFms.jpg"}
          />
        </ContainerInfosUser>
      </Container>
    </>
  );
}
