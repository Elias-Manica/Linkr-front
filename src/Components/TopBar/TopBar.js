import {
	Container,
	ContainerImage,
	ContainerInfosUser,
	Logo,
	Menu,
	SearchArea,
} from "./styles";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { postLogout, searchUsers } from "../../services/linkrService";
import { DebounceInput } from "react-debounce-input";
import UserSearchInfo from "../UserSearchInfo/UserSearchInfo";

export default function TopBar({ showMenu, setShowMenu, hideMenu }) {
	const [searchValue, setSearchValue] = useState("");
	const [searchResult, setSearchResult] = useState([]);
	const [searchClass, setSearchClass] = useState("hidden");
	const navigate = useNavigate();
	const userInfo = JSON.parse(localStorage.getItem("linkr"));

	function userLogout() {
		postLogout(userInfo.token)
			.then(() => {
				localStorage.removeItem("linkr");
				navigate("/");
			})
			.catch(() => {
				alert("Error!");
			});
	}
	async function getSearchResult(searchValue) {
		try {
			const result = await searchUsers(searchValue);
			console.log(result);
			setSearchResult(result.data);
			setSearchClass("search");
		} catch (error) {
			console.error(error);
		}
	}

	function handleDebounce(event) {
		setSearchValue(event.target.value);
		console.log(searchValue);
		getSearchResult(searchValue);
	}

	return (
		<>
			<Container onClick={hideMenu}>
				<Logo onClick={() => navigate("/timeline")}>linkr</Logo>
				<SearchArea>
					<DebounceInput
						type="text"
						value={searchValue}
						className="searchBar"
						placeholder="Search for people"
						width="1000px"
						minLength={3}
						debounceTimeout={300}
						onChange={(e) => handleDebounce(e)}
					/>
					<div className={searchClass}>
						{searchResult.map((user, index) => {
							return <UserSearchInfo user={user} key={index} />;
						})}
					</div>
				</SearchArea>
				<ContainerInfosUser onClick={() => setShowMenu(!showMenu)}>
					{showMenu === false ? <IoIosArrowDown /> : <IoIosArrowUp />}
					<ContainerImage src={userInfo.pictureurl} alt="user-picture" />
				</ContainerInfosUser>
				<Menu onClick={userLogout} showMenu={showMenu}>
					Logout
				</Menu>
			</Container>
		</>
	);
}
