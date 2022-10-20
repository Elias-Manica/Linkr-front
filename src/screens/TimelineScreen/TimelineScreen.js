import React, { useState, useEffect } from "react";

import { listPosts } from "../../services/postService";

import {
  Container,
  ContainerCreatePost,
  ContainerDelete,
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
      alert(`${error.response.data.message}`);
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
                      <DescriptionPost>{value.text}</DescriptionPost>
                    </ContainerInfosPost>
                  </ViewPost>
                ))
              ) : (
                <h1>Sem posts</h1>
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
