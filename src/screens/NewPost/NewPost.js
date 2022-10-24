import Css from "./style";
import React, { useState } from "react";
import axios from "axios";
import useLocalStorage from "../../hooks/localStorage";


const NewPost = (props ) => {
  const [publishing, setPublishing] = useState(true);
  const [textInput, setTextInput] = useState("");
  const [urlInput, setUrlInput] = useState("");
  const [local, setLocal] = useLocalStorage("linkr");
  const userInfo = JSON.parse(localStorage.getItem("linkr"));
  //const { getPostsTimeLine } = props.data

  function click() {
    if (textInput.length === 0) return;
    if (urlInput.length === 0) return;
    if (publishing === false) return;
    setPublishing(false);
    const headers = { authorization: local.token };
    axios
      .post(
        "http://localhost:4000/publish",
        { text: textInput, link: urlInput },
        { headers }
      )
      .then( (res) => {
        setPublishing(true);
        setTextInput("");
        setUrlInput("");
      })
      .catch((res) => {
        console.log(res)
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

  return (
    <Css.NewPost>
      <Css.ProfileLabel>
        <Css.ProfilePost src={userInfo.pictureurl} alt="user-picture" />
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
