import styled from "styled-components";

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

export const Container = styled.div`
  margin-top: 72px;
  display: flex;
  justify-content: center;
`;

export const ContainerInfosTimeLine = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
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

export const ContainerPosts = styled.div`
  width: 65%;
  @media (max-width: 935px) {
    width: 100%;
  }
`;
export const ContainerTrends = styled.div`
  width: 30%;
  @media (max-width: 935px) {
    display: none;
  }
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

export const ViewHashtags = styled.div`
  height: 406px;
  background: #171717;
  border-radius: 16px;
  padding-top: 18px;
`;

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

  color: #ffffff;
`;

export const ContainerIconEdit = styled.div`
  display: flex;
  color: white;
  font-size: 20px;
  align-items: center;
`;

export const ContainerEdit = styled.div`
  margin-right: 10px;
  cursor: pointer;
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

export const TittleTrend = styled.h1`
  font-family: "Oswald";
  font-style: normal;
  font-weight: 700;
  font-size: 27px;
  line-height: 40px;
  /* identical to box height */

  color: #ffffff;
  margin-left: 22px;
`;

export const LineTrend = styled.div`
  height: 0px;
  width: 100%;
  border: 1px solid #484848;
  margin-top: 10px;
`;

export const ContainerHashtag = styled.div`
  margin-top: 20px;
`;

export const TextHashtag = styled.p`
  font-family: "Lato";
  font-style: normal;
  font-weight: 700;
  font-size: 19px;
  line-height: 23px;
  letter-spacing: 0.05em;
  margin-left: 22px;
  color: #ffffff;
  cursor: pointer;
`;

export const SubTitleHashtag = styled.p`
  font-family: "Lato";
  font-style: normal;
  font-weight: 400;
  font-size: 13px;
  line-height: 20px;

  color: #b7b7b7;
  margin-left: 22px;
  margin-bottom: 3px;
`;

export const ContainerRefresh = styled.div`
  width: 100%;
  height: 60px;
  background: #1877f2;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 16px;
  margin-top: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: "Lato";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 19px;
  cursor: pointer;
  color: #ffffff;

  p {
    margin-right: 5px;
  }
`;
