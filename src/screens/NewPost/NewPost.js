import Css from "./style";
import React, { useState } from "react";
import axios from "axios";

import { useNavigate } from "react-router-dom";

const NewPost = ({ getPostsTimeLine, getHashtags }) => {
  const [publishing, setPublishing] = useState(true);
  const [textInput, setTextInput] = useState("");
  const [urlInput, setUrlInput] = useState("");
  const userInfo = JSON.parse(localStorage.getItem("linkr"));
  const navigate = useNavigate();

  function click() {
    if (textInput.length === 0) return;
    if (urlInput.length === 0) return;
    if (publishing === false) return;
    setPublishing(false);

    const headers = {
      authorization: JSON.parse(localStorage.getItem("linkr")).token,
    };
    axios
      .post(
        "https://back-projetao-linkr-aefj.herokuapp.com/publish",
        { text: textInput, link: urlInput },
        { headers }
      )
      .then((res) => {
        setPublishing(true);
        setTextInput("");
        setUrlInput("");
        getPostsTimeLine(0);
        getHashtags();
      })
      .catch((res) => {
        console.log(res);
        setPublishing(true);
        setTextInput("");
        setUrlInput("");
        alert(res);
      });
  }

  function input(e, type) {
    if (type === "url") setUrlInput(e.target.value);
    if (type === "text") setTextInput(e.target.value);
  }

  function goToUserPage() {
    console.log(userInfo.userid);
    navigate(`/users/${userInfo.userid}`);
  }

  return (
    <Css.NewPost>
      <Css.ProfileLabel>
        <Css.ProfilePost
          src={userInfo.pictureurl}
          alt="user-picture"
          onClick={() => goToUserPage()}
        />
      </Css.ProfileLabel>
      <Css.PostLabel>
        <h1>What are you going to share today?</h1>
        {publishing ? (
          <>
            <Css.InputUrl
              disabled={false}
              value={urlInput}
              type="url"
              placeholder="http://"
              onChange={(e) => input(e, "url")}
            />
            <Css.InputText
              disabled={false}
              value={textInput}
              type="text"
              placeholder="Awesome article about #javascript"
              onChange={(e) => input(e, "text")}
            />
          </>
        ) : (
          <>
            <Css.InputUrl
              disabled={true}
              value={urlInput}
              type="url"
              placeholder="http://"
              onChange={(e) => input(e, "url")}
            />
            <Css.InputText
              disabled={true}
              value={textInput}
              type="text"
              placeholder="Awesome article about #javascript"
              onChange={(e) => input(e, "text")}
            />
          </>
        )}

        <Css.BoxButton>
          <Css.ButtonPublish onClick={click}>
            {publishing ? "Publish" : "Publishing..."}
          </Css.ButtonPublish>
        </Css.BoxButton>
      </Css.PostLabel>
    </Css.NewPost>
  );
};

export default NewPost;
