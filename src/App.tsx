import React from 'react';
import Home from './home/Home';
import { HomeProvider } from './home/context/HomeProvider';
import NavBar from './home/components/NavBar';
import { Toaster } from 'react-hot-toast';
import { Routes, Route } from "react-router-dom";
import TeamManager from './feature/teams/TeamManager';
import About from './home/About';
import NotFound from './feature/error/NotFound';
import FavPokemon from './feature/favorites/FavPokemon';
import Details from './feature/details/Details';


const App: React.FC = () => {
  return (
    <div>
      {/* NavBar should be outside Routes to appear on all pages */}
      <NavBar />

      {/* Toaster should also be outside Routes */}
      <Toaster position="top-center" />

      <HomeProvider>
        <Routes>
          {/* Only actual page components should be in Routes */}
          <Route path='/' element={<Home />} />
          {/* Teams list page */}
          <Route path='/teams' element={<TeamManager />} />
          {/* Example route kept for potential pokemon detail pages (adjust if needed) */}
          <Route path='/pokemon' element={<TeamManager />} />
          {/* Direct details route matching links like /pokemon/12 */}
          <Route path='/pokemon/:id' element={<Details />} />
          {/* About page */}
          <Route path='/about' element={<About />} />
          {/* Favorites page */}
          <Route path='/favorites' element={<FavPokemon />} />

          {/* Catch-all 404 route */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </HomeProvider>
    </div>
  )
}

export default App;