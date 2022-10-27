import React, { useState, useEffect } from "react";

import InfiniteScroll from "react-infinite-scroll-component";

import useInterval from "use-interval";
import { Oval } from "react-loader-spinner";

import { listPosts, listHashtags } from "../../services/postService";

import {
	Container,
	ContainerInfosTimeLine,
	ContainerLoading,
	ContainerOfViewsInfos,
	ContainerPosts,
	ContainerRefresh,
	TextEmpty,
	Title,
} from "./styles";

import TopBar from "../../Components/TopBar/TopBar";

import PostUser from "../../Components/PostUser/PostUser";
import HashtagDiv from "../../Components/HashtagDiv/HashtagDiv";
import NewPost from "../NewPost/NewPost";

import { FiRefreshCcw } from "react-icons/fi";
import { getFollowingList } from "../../services/linkrService";

export default function TimelineScreen() {
	const [listOfPosts, setListOfPosts] = useState([]);
	const [loading, setLoading] = useState(false);
	const [loadingHashtag, setLoadingHashtag] = useState(false);
	const [hashtagList, setHashtagList] = useState([]);
	const [showMenu, setShowMenu] = useState(false);
	const [hasNewPost, setHasNewPost] = useState(false);
	const [qtdNewPost, setQtdNewPost] = useState(0);
	const [hasMore, setHasMore] = useState(true);
	const [page, setPage] = useState(1);
	const userInfo = JSON.parse(localStorage.getItem("linkr"));

	function hideMenu() {
		if (showMenu) {
			setShowMenu(false);
		}
	}

	const fetchData = async () => {
		const response = await getMorePosts();

		setListOfPosts([...listOfPosts, ...response]);

		if (response.length === 0 || response.length < 10) {
			setHasMore(false);
		}

		setPage(page + 1);
	};

	async function getMorePosts() {
		try {
			const response = await listPosts(page, userInfo.token);
			return response.data;
		} catch (error) {}
	}

	async function getPostsTimeLine(page) {
		setLoading(true);
		setHasNewPost(false);
		try {
			const response = await listPosts(page, userInfo.token);
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

	async function hasNewPostFunction() {
		try {
			const response = await listPosts(0, userInfo.token);

			if (response.data[0].id !== listOfPosts[0].id) {
				setHasNewPost(true);

				const idToFind = listOfPosts[0].id;

				response.data.map((value, index) => {
					if (Number(value.id) === Number(idToFind)) {
						setQtdNewPost(index);
					}
				});
			}
		} catch (error) {}
	}

	useEffect(() => {
		getPostsTimeLine(0);
		getHashtags();
	}, []);

	useInterval(() => {
		hasNewPostFunction();
	}, 15000);

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
							<NewPost
								getPostsTimeLine={getPostsTimeLine}
								getHashtags={getHashtags}
							/>
							{hasNewPost ? (
								<ContainerRefresh onClick={() => getPostsTimeLine(0)}>
									<p>{qtdNewPost} new posts, load more!</p>
									<FiRefreshCcw />
								</ContainerRefresh>
							) : null}
							<InfiniteScroll
								dataLength={listOfPosts.length} //This is important field to render the next data
								next={fetchData}
								hasMore={hasMore}
								loader={
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
								}
								endMessage={<TextEmpty>Yay! You have seen it all</TextEmpty>}
							>
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
										<PostUser
											value={value}
											key={index}
											getPostsTimeLine={getPostsTimeLine}
											getHashtags={getHashtags}
										/>
									))
								) : (
									<TextEmpty>There are no posts yet :(</TextEmpty>
								)}
							</InfiniteScroll>
						</ContainerPosts>
						<HashtagDiv hashtag={hashtagList} loadingHashtag={loadingHashtag} />
					</ContainerInfosTimeLine>
				</ContainerOfViewsInfos>
			</Container>
		</>
	);
}
