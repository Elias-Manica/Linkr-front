import {
  Container,
  ContainerImage,
  ContainerInfosUser,
  Logo,
  Menu,
} from "./styles";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { postLogout } from "../../services/linkrService";

export default function TopBar({ showMenu, setShowMenu, hideMenu }) {
  const navigate = useNavigate();
  const userInfo = JSON.parse(localStorage.getItem("linkr"));

  useEffect(() => {
    if(localStorage.getItem("linkr") === null) {
        navigate("/");
    }
  }, [navigate]);

  function userLogout() {
    postLogout(userInfo.token)
      .then(() => {
        localStorage.removeItem("linkr");
        navigate("/");
      })
      .catch(() => {
        alert("Error!");
      });
  }

  return (
    <>
      <Container onClick={hideMenu}>
        <Logo onClick={() => navigate("/timeline")}>Linkr</Logo>
        <ContainerInfosUser onClick={() => setShowMenu(!showMenu)}>
          {showMenu === false ? <IoIosArrowDown /> : <IoIosArrowUp />}
          <ContainerImage src={userInfo.pictureurl} alt="user-picture" />
        </ContainerInfosUser>
        <Menu onClick={userLogout} showMenu={showMenu}>
          Logout
        </Menu>
      </Container>
    </>
  );
}