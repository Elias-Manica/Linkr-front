import { Oval } from "react-loader-spinner";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
export default function UserSearchInfo({
	user,
	loading,
	setSearchValue,
	setSearchClass,
}) {
	const navigate = useNavigate();

	function goToUser() {
		navigate(`/users/${user.id}`);
		setSearchValue("");
		setSearchClass("hidden");
	}

	return (
		<>
			{loading ? (
				<ContainerLoading>
					<Oval
						height={50}
						width={"100%"}
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
			) : (
				<Wrapper onClick={goToUser}>
					<img src={user.pictureurl} alt="" />
					<p>{user.username}</p>
				</Wrapper>
			)}
		</>
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

const ContainerLoading = styled.div`
	display: flex;
	justify-content: center;
	width: max-content;
	background-color: #e6e6e6;
	margin-top: 65px;
`;
