import React, { useState, useEffect, useCallback } from "react";

import { useParams } from "react-router-dom";

import { listOneHashtag, listHashtags } from "../../services/postService";

import TopBar from "../../Components/TopBar/TopBar";
import PostUser from "../../Components/PostUser/PostUser";
import HashtagDiv from "../../Components/HashtagDiv/HashtagDiv";

import { Oval } from "react-loader-spinner";

import {
  Container,
  ContainerInfosTimeLine,
  ContainerLoading,
  ContainerOfViewsInfos,
  ContainerPosts,
  TextEmpty,
  Title,
} from "./styles";

export default function HashtagScreen() {
  const { hashtag } = useParams();
  const [listHashtagsPosts, setListHashtagsPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [loadingHashtag, setLoadingHashtag] = useState(false);
  const [hashtagList, setHashtagList] = useState([]);

  const getPostsHashtag = useCallback(async () => {
    setLoading(true);
    try {
      const response = await listOneHashtag(hashtag);
      setListHashtagsPosts(response.data);

      setLoading(false);
    } catch (error) {
      setLoading(false);
    }
  }, [hashtag]);

  async function getHashtags() {
    setLoadingHashtag(true);
    try {
      const response = await listHashtags();

      setHashtagList(response.data);
      setLoadingHashtag(false);
    } catch (error) {
      setLoadingHashtag(false);
    }
  }

  useEffect(() => {
    getPostsHashtag();
    getHashtags();
  }, [getPostsHashtag]);

  return (
    <>
      <TopBar />
      <Container>
        <ContainerOfViewsInfos>
          <Title>#{hashtag}</Title>
          <ContainerInfosTimeLine>
            <ContainerPosts>
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
              ) : listHashtagsPosts.length > 0 ? (
                listHashtagsPosts.map((value, index) => (
                  <PostUser value={value} key={index} />
                ))
              ) : (
                <TextEmpty>
                  There are no posts yet, in this hashtag :(
                </TextEmpty>
              )}
            </ContainerPosts>
            <HashtagDiv hashtag={hashtagList} loadingHashtag={loadingHashtag} />
          </ContainerInfosTimeLine>
        </ContainerOfViewsInfos>
      </Container>
    </>
  );
}
