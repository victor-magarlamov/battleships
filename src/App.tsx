import React, { Fragment, useState, useEffect } from "react";
import { useSelector } from "react-redux";
import SetupPage from "./components/settings_page";
import GamePage from "./components/game_page";
import Header from "./components/common/Header";
import { Ship } from "./types";
import { Pages } from "./types/enums";
import "./App.css";

const App = () => {
  const [currentPage, setCurrentPage] = useState(Pages.Settings);
  const disposition: Ship[] = useSelector((state: any) => state.disposition);

  const pages: { [key: string]: React.ReactElement } = {
    [Pages.Settings]: <SetupPage />,
    [Pages.Game]: <GamePage />
  };

  useEffect(() => {
    if (disposition.length > 1) {
      setCurrentPage(Pages.Game);
    } else {
      setCurrentPage(Pages.Settings);
    }
  }, [disposition]);

  return (
    <Fragment>
      <Header as="h1" content="Battleships" />
      {pages[currentPage]}
    </Fragment>
  );
};

export default App;
