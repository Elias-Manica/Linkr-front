import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { DebounceInput } from "react-debounce-input";
import axios from "axios";
import { Container, Header, Logo, UserPostsTitle } from "./styles.js";
import UserPosts from "../../components/UserPosts.js/UserPosts.js";
import { searchUsers } from "../../services/linkrService.js";
import { AiOutlineSearch } from "react-icons/ai";
import { IconContext } from "react-icons";

export default function UserPostsScreen() {
	const { id } = useParams();
	const [username, setUsername] = useState("");
	const [profileUrl, setProfileUrl] = useState("");
	const [userPosts, setUserPosts] = useState([]);
	const [searchValue, setSearchValue] = useState("");
	useEffect(() => {
		const promise = axios.get(
			`https://back-projetao-linkr-aefj.herokuapp.com/users/${id}`
		);
		promise.then((result) => {
			console.log(result.data);
			setUsername(result.data.username);
			setProfileUrl(result.data.pictureurl);
			setUserPosts(result.data.posts);
		});
	}, []);

	function SearchButton() {
		return (
			<IconContext.Provider>
				<AiOutlineSearch />
			</IconContext.Provider>
		);
	}
	return (
		<>
			<Header>
				<Logo>linkr</Logo>
				<DebounceInput
					type="text"
					className="searchBar"
					placeholder="Search for people"
					width="100px"
					minLength={3}
					debounceTimeout={300}
					onChange={(event) => {
						setSearchValue(event.target.value);
						const promise = searchUsers(searchValue);
						promise.then((result) => {
							console.log(result.data);
						});
					}}
				/>
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
