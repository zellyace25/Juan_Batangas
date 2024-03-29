import React from "react";
import Header from "./Header";
import BoardMembers from "../pages/Government/BoardMembers";
import Congressmen from "../pages/Government/Congressmen";
import Footer from "./Footer";
import GovernmentMain from "./Government/GovernmentMain";

function Government() {
  return (
    <> 
      <Header />  
      <GovernmentMain/>
      <Congressmen/>
      <BoardMembers/>
      <Footer/> 
    </>
  );
}

export default Government;
