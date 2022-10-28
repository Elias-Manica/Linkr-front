import React, { useState } from "react";
import { GlobalStyle } from "../assets/css/GlobalStyle";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import TimelineScreen from "./TimelineScreen/TimelineScreen";
import UserPostsScreen from "./UserPostsScreen/UserPostsScreen";
import SignUpScreen from "./SignUpScreen/SignUpScreen";
import HashtagScreen from "./HashtagScreen/HashtagScreen";
import LoginScreen from "./LoginScreen/LoginScreen";
import QueriedUserInfo from "../Contexts/QueriedUserInfo/QueriedUserInfo";

export default function App() {
	const [searchedUser, setSearchedUser] = useState({});
	return (
		<>
			<GlobalStyle />
			<BrowserRouter>
				<QueriedUserInfo.Provider value={{ searchedUser, setSearchedUser }}>
					<Routes>
						<Route path="/" element={<LoginScreen />} />
						<Route path="/sign-up" element={<SignUpScreen />} />
						<Route path="/timeline" element={<TimelineScreen />} />
						<Route path="/users/:id" element={<UserPostsScreen />} />
						<Route path="/hashtag/:hashtag" element={<HashtagScreen />} />
					</Routes>
				</QueriedUserInfo.Provider>
			</BrowserRouter>
		</>
	);
}
