import React, { useState, useEffect } from "react";

import Microlink from "@microlink/react";
import useInterval from "use-interval";
import { Oval } from "react-loader-spinner";

import { listPosts, listHashtags } from "../../services/postService";
import useLocalStorage from "../../hooks/localStorage";
import {
  Container,
  ContainerCreatePost,
  ContainerInfosTimeLine,
  ContainerLoading,
  ContainerOfViewsInfos,
  ContainerPosts,
  ContainerRefresh,
  TextEmpty,
  Title,
} from "./styles";

import TopBar from "../../Components/TopBar/TopBar";

import { IoMdHeartEmpty } from "react-icons/io";
import { HiOutlinePencilSquare, HiOutlineTrash } from "react-icons/hi2";
import PostUser from "../../Components/PostUser/PostUser";
import HashtagDiv from "../../Components/HashtagDiv/HashtagDiv";
import NewPost from "../NewPost/NewPost";

import { FiRefreshCcw } from "react-icons/fi";

export default function TimelineScreen() {
  const [listOfPosts, setListOfPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [loadingHashtag, setLoadingHashtag] = useState(false);
  const [hashtagList, setHashtagList] = useState([]);
  const [showMenu, setShowMenu] = useState(false);
  const [hasNewPost, setHasNewPost] = useState(false);
  const [qtdNewPost, setQtdNewPost] = useState(0);

  function hideMenu() {
    if (showMenu) {
      setShowMenu(false);
    }
  }

  async function getPostsTimeLine() {
    setLoading(true);
    setHasNewPost(false);
    try {
      const response = await listPosts();
      setListOfPosts(response.data);
      setLoading(false);
    } catch (error) {
      setLoading(false);

      alert(
        `An error occured while trying to fetch the posts, please refresh the page`
      );
    }
  }

  async function getHashtags() {
    setLoadingHashtag(true);
    try {
      const response = await listHashtags();
      setHashtagList(response.data);
      setLoadingHashtag(false);
    } catch (error) {
      setLoadingHashtag(false);

      alert(
        `An error occured while trying to fetch the hashtags, please refresh the page`
      );
    }
  }

  async function hasNewPostFunction() {
    try {
      const response = await listPosts();

      if (response.data[0].id !== listOfPosts[0].id) {
        setHasNewPost(true);

        const idToFind = listOfPosts[0].id;

        response.data.map((value, index) => {
          if (Number(value.id) === Number(idToFind)) {
            setQtdNewPost(index);
          }
        });
      }
    } catch (error) {}
  }

  useEffect(() => {
    getPostsTimeLine();
    getHashtags();
  }, []);

  useInterval(() => {
    hasNewPostFunction();
  }, 15000);

  return (
    <>
      <TopBar
        showMenu={showMenu}
        setShowMenu={setShowMenu}
        hideMenu={hideMenu}
      />
      <Container>
        <ContainerOfViewsInfos>
          <Title>timeline</Title>
          <ContainerInfosTimeLine>
            <ContainerPosts>
              <NewPost
                getPostsTimeLine={getPostsTimeLine}
                getHashtags={getHashtags}
              />
              {hasNewPost ? (
                <ContainerRefresh onClick={() => getPostsTimeLine()}>
                  <p>{qtdNewPost} new posts, load more!</p>
                  <FiRefreshCcw />
                </ContainerRefresh>
              ) : null}
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
                  <PostUser
                    value={value}
                    key={index}
                    getPostsTimeLine={getPostsTimeLine}
                    getHashtags={getHashtags}
                  />
                ))
              ) : (
                <TextEmpty>There are no posts yet :(</TextEmpty>
              )}
            </ContainerPosts>
            <HashtagDiv hashtag={hashtagList} loadingHashtag={loadingHashtag} />
          </ContainerInfosTimeLine>
        </ContainerOfViewsInfos>
      </Container>
    </>
  );
}
