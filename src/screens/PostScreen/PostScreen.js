import axios from "axios";
import Css from "./styles";
import NewPost from "../NewPost/NewPost";
import Post from "../Post/Post";
import React, { useState } from "react";

export default function PostScreen() {
  const [listPosts, setListPosts] = useState();
  

  React.useEffect(() => {
    axios.get("http://localhost:4000/timeline").then((res) => {
      setListPosts(res.data);
      console.log(res.data);
    });
  }, []);

  return (
    <>
      <Css.Header>
        <h1>linkr</h1>
        <Css.Profile></Css.Profile>
      </Css.Header>
      <Css.Screen>
        <Css.Box>
          <Css.Title>timeline</Css.Title>
          <Css.Main>
            <Css.Feed>
              <NewPost />
            { listPosts && listPosts.map( (data, index ) => {
				return <Post key = {index} username = {data.username} text = {data.text} link={data.link} profile={data.pictureurl} />
			} )}
              
              {/* <Post></Post> */}
              {/* <Post></Post> */}
              {/* <Post></Post> */}
            </Css.Feed>

            <Css.Trending></Css.Trending>
          </Css.Main>
        </Css.Box>
      </Css.Screen>
    </>
  );
}
