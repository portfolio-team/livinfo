import React from "react";
import { BrowserRouter, Route, Routes} from 'react-router-dom';
import { ArtistList } from './artist-list/artist-list';
import Home from './home/home';
export const RouterConfig:React.VFC =() => {
  console.log("OK");
  return (
    <>
    <BrowserRouter>
     <Routes>
      <Route path='/' element={<Home />} />
      <Route path="/artists" element={<ArtistList />} />
    </Routes>
   </BrowserRouter>
   </>
  );
}
