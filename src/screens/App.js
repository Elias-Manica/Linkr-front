import React from "react";
import { GlobalStyle } from "../assets/css/GlobalStyle";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import TimelineScreen from "./TimelineScreen/TimelineScreen";
import UserPostsScreen from "./UserPostsScreen/UserPostsScreen";

export default function App() {
	return (
		<>
			<GlobalStyle />
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<TimelineScreen />} />
					<Route path="/users/:id" element={<UserPostsScreen />} />
				</Routes>
			</BrowserRouter>
		</>
	);
}
