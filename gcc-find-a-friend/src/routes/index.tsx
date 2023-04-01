import { Routes, Route } from "react-router-dom";
import { Home } from "../pages/Home";
import { Map } from "../pages/Map";
import { PetDetails } from "../pages/PetDetails";

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/map" element={<Map />} />
      <Route path="/details/:id" element={<PetDetails />} />
    </Routes>
  );
}
