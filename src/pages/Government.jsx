import React from "react";
import Header from "./Header";
import BoardMembers from "../pages/Government/BoardMembers";
import Congressmen from "../pages/Government/Congressmen";
import Footer from "./Footer";
import GovernmentHero from "./Government/GovernmentHero";
import CityHero from "./Government/CityHero";
import MapSection from "./Government/MapSection";

function Government() {
  return (
    <>   
      {/* <GovernmentHero/>
      <Congressmen/>
      <BoardMembers/> */}
      <CityHero/>
      <MapSection/> 
    </>
  );
}

export default Government;
