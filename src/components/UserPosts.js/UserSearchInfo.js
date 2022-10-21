import styled from "styled-components";

export default function UserSearchInfo({ user }) {
	return (
		<Wrapper>
			<img src={user.pictureurl} alt="" />
			<p>{user.username}</p>
		</Wrapper>
	);
}

const Wrapper = styled.div`
	display: flex;
	width: 100%;
	align-items: center;
	background-color: #e6e6e6;
	border-radius: 5px;
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
`;
