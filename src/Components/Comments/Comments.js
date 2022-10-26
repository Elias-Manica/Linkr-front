import React, { useState, useEffect } from "react";

import { getComments } from "../../services/postService";

import {
  CommentsContainer,
  Container,
  ContainerComment,
  ContainerImage,
  ContainerName,
  ContainerSeeCOmments,
  DescriptionPost,
  Line,
  NameUser,
  StatusUser,
  ViewDescriptionComment,
} from "./styles";

import { insertCommentIntoPost } from "../../services/postService";

import { TbSend } from "react-icons/tb";

import { Oval } from "react-loader-spinner";
import { ContainerLOading } from "../PostUser/styles";

export default function Comments({ value }) {
  const userInfo = JSON.parse(localStorage.getItem("linkr"));
  const [commentText, setCommentText] = useState("");
  const [listAllComment, setListAllComment] = useState([]);
  const [loading, setLoading] = useState(false);

  async function commentPost(e) {
    e.preventDefault();
    await insertCommentIntoPost(value.id, userInfo.token, commentText);
  }

  function handleInput(e) {
    setCommentText(e.target.value);
  }

  async function listComment() {
    setLoading(true);
    try {
      const response = await getComments(value.id);
      setListAllComment(response.data);
      console.log(response.data);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      alert(
        `An error occured while trying to fetch the comments, please refresh the page`
      );
    }
  }

  useEffect(() => {
    listComment();
  }, []);

  return (
    <>
      <Container>
        <ContainerSeeCOmments>
          {loading ? (
            <ContainerLOading>
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
            </ContainerLOading>
          ) : (
            listAllComment.map((value) => (
              <>
                <ContainerComment>
                  <ContainerImage src={value.urluser} />
                  <ViewDescriptionComment>
                    <ContainerName>
                      <NameUser>{value.username}</NameUser>
                      <StatusUser>
                        {value.follow ? "• following" : null}
                        {value.owner ? "• post’s author" : null}
                      </StatusUser>
                    </ContainerName>
                    <DescriptionPost>{value.comment}</DescriptionPost>
                  </ViewDescriptionComment>
                </ContainerComment>
                <Line />
              </>
            ))
          )}
        </ContainerSeeCOmments>
        <CommentsContainer>
          <img src={value.pictureurl} alt="" />
          <form onSubmit={commentPost}>
            <input
              type="text"
              placeholder="write a comment..."
              onChange={handleInput}
            />
            <button type="submit">
              <TbSend />
            </button>
          </form>
        </CommentsContainer>
      </Container>
    </>
  );
}
