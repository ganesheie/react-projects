import React, { useEffect } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Outlet } from "react-router-dom";
import FetchItems from "../components/FetchItems";
import { useSelector } from "react-redux";
import Spinner from "../components/Spinner";

const App = () => {
  const fetchStatus = useSelector((store) => store.fetchStatus);
  return (
    <>
      <Header />
      <FetchItems />
      {fetchStatus.currentlyFetching ? <Spinner /> : <Outlet />}
      <Footer />
    </>
  );
};

export default App;
