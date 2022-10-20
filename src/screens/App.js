import React from "react";

import { GlobalStyle } from "../assets/css/GlobalStyle";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import TimelineScreen from "./TimelineScreen/TimelineScreen";
import SignUpScreen from "./SignUpScreen/SignUpScreen";

export default function App() {
  return (
    <>
      <GlobalStyle />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<TimelineScreen />} />
          <Route path="/sign-up" element={<SignUpScreen />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
