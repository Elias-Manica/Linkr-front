import styled from "styled-components";

export const ViewPost = styled.div`
  background: #171717;
  border-radius: 16px;
  width: 100%;
  margin-bottom: 20px;
  margin-top: 20px;
  display: flex;
  justify-content: space-between;
  @media (max-width: 935px) {
    border-radius: 0px;
  }
`;

export const ContainerUser = styled.div`
  width: 25%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 10px;
  margin-left: -10px;
`;

export const ContainerInfosPost = styled.div`
  width: 80%;

  padding-top: 10px;
  margin-right: 15px;
`;

export const ContainerImage = styled.img`
  width: 53px;
  height: 53px;
  border-radius: 50%;
  object-fit: cover;
  margin-bottom: 10px;
  margin-top: 10px;
  cursor: pointer;
`;

export const ViewIcon = styled.div`
  color: white;
  font-size: 27px;
  cursor: pointer;
`;

export const TextLike = styled.p`
  font-family: "Lato";
  font-style: normal;
  font-weight: 400;
  font-size: 13px;
  line-height: 13px;

  color: #ffffff;
`;

export const ContainerNameEdit = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 10px;
`;

export const NameUser = styled.p`
  font-family: "Lato";
  font-style: normal;
  font-weight: 400;
  font-size: 19px;
  line-height: 23px;
  /* identical to box height */
  cursor: pointer;
  color: #ffffff;
`;

export const ContainerIconEdit = styled.div`
  display: flex;
  color: white;
  font-size: 20px;
  align-items: center;
`;

export const ContainerEdit = styled.button`
  margin-right: 10px;
  background: none;
  color: inherit;
  border: none;
  padding: 0;
  font: inherit;
  cursor: pointer;
  outline: inherit;
`;

export const ContainerDelete = styled.div`
  cursor: pointer;
`;

export const DescriptionPost = styled.p`
  font-family: "Lato";
  font-style: normal;
  font-weight: 400;
  font-size: 17px;
  line-height: 20px;
  margin-top: 10px;
  color: #b7b7b7;
`;

export const ContainerDescription = styled.div``;

export const DescriptionHashtag = styled.p`
  font-family: "Lato";
  font-style: normal;
  font-weight: 400;
  font-size: 17px;
  line-height: 20px;
  margin-top: 10px;
  color: #ffffff;
  display: flex;
  margin-left: 3px;
`;

export const ContainerLink = styled.div`
  margin-top: 15px;
  margin-bottom: 20px;
  width: 100%;
`;

export const ContainerEditInput = styled.input`
  font-family: "Lato";
  font-style: normal;
  font-weight: 400;
  font-size: 17px;
  line-height: 20px;

  margin-top: 10px;
  color: #4c4c4c;
  width: 100%;
  background: #ffffff;
  border-radius: 7px;
`;

export const ContainerLOading = styled.div`
  margin-left: auto;
  margin-right: auto;
  width: 100%;
  display: flex;
  justify-content: center;
`;
