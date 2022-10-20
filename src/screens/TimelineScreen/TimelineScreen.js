import React, { useState, useEffect } from "react";

import { listPosts } from "../../services/postService";

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
  ContainerNameEdit,
  ContainerOfViewsInfos,
  ContainerPosts,
  ContainerTrends,
  ContainerUser,
  DescriptionPost,
  NameUser,
  TextLike,
  Title,
  ViewHashtags,
  ViewIcon,
  ViewPost,
} from "./styles";

import TopBar from "../../Components/TopBar/TopBar";

import { IoMdHeartEmpty } from "react-icons/io";
import { HiOutlinePencilSquare, HiOutlineTrash } from "react-icons/hi2";

export default function TimelineScreen() {
  const [listOfPosts, setListOfPosts] = useState([]);

  async function getPostsTimeLine() {
    try {
      const response = await listPosts();

      setListOfPosts(response.data);
    } catch (error) {
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
              <ContainerCreatePost />
              {listOfPosts.length > 0 ? (
                listOfPosts.map((value) => (
                  <ViewPost>
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
                      </ContainerDescription>
                    </ContainerInfosPost>
                  </ViewPost>
                ))
              ) : (
                <h1>There are no posts yet</h1>
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
