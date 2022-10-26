import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  background: #1e1e1e;
`;

export const CommentsContainer = styled.div`
  display: flex;

  align-items: center;
  background-color: #1e1e1e;
  border-radius: 0px 0px 7px 7px;
  width: 100%;
  min-height: 2%;
  padding-left: 15px;
  justify-content: space-between;
  padding-bottom: 20px;
  padding-top: 10px;

  form {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
  }

  input {
    width: 100%;
    background-color: #252525;
    color: #acacac;
    border-radius: 8px;
    height: 40px;
    border: none;
    position: relative;
  }

  input:focus {
    border: none;
    outline: none;
  }

  input::placeholder {
    padding: 0px 10px;
  }

  img {
    height: 40px;
    width: 40px;
    border-radius: 50%;
    object-fit: cover;
    margin-left: 15px;
  }

  button {
    display: flex;
    align-items: center;
    position: relative;
    right: 40px;
    height: 40px;
    background: none;
    border: none;
    color: #f3f3f3;
    font-size: 20px;
  }

  button:hover {
    cursor: pointer;
  }
`;
export const ContainerSeeCOmments = styled.div`
  width: 100%;

  background: #1e1e1e;
  margin-top: -30px;
`;

export const ContainerComment = styled.div`
  width: 100%;
  background-color: #1e1e1e;
  padding-top: 15px;
  padding-bottom: 25px;
  color: #acacac;
  display: flex;

  justify-content: space-around;
  padding-left: 15px;
`;

export const ContainerImage = styled.img`
  height: 40px;
  width: 40px;
  border-radius: 50%;
  object-fit: cover;
`;

export const ViewDescriptionComment = styled.div`
  width: 80%;
`;

export const ContainerName = styled.div`
  display: flex;
  align-items: center;
`;

export const NameUser = styled.h1`
  font-family: "Lato";
  font-style: normal;
  font-weight: 700;
  font-size: 14px;
  line-height: 17px;
  /* identical to box height */

  color: #f3f3f3;
`;

export const StatusUser = styled.p`
  font-family: "Lato";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 17px;
  margin-left: 5px;
  color: #565656;
`;

export const DescriptionPost = styled.p`
  font-family: "Lato";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 17px;
  /* identical to box height */

  color: #acacac;
`;

export const Line = styled.div`
  width: 95%;
  border: 1px solid #353535;
  transform: rotate(-0.1deg);
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 25px;
`;
