import React, { useState, useEffect } from "react";

import { Oval } from "react-loader-spinner";

import { listPosts, listHashtags } from "../../services/postService";
import useLocalStorage from "../../hooks/localStorage";
import {
	Container,
	ContainerCreatePost,
	ContainerInfosTimeLine,
	ContainerLoading,
	ContainerOfViewsInfos,
	ContainerPosts,
	TextEmpty,
	Title,
} from "./styles";

import TopBar from "../../Components/TopBar/TopBar";
import PostUser from "../../Components/PostUser/PostUser";
import HashtagDiv from "../../Components/HashtagDiv/HashtagDiv";
import NewPost from "../NewPost/NewPost";

export default function TimelineScreen() {
	const [listOfPosts, setListOfPosts] = useState([]);
	const [loading, setLoading] = useState(false);
	const [loadingHashtag, setLoadingHashtag] = useState(false);
	const [hashtagList, setHashtagList] = useState([]);
	const [showMenu, setShowMenu] = useState(false);

	function hideMenu() {
		if (showMenu) {
			setShowMenu(false);
		}
	}

	async function getPostsTimeLine() {
		setLoading(true);
		try {
			const response = await listPosts();
			setListOfPosts(response.data);
			setLoading(false);
		} catch (error) {
			setLoading(false);

			alert(
				`An error occured while trying to fetch the posts, please refresh the page`
			);
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

	useEffect(() => {
		getPostsTimeLine();
		getHashtags();
	}, []);

	return (
		<>
			<TopBar
				showMenu={showMenu}
				setShowMenu={setShowMenu}
				hideMenu={hideMenu}
			/>
			<Container>
				<ContainerOfViewsInfos>
					<Title>timeline</Title>
					<ContainerInfosTimeLine>
						<ContainerPosts>
							<NewPost data={getPostsTimeLine} />
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
							) : listOfPosts.length > 0 ? (
								listOfPosts.map((value, index) => (
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
//teste
