import React from "react";
import HomePage from "./Pages/HomePage";
import GalleryPage from "./Pages/GalleryPage";
import ActivityDetails from "./Pages/ActivityDetails";
import VillagesList from "./Pages/VillagesList";
import VillageDetails from "./Pages/VillageDetailsPage";
import { MantineProvider } from "@mantine/core";
import { Route, Router, Routes } from "react-router-dom";
import SevaCategoryPage from "./Pages/SevaCategoryPage";
import VillageDetailsPage from "./Pages/VillageDetailsPage";
import AboutPage from "./Pages/AboutPage";
import ContributePage from "./Pages/ContributePage";

const App = () => {
  return (
    <MantineProvider>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/gallery" element={<GalleryPage />} />
        <Route path="/activities/:id" element={<ActivityDetails />} />
        <Route path="/villages" element={<VillagesList />} />
        <Route path="/villages/:slug" element={<VillageDetailsPage />} />
        <Route path="/seva/:category" element={<SevaCategoryPage />} />
        <Route path="/annadaatha" element={<SevaCategoryPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contribute" element={<ContributePage/>}/>
      </Routes>
    </MantineProvider>
  );
};

export default App;
