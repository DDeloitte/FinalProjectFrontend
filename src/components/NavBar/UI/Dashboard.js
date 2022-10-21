import React, { useEffect, useState } from "react";
import { Route } from "react-router-dom";
import MyNavbar from "./MyNavbar";
import NavbarExample from "../NavbarExample";
import David from "../David";

const Dashboard = () => {

  return(
    <div>
      <MyNavbar />
      <main>
        <Route path={"/Example"}>
          <NavbarExample/>
        </Route>
        <Route path={"/David"}>
          <David/>
        </Route>
      </main>
  </div>
  );  
};

export default Dashboard;