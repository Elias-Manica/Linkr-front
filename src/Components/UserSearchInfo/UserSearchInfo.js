import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";

export default function UserSearchInfo({ user }) {
	return (
		<Link to={`/users/${user.id}`}>
			<Wrapper>
				<img src={user.pictureurl} alt="" />
				<p>{user.username}</p>
			</Wrapper>
		</Link>
	);
}

const Wrapper = styled.div`
	display: flex;
	width: 100%;
	align-items: center;
	background-color: #e6e6e6;
	padding: 10px;

	img {
		width: 39px;
		height: 39px;
		border-radius: 50%;
		object-fit: cover;
	}

	p {
		font-size: 19px;
		font-weight: 400;
		color: #515151;
		margin: 0px 10px;
	}

	&:hover {
		cursor: pointer;
	}
`;
