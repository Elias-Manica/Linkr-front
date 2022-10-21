import React, { useState, useEffect } from "react";

import { Oval } from "react-loader-spinner";

import { listPosts } from "../../services/postService";

import {
  Container,
  ContainerCreatePost,
  ContainerInfosTimeLine,
  ContainerLoading,
  ContainerOfViewsInfos,
  ContainerPosts,
  TextEmpty,
  Title,
} from "./styles";

import TopBar from "../../Components/TopBar/TopBar";
import PostUser from "../../Components/PostUser/PostUser";
import HashtagDiv from "../../Components/HashtagDiv/HashtagDiv";

const hashtagApi = [
  {
    id: 2,
    name: "descanso",
    quantidade: "2",
  },
  {
    id: 1,
    name: "entretenimento",
    quantidade: "2",
  },
  {
    id: 3,
    name: "trabalho",
    quantidade: "1",
  },
  {
    id: 4,
    name: "dev",
    quantidade: "1",
  },
];

export default function TimelineScreen() {
  const [listOfPosts, setListOfPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [loadingHashtag, setLoadingHashtag] = useState(false);

  async function getPostsTimeLine() {
    setLoading(true);
    try {
      const response = await listPosts();

      setListOfPosts(response.data);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      console.log(error);
      alert(
        `An error occured while trying to fetch the posts, please refresh the page`
      );
    }
  }

  useEffect(() => {
    getPostsTimeLine();
  }, []);

  return (
    <>
      <TopBar />
      <Container>
        <ContainerOfViewsInfos>
          <Title>timeline</Title>
          <ContainerInfosTimeLine>
            <ContainerPosts>
              <ContainerCreatePost></ContainerCreatePost>
              {loading ? (
                <ContainerLoading>
                  <Oval
                    height={80}
                    width={80}
                    color="#171717"
                    wrapperStyle={{}}
                    wrapperClass=""
                    visible={true}
                    ariaLabel="oval-loading"
                    secondaryColor="#FFFFFF"
                    strokeWidth={2}
                    strokeWidthSecondary={2}
                  />
                </ContainerLoading>
              ) : listOfPosts.length > 0 ? (
                listOfPosts.map((value, index) => (
                  <PostUser value={value} key={index} />
                ))
              ) : (
                <TextEmpty>There are no posts yet :(</TextEmpty>
              )}
            </ContainerPosts>
            <HashtagDiv hashtag={hashtagApi} loadingHashtag={loadingHashtag} />
          </ContainerInfosTimeLine>
        </ContainerOfViewsInfos>
      </Container>
    </>
  );
}
//teste
