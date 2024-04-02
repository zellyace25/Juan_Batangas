import React from "react";
import Header from "./Header";
import BoardMembers from "../pages/Government/BoardMembers";
import Congressmen from "../pages/Government/Congressmen";
import Footer from "./Footer";
import GovernmentHero from "./Government/GovernmentHero";

function Government() {
  return (
    <> 
      <Header />  
      <GovernmentHero/>
      <Congressmen/>
      <BoardMembers/>
      <Footer/> 
    </>
  );
}

export default Government;
