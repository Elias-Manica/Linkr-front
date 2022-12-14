import { useContext, useEffect, useState, useCallback } from "react";
import { useParams } from "react-router-dom";
import { DebounceInput } from "react-debounce-input";
import ButtonFollow from "../ButtonFollow.js/ButtonFollow";
import axios from "axios";
import {
  Container,
  ContainerInfosTimeLine,
  ContainerLoading,
  ContainerOfViewsInfos,
  ContainerPosts,
  TextEmpty,
  Title,
} from "../TimelineScreen/styles.js";
import { getUserPosts } from "../../services/linkrService.js";
import TopBar from "../../Components/TopBar/TopBar.js";
import PostUser from "../../Components/PostUser/PostUser.js";
import { listHashtags, listPosts } from "../../services/postService.js";
import { Oval } from "react-loader-spinner";
import HashtagDiv from "../../Components/HashtagDiv/HashtagDiv.js";
import { TitleImg } from "./styles.js";
import Css from "../NewPost/style";
import CssButton from "../ButtonFollow.js/styles";
import QueriedUserInfo from "../../Contexts/QueriedUserInfo/QueriedUserInfo";

export default function UserPostsScreen() {
  const { id } = useParams(); //id da tela que a gente vê
  const userInfo = JSON.parse(localStorage.getItem("linkr"));
  const [username, setUsername] = useState("");
  const [profileUrl, setProfileUrl] = useState("");
  const [userPosts, setUserPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [loadingHashtag, setLoadingHashtag] = useState(false);
  const [hashtagList, setHashtagList] = useState([]);
  const [showMenu, setShowMenu] = useState(false);
  const [isProfile, setIsProfile] = useState(true);
  const { searchedUser } = useContext(QueriedUserInfo);
  console.log(searchedUser);
  console.log(userInfo.userid, id);
  function hideMenu() {
    if (showMenu) {
      setShowMenu(false);
    }
  }

  async function getHashtags() {
    setLoadingHashtag(true);
    try {
      const response = await listHashtags();
      setHashtagList(response.data);
      setLoadingHashtag(false);
    } catch (error) {
      setLoadingHashtag(false);

      alert(
        `An error occured while trying to fetch the hashtags, please refresh the page`
      );
    }
  }

  const getPosts = useCallback(async () => {
    setLoading(true);
    try {
      const result = await getUserPosts(id);
      console.log(result.data, " data");
      if (result.data.length === 0 && Number(userInfo.userid) === Number(id)) {
        setLoading(false);
        setProfileUrl(userInfo.pictureurl);
        setUsername(userInfo.username);
        return;
      }
      if (result.data.length == 0) {
        setLoading(false);
        setProfileUrl(searchedUser.pictureurl);
        setUsername(searchedUser.username);
        return;
      }
      setUserPosts(result.data);
      setUsername(result.data[0].username);
      setProfileUrl(result.data[0].pictureurl);
      setLoading(false);
    } catch (error) {
      console.error(error);
    }
  }, [
    id,
    searchedUser.pictureurl,
    searchedUser.username,
    userInfo.pictureurl,
    userInfo.userid,
    userInfo.username,
  ]);

  useEffect(() => {
    getHashtags();
    getPosts(id);
  }, [id, getPosts, setUserPosts]);

  return (
    <>
      <TopBar
        showMenu={showMenu}
        setShowMenu={setShowMenu}
        hideMenu={hideMenu}
      />
      <Container>
        <ContainerOfViewsInfos>
          <CssButton.HeaderScreen>
            <Title>
              <TitleImg src={profileUrl} alt="" />
              {username}
            </Title>
            {Number(userInfo.userid) === Number(id) ? null : (
              <ButtonFollow userInfo={userInfo} id={id} />
            )}
          </CssButton.HeaderScreen>

          <ContainerInfosTimeLine>
            <ContainerPosts>
              {loading === true ? (
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
              ) : userPosts.length > 0 ? (
                userPosts.map((value, index) => (
                  <PostUser
                    value={value}
                    key={index}
                    isProfile={isProfile}
                    getPosts={getPosts}
                    getHashtags={getHashtags}
                  />
                ))
              ) : (
                <TextEmpty>There are no posts yet :(</TextEmpty>
              )}
            </ContainerPosts>
            <HashtagDiv hashtag={hashtagList} loadingHashtag={loadingHashtag} />
          </ContainerInfosTimeLine>
        </ContainerOfViewsInfos>
      </Container>
    </>
  );
}
