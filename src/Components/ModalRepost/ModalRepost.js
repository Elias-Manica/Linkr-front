import React, { useState } from "react";
import Modal from "react-modal";
import {
  ButtonCancel,
  ButtonConfirm,
  Container,
  ContainerButtons,
  ContainerLoading,
  Tittle,
} from "./styles";

import { Oval } from "react-loader-spinner";
import { rePost } from "../../services/postService";

export default function ModalRepost({
  isOpen,
  setIsOpen,
  postId,
  getPostsTimeLine,
  getHashtags,
}) {
  const userInfo = JSON.parse(localStorage.getItem("linkr"));
  const [loading, setLoading] = useState(false);

  function toggleModal() {
    setIsOpen(!isOpen);
  }

  async function repostFunction(id) {
    setLoading(true);
    try {
      await rePost(userInfo.token, id);

      setLoading(false);
      setIsOpen(false);
      getPostsTimeLine();
      getHashtags();
    } catch (error) {
      console.log("aqui");
      alert(`You cannot re-post it!`);
      setLoading(false);
      setIsOpen(false);
      console.log(error);
    }
  }

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={toggleModal}
      contentLabel="My dialog"
      style={{
        overlay: {
          position: "fixed",
          zIndex: 1020,
          top: 0,
          left: 0,
          width: "100vw",
          height: "100vh",
          background: "rgba(255, 255, 255, 0.75)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        },
        content: {
          background: "black",
          color: "white",
          width: "50vw",
          height: "30vh",
          marginLeft: "auto",
          marginRight: "auto",
          marginTop: "35vh",
          borderRadius: "50px",
        },
      }}
    >
      <Container>
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
        ) : (
          <>
            <Tittle>Do you want to re-post this link?</Tittle>
            <ContainerButtons>
              <ButtonCancel onClick={toggleModal}>No, cancel</ButtonCancel>
              <ButtonConfirm onClick={() => repostFunction(postId)}>
                Yes, share!
              </ButtonConfirm>
            </ContainerButtons>
          </>
        )}
      </Container>
    </Modal>
  );
}
