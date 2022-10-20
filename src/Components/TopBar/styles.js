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
  font-family: "Passion One";
  font-style: normal;
  font-weight: 700;
  font-size: 49px;
  line-height: 54px;
  /* identical to box height */

  letter-spacing: 0.05em;

  color: #ffffff;
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
  cursor: pointer;
`;
