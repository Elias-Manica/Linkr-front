import { IoIosArrowDown } from "react-icons/io";
import styled from "styled-components";

export const Container = styled.div`
  height: 72px;
  width: 100%;
  background: #151515;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-left: 15px;
  padding-right: 15px;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1;
`;

export const Logo = styled.h2`
  color: #ffffff;
  font-family: "Passion One";
  font-style: normal;
  font-weight: 700;
  font-size: 49px;
  line-height: 54px;
  letter-spacing: 0.05em;
  cursor: pointer;
`;

export const ContainerInfosUser = styled.div`
  display: flex;
  color: white;
  font-size: 25px;
  align-items: center;
  cursor: pointer;
`;

export const ContainerImage = styled.img`
  width: 53px;
  height: 53px;
  border-radius: 50%;
  object-fit: cover;
  margin-left: 10px;
`;

export const Menu = styled.div`
  background-color: #151515;
  display: ${(props) => (props.showMenu ? "flex" : "none")};
  justify-content: center;
  align-items: center;
  color: #ffffff;
  font-family: "Lato";
  font-size: 17px;
  font-weight: 700;
  width: 150px;
  height: 47px;
  padding-bottom: 7px;
  border-radius: 0px 0px 0px 20px;
  cursor: pointer;
  position: absolute;
  top: 72px;
  right: 0;
`;
