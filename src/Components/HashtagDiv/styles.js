import styled from "styled-components";

export const ContainerTrends = styled.div`
  width: 30%;
  @media (max-width: 935px) {
    display: none;
  }
`;

export const ViewHashtags = styled.div`
  background: #171717;
  border-radius: 16px;
  padding-top: 18px;
  padding-bottom: 18px;
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

export const ContainerText = styled.div``;

export const TextEmpty = styled.p`
  font-family: "Lato";
  font-style: normal;
  font-weight: 700;
  font-size: 19px;
  line-height: 23px;
  letter-spacing: 0.05em;
  margin-left: 22px;
  color: #ffffff;
`;

export const ContainerLoading = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  margin-top: 20px;
`;
