import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ArtistList from "./artist-list/artist-list"

export const RouterConfig:React.VFC =() => {
  return (
    <>
     <BrowserRouter>
      <Routes>
        <Route path="artists" element={<ArtistList />} />
      </Routes>
    </BrowserRouter>
    </>
  );
}