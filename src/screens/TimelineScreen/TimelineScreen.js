import React, { useState, useEffect } from "react";

import Microlink from "@microlink/react";
import { Oval } from "react-loader-spinner";

import { listPosts, listHashtags } from "../../services/postService";
import useLocalStorage from "../../hooks/localStorage";
import {
  Container,
  ContainerCreatePost,
  ContainerDelete,
  ContainerDescription,
  ContainerEdit,
  ContainerIconEdit,
  ContainerImage,
  ContainerInfosPost,
  ContainerInfosTimeLine,
  ContainerLink,
  ContainerLoading,
  ContainerNameEdit,
  ContainerOfViewsInfos,
  ContainerPosts,
  ContainerTrends,
  ContainerUser,
  DescriptionPost,
  NameUser,
  TextEmpty,
  TextLike,
  Title,
  ViewHashtags,
  ViewIcon,
  ViewPost,
} from "./styles";

import TopBar from "../../Components/TopBar/TopBar";

import { IoMdHeartEmpty } from "react-icons/io";
import { HiOutlinePencilSquare, HiOutlineTrash } from "react-icons/hi2";
import PostUser from "../../Components/PostUser/PostUser";
import HashtagDiv from "../../Components/HashtagDiv/HashtagDiv";
import NewPost from "../NewPost/NewPost";

export default function TimelineScreen() {
  const [listOfPosts, setListOfPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showMenu, setShowMenu] = useState(false);

  function hideMenu() {
    if(showMenu) {
      setShowMenu(false);
    }
  }

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
      <TopBar showMenu={showMenu} setShowMenu={setShowMenu} hideMenu={hideMenu} />
      <Container onClick={hideMenu}>
        <ContainerOfViewsInfos>
          <Title>timeline</Title>
          <ContainerInfosTimeLine>
            <ContainerPosts>
              <ContainerCreatePost />
              <NewPost data={ getPostsTimeLine } />
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
                listOfPosts.map((value) => (
                  <ViewPost key={value.id}>
                    <ContainerUser>
                      <ContainerImage src={value.pictureurl} />
                      <ViewIcon>
                        <IoMdHeartEmpty />
                      </ViewIcon>
                      <TextLike>{value.qtdlikes} likes</TextLike>
                    </ContainerUser>
                    <ContainerInfosPost>
                      <ContainerNameEdit>
                        <NameUser>{value.username}</NameUser>
                        <ContainerIconEdit>
                          <ContainerEdit>
                            <HiOutlinePencilSquare />
                          </ContainerEdit>
                          <ContainerDelete>
                            <HiOutlineTrash />
                          </ContainerDelete>
                        </ContainerIconEdit>
                      </ContainerNameEdit>
                      <ContainerDescription>
                        <DescriptionPost>
                          {value.text}{" "}
                          {value.hashtags[0] === null
                            ? null
                            : value.hashtags.map((item) => `#${item} `)}
                        </DescriptionPost>
                        <ContainerLink>
                          <Microlink url={value.link} />
                        </ContainerLink>
                      </ContainerDescription>
                    </ContainerInfosPost>
                  </ViewPost>
                ))
              ) : (
                <TextEmpty>There are no posts yet :(</TextEmpty>
              )}
            </ContainerPosts>
            <ContainerTrends>
              <ViewHashtags />
            </ContainerTrends>
          </ContainerInfosTimeLine>
        </ContainerOfViewsInfos>
      </Container>
    </>
  );
}