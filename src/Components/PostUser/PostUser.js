import React, { useState } from "react";

import { IoMdHeartEmpty } from "react-icons/io";
import { HiOutlinePencilSquare, HiOutlineTrash } from "react-icons/hi2";

import { deletePost } from "../../services/postService";

import {
  ContainerDelete,
  ContainerDescription,
  ContainerEdit,
  ContainerIconEdit,
  ContainerImage,
  ContainerInfosPost,
  ContainerLink,
  ContainerNameEdit,
  ContainerUser,
  DescriptionPost,
  NameUser,
  TextLike,
  ViewIcon,
  ViewPost,
} from "./styles";

import Microlink from "@microlink/react";

import ModalDelete from "../ModalDelete/ModalDelete";

export default function PostUser({ value, getPostsTimeLine }) {
  const userInfo = JSON.parse(localStorage.getItem("linkr"));
  const [isOpen, setIsOpen] = useState(false);

  return (
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
            <ContainerDelete onClick={() => setIsOpen(!isOpen)}>
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
      <ModalDelete
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        postId={value.id}
        getPostsTimeLine={getPostsTimeLine}
      />
    </ViewPost>
  );
}
