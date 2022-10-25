import styled from "styled-components";

const Css = {
	Post: styled.div`
		height: 209px;
		width: 611px;
		border-radius: 8px;
		background-color: #222222;
		margin-top: 29px;
		color: #fff;
		display: flex;
	`,
	ProfileLabel: styled.div`
		width: 15%;
	`,
	ContentLabel: styled.div`
		width: 85%;
		display: flex;
		flex-direction: column;
		padding: 6px 8px;
		.username {
			font-size: 1.3rem;
			font-weight: 600;
		}
	`,
	ProfilePost: styled.img`
		height: 50px;
		width: 50px;
		background-color: lightgray;
		border-radius: 50%;
		margin: 10px;
		object-fit: cover;
	`,
};

export default Css;
