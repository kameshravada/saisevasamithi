import React from "react";
import HomePage from "./Pages/HomePage";
import GalleryPage from "./Pages/GalleryPage";
import ActivityDetails from "./Pages/ActivityDetails";
import VillagesList from "./Pages/VillagesList";
import VillageDetails from "./Pages/VillageDetails";
import { MantineProvider } from "@mantine/core";
import { Route, Router, Routes } from "react-router-dom";

const App = () => {
  return (
    <MantineProvider>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/gallery" element={<GalleryPage />} />
        <Route path="/activities/:id" element={<ActivityDetails/>} />
        <Route path="/villages" element={<VillagesList/>} />
        <Route path="/villages/:id" element={<VillageDetails/>} />
      </Routes>
    </MantineProvider>
  );
};

export default App;
