import React from "react"
import { Routes, Route, } from 'react-router-dom';
import {Home} from '../modules/home'
import {Game} from '../modules/game'
import {Score} from '../modules/score'


export const AppRoutes: React.FC = () => {

   return (
       <Routes>
           <Route path="/" element={<Home />} />
           <Route path="/game" element={<Game />} />
           <Route path="/score" element={<Score />} />
       </Routes>
   )
}