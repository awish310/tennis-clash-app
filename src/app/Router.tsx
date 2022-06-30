import React from 'react';
import { Routes, Route } from 'react-router-dom';
import CardsPage from '../modules/CardsPage/CardsPage';
import HomePage from '../modules/HomePage/HomePage';
import { CardType } from '../types';

export const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route
        path="/characters"
        element={<CardsPage type={CardType.CHARACTERS} />}
      />
      <Route path="/grips" element={<CardsPage type={CardType.GRIPS} />} />
      <Route
        path="/nutritions"
        element={<CardsPage type={CardType.NUTRITIONS} />}
      />
      <Route path="/rackets" element={<CardsPage type={CardType.RACKETS} />} />
      <Route path="/shoes" element={<CardsPage type={CardType.SHOES} />} />
      <Route
        path="/workouts"
        element={<CardsPage type={CardType.WORKOUTS} />}
      />
      <Route
        path="/wristbands"
        element={<CardsPage type={CardType.WRISTBANDS} />}
      />
    </Routes>
  );
};
