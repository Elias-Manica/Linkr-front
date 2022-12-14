import styled from "styled-components";

export const Container = styled.div`
	height: 72px;
	width: 100%;
	background: #151515;
	display: flex;
	align-items: center;
	justify-content: space-between;
	padding-left: 15px;
	padding-right: 15px;
	position: fixed;
	top: 0;
	left: 0;
	z-index: 1;
`;

export const Logo = styled.h2`
	color: #ffffff;
	font-family: "Passion One";
	font-style: normal;
	font-weight: 700;
	font-size: 49px;
	line-height: 54px;
	letter-spacing: 0.05em;
	cursor: pointer;
`;

export const ContainerInfosUser = styled.div`
	display: flex;
	color: white;
	font-size: 25px;
	align-items: center;
	cursor: pointer;
`;

export const ContainerImage = styled.img`
	width: 53px;
	height: 53px;
	border-radius: 50%;
	object-fit: cover;
	margin-left: 10px;
`;

export const Menu = styled.div`
	background-color: #151515;
	display: ${(props) => (props.showMenu ? "flex" : "none")};
	justify-content: center;
	align-items: center;
	color: #ffffff;
	font-family: "Lato";
	font-size: 17px;
	font-weight: 700;
	width: 150px;
	height: 47px;
	padding-bottom: 7px;
	border-radius: 0px 0px 0px 20px;
	cursor: pointer;
	position: absolute;
	top: 72px;
	right: 0;
`;

export const SearchArea = styled.div`
	position: relative;
	width: 50%;
	height: 40%;
	background-color: #ffffff;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;

	.searchBar {
		width: 100%;
		width: 100%;
		border: none;
		font-size: 16px;
	}

	.searchBar:focus {
		border: none;
		outline: none;
	}

	.search {
		position: absolute;
		top: 25px;
		width: 100%;
		height: auto;
		border-radius: 5px;
	}

	.hidden {
		width: 100%;
		display: none;
	}
`;
//colinha
