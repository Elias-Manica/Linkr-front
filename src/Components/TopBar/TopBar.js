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
import { Navigate, useNavigate } from "react-router-dom";
import { postLogout, searchUsers } from "../../services/linkrService";
import { DebounceInput } from "react-debounce-input";
import UserSearchInfo from "../UserSearchInfo/UserSearchInfo";

export default function TopBar({
	showMenu,
	setShowMenu,
	hideMenu,
	followingUsers,
}) {
	const [searchValue, setSearchValue] = useState("");
	const [searchResult, setSearchResult] = useState([]);
	const [searchClass, setSearchClass] = useState("hidden");
	const [loading, setLoading] = useState(false);
	const navigate = useNavigate();
	const userInfo = JSON.parse(localStorage.getItem("linkr"));

	//console.log(followingUsers); //'userId 6 => segue 7,8 e 18
	useEffect(() => {
		if (localStorage.getItem("linkr") === null) {
			navigate("/");
		}
	}, [navigate]);

	function userLogout() {
		postLogout(userInfo.token)
			.then(() => {
				localStorage.removeItem("linkr");
				navigate("/");
			})
			.catch(() => {
				localStorage.removeItem("linkr");
				navigate("/");
			});
	}
	async function getSearchResult(searchValue) {
		try {
			setSearchValue(searchValue);
			setSearchClass("loading");
			setLoading(true);
			const result = await searchUsers(searchValue);
			setLoading(false);
			setSearchResult(result.data);
			if (result.data.length > 0) {
				setSearchClass("search");
			} else {
				setSearchClass("hidden");
			}
		} catch (error) {
			setLoading(false);
			setSearchClass("hidden");
			console.error(error);
		}
	}

	if (userInfo) {
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
							minLength={3}
							debounceTimeout={300}
							onChange={(e) => {
								getSearchResult(e.target.value);
							}}
						/>
						<div className={searchClass}>
							{searchResult.map((user, index) => (
								<UserSearchInfo
									user={user}
									key={index}
									loading={loading}
									setSearchValue={setSearchValue}
									setSearchClass={setSearchClass}
								/>
							))}
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
	} else {
		return <Navigate to="/" />;
	}
}
