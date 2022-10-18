import React from "react";

import { GlobalStyle } from "../assets/css/GlobalStyle";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import TimelineScreen from "./TimelineScreen/TimelineScreen";

export default function App() {
  return (
    <>
      <GlobalStyle />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<TimelineScreen />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
