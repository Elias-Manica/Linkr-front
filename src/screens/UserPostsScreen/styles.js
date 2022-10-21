import styled from "styled-components";

const UserPostsTitle = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	color: #ffffff;
	font-size: 43px;
	line-height: 63px;
	img {
		border-radius: 50%;
		height: 53px;
		width: 53px;
		margin: 0px 10px;
	}
`;

const Container = styled.div`
	padding: 0px 10px;
	background-color: #333333;
	width: 100%;
	height: 100vh;
	margin-top: 72px;
	display: flex;
	flex-direction: column;
	align-items: center;
`;
const Logo = styled.h1`
	font-size: 49px;
	font-weight: 700;
	line-height: 59.95px;
	color: #ffffff;
`;

const Header = styled.div`
	position: fixed;
	left: 0;
	top: 0;
	padding: 0px 10px;
	width: 100%;
	height: 72px;
	background-color: #151515;
	display: flex;
	align-items: center;
	justify-content: space-between;
	img {
		border-radius: 50%;
		height: 53px;
		width: 53px;
	}

	.searchBar {
		width: 50%;
	}
`;

const SearchArea = styled.div`
	width: 100%;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;

	.search {
		width: 50%;
	}

	/* .hidden {
		display: none;
	} */
`;

export { UserPostsTitle, Container, Logo, Header, SearchArea };
