import React from "react";
import {orginals,actions,romantic} from'./urls'
import NavBar from "./components/NavBar/NavBar";
import './App.css'
import Banner from "./components/Banner/Banner";
import RowPost from "./components/RowPost/RowPost";

function App() {
  return (
    <div>
      <NavBar/>
      <Banner/>
      <RowPost  url={orginals} title='Netflix Orginals'/>
      <RowPost  url={actions} title='Actions'  isSmall/>
      <RowPost  url={romantic} title='Romantic'  isMed/>
    </div>
  );
}

export default App;
