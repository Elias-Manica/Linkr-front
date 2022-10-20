import styled from "styled-components";
import { AiOutlineHeart } from "react-icons/ai";
import { IconContext } from "react-icons";

export default function UserPosts({ post, username, profileUrl }) {
	function LikeButton() {
		return (
			<IconContext.Provider value={{ color: "white", size: "30px" }}>
				<AiOutlineHeart />
			</IconContext.Provider>
		);
	}

	return (
		<Wrapper>
			<PictureLikeContainer>
				<img src={profileUrl} alt="" />
				<LikeButton />
			</PictureLikeContainer>
			<PostContent>
				<PostText>
					<h3>{username}</h3>
					<p>{post.text}</p>
				</PostText>
				<PostUrl>
					<p>{post.link}</p>
				</PostUrl>
			</PostContent>
		</Wrapper>
	);
}

const Wrapper = styled.div`
	display: flex;
	align-items: center;
	background-color: #171717;
	width: 48%;
	height: 38%;
	margin: 10px 0px;
	padding: 10px;
	border-radius: 8px;
`;

const PictureLikeContainer = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: flex-start;
	align-items: center;
	width: 20%;
	height: 100%;
	img {
		border-radius: 50%;
		height: 50px;
		width: 50px;
		margin-bottom: 20px;
	}
`;

const PostText = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: space-evenly;
	width: 100%;
	font-weight: 400;

	h3 {
		color: #ffffff;
		font-size: 19px;
	}

	p {
		color: #b7b7b7;
		font-size: 17px;
	}
`;

const PostUrl = styled.div`
	border: 1px solid #4d4d4d;
	border-radius: 11px;
	width: 100%;
	height: 70%;
	display: flex;
	justify-content: center;
	align-items: center;
`;

const PostContent = styled.div`
	width: 100%;
	height: 100%;
	margin: 10px;
`;
