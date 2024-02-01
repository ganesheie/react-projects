import React, { useEffect } from "react";
import HomeItem from "../components/HomeItem";
import { useSelector } from "react-redux";
const Home = () => {
  const homeitems = useSelector((store) => store.items);
  return (
    <main>
      <div className="items-container embed-responsive embed-responsive-21by9 ">
        {homeitems.map((item) => (
          <HomeItem key={item.id} item={item} />
        ))}
      </div>
    </main>
  );
};

export default Home;
