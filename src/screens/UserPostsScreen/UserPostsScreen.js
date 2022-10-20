import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import {
	Container,
	Header,
	Logo,
	SearchBar,
	UserPostsTitle,
} from "./styles.js";
import UserPosts from "../../components/UserPosts.js/UserPosts.js";

export default function UserPostsScreen() {
	const { id } = useParams();
	const [username, setUsername] = useState("");
	const [profileUrl, setProfileUrl] = useState("");
	const [userPosts, setUserPosts] = useState([]);
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
	return (
		<>
			<Header>
				<Logo>linkr</Logo>
				<SearchBar>
					<input type="text" />
				</SearchBar>
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
