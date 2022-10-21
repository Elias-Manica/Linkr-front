import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { DebounceInput } from "react-debounce-input";
import axios from "axios";
import {
	Container,
	Header,
	Logo,
	UserPostsTitle,
	SearchArea,
} from "./styles.js";
import UserPosts from "../../components/UserPosts.js/UserPosts.js";
import { searchUsers } from "../../services/linkrService.js";
import UserSearchInfo from "../../components/UserPosts.js/UserSearchInfo.js";

export default function UserPostsScreen() {
	const { id } = useParams();
	const [username, setUsername] = useState("");
	const [profileUrl, setProfileUrl] = useState("");
	const [userPosts, setUserPosts] = useState([]);
	const [searchValue, setSearchValue] = useState("");
	const [searchResult, setSearchResult] = useState([]);
	const [searchClass, setSearchClass] = useState("hidden");
	useEffect(() => {
		const promise = axios.get(
			`https://back-projetao-linkr-aefj.herokuapp.com/users/${id}`
		);
		promise.then((result) => {
			setUsername(result.data.username);
			setProfileUrl(result.data.pictureurl);
			setUserPosts(result.data.posts);
		});
	}, []);

	function handleDebounce(event) {
		if (event.target.value.length < 3) {
			setSearchClass("hidden");
		}
		setSearchValue(event.target.value);
		searchUsers(searchValue)
			.then((result) => {
				console.log(result.data);
				if (result.data.length > 0) {
					setSearchClass("search");
				}
				setSearchResult(result.data);
			})
			.catch((response) => {
				console.error(response);
			});
	}

	return (
		<>
			<Header>
				<Logo>linkr</Logo>
				<SearchArea>
					<DebounceInput
						type="text"
						value={searchValue}
						className="searchBar"
						placeholder="Search for people"
						width="100px"
						style={{
							border: "none",
						}}
						minLength={3}
						debounceTimeout={300}
						onChange={handleDebounce}
					/>
					<div className={searchClass}>
						{searchResult.map((user, index) => {
							return <UserSearchInfo user={user} key={index} />;
						})}
					</div>
				</SearchArea>

				<img src={profileUrl} alt="" />
			</Header>
			<Container>
				<UserPostsTitle>
					<img src={profileUrl} alt="" />
					<h1>{username}'s posts</h1>
				</UserPostsTitle>
				{userPosts.length === 0
					? "Efeito de carregamento bonitinho"
					: userPosts.map((post, index) => {
							return (
								<UserPosts
									post={post}
									key={index}
									username={username}
									profileUrl={profileUrl}
								/>
							);
					  })}
			</Container>
		</>
	);
}
