import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { DebounceInput } from "react-debounce-input";
import ButtonFollow from "../../Components/ButtonFollow/ButtonFollow";
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
import { listHashtags } from "../../services/postService.js";
import { Oval } from "react-loader-spinner";
import HashtagDiv from "../../Components/HashtagDiv/HashtagDiv.js";
import { TitleImg } from "./styles.js";

export default function UserPostsScreen() {
	const { id } = useParams();
	const [username, setUsername] = useState("");
	const [profileUrl, setProfileUrl] = useState("");
	const [userPosts, setUserPosts] = useState([]);
	const [loading, setLoading] = useState(false);
	const [loadingHashtag, setLoadingHashtag] = useState(false);
	const [hashtagList, setHashtagList] = useState([]);
	const [showMenu, setShowMenu] = useState(false);

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

	async function getPosts(id) {
		setLoading(true);
		try {
			const result = await getUserPosts(id);
			console.log(result);
			setUsername(result.data[0].userInfo.username);
			setProfileUrl(result.data[0].userInfo.pictureurl);
			setUserPosts(result.data);
			setLoading(false);
		} catch (error) {
			console.error(error);
		}
	}

	useEffect(() => {
		getHashtags();
		getPosts(id);
	}, [id]);

	return (
		<>
			<TopBar
				showMenu={showMenu}
				setShowMenu={setShowMenu}
				hideMenu={hideMenu}
			/>
			<Container>
				<ContainerOfViewsInfos>
					<Title>
						<TitleImg src={profileUrl} alt="" />
						{username}
					</Title>
					<ButtonFollow />
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
									<PostUser value={value} key={index} />
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
