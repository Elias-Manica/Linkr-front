import styled from "styled-components";

export const Container = styled.div`
  width: 70%;
  margin-left: auto;
  margin-right: auto;
`;

export const Tittle = styled.h1`
  font-family: "Lato";
  font-style: normal;
  font-weight: 700;
  font-size: 34px;
  line-height: 41px;
  text-align: center;

  color: #ffffff;
  @media (max-width: 935px) {
    font-size: 14px;
    line-height: 30px;
  }
`;

export const ButtonCancel = styled.div`
  width: 30%;
  height: 30px;
  background: #ffffff;
  border-radius: 5px;
  font-family: "Lato";
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  line-height: 22px;
  /* identical to box height */
  cursor: pointer;
  color: #1877f2;
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 935px) {
    font-size: 8px;
    line-height: 30px;
    width: 45%;
  }
`;

export const ButtonConfirm = styled.div`
  width: 30%;
  height: 30px;
  background: #1877f2;
  border-radius: 5px;
  font-family: "Lato";
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  line-height: 22px;
  /* identical to box height */
  cursor: pointer;
  color: #ffffff;
  display: flex;
  justify-content: center;
  align-items: center;
  @media (max-width: 935px) {
    font-size: 8px;
    line-height: 30px;
    width: 45%;
  }
`;

export const ContainerButtons = styled.div`
  display: flex;
  justify-content: space-evenly;
  margin-top: 20px;
`;

export const ContainerLoading = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  margin-top: 20px;
`;
