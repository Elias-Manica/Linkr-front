import Css from "./style";
import React, { useState } from "react";
//import axios from "axios";

const NewPost = (props) => {
  const [publishing, setPublishing] = useState(true);
  const [textInput, setTextInput] = useState();
  const [urlInput, setUrlInput] = useState();

  function click() {
    if (textInput.length === 0) return;
    if (urlInput.length === 0) return;
    setPublishing(false);
    //const headers = {authorization}
    //axios.post("http://localhost:4000/publish", {text: textInput, link: urlInput}, {headers})
  }
  
  function input(e, type) {
    if (type === "url") setUrlInput(e.target.value);
    if (type === "text") setTextInput(e.target.value);

  }

  return (
    <Css.NewPost>
      <Css.ProfileLabel>
        <Css.ProfilePost />
      </Css.ProfileLabel>
      <Css.PostLabel>
        <Css.Box1>
          <h1>What are you going to share today?</h1>
        </Css.Box1>
        {publishing ? (
          <>
            <Css.InputUrl disabled={false} type="url" placeholder="http://" onChange={(e)=> input(e, 'url')}/>
            <Css.InputText
              disabled={false}
              type="text"
              placeholder="Awesome article about #javascript" onChange={(e)=> input(e, 'text')}
            />
          </>
        ) : (
          <>
            <Css.InputUrl disabled={true} type="url" placeholder="http://" onChange={(e)=> input(e, 'url')}/>
            <Css.InputText
              disabled={true}
              type="text"
              placeholder="Awesome article about #javascript"
              onChange={(e)=> input(e, 'text')}
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
