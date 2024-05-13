import React from "react";
import BoardMembers from "./Government/BoardMembers";
import Congressmen from "./Government/Congressmen";
import GovernmentHero from "./Government/GovernmentHero";

function GovernmentOfficials() {
  return (
    <>   
      <GovernmentHero/>
      <Congressmen/>
      <BoardMembers/>
    </>
  );
}

export default GovernmentOfficials;
