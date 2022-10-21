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

export const ContainerInfosTimeLine = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

export const ContainerPosts = styled.div`
  width: 65%;
  @media (max-width: 935px) {
    width: 100%;
  }
`;

export const ContainerLoading = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  margin-top: 20px;
`;

export const TextEmpty = styled.h1`
  font-family: "Oswald";
  font-style: normal;
  font-weight: 700;
  font-size: 30px;
  line-height: 64px;
  /* identical to box height */
  text-align: center;
  color: #ffffff;
  margin-top: 20px;
`;

export const ContainerCreatePost = styled.div`
  height: 209px;
  width: 100%;
  background: #ffffff;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 16px;
  @media (max-width: 935px) {
    border-radius: 0px;
  }
`;
