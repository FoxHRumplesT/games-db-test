import { FC } from "react";
import { Route, Routes } from 'react-router-dom';
import Page404 from "../components/page-404/page-404";
import AnimeDetail from "../modules/anime/pages/anime/anime-detail";
import Home from "../modules/home/pages/home/home";

interface MainRouterProps {
  
}
 
const MainRouter: FC<MainRouterProps> = () => {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/anime/:id' element={<AnimeDetail />} />
      <Route path='*' element={<Page404 />} />
    </Routes>
  );
}
 
export default MainRouter;