import React from "react";
import BagItem from "../components/BagItem";
import BagSummary from "../components/BagSummary";
import EmptyBag from "../components/EmptyBag";
import { useSelector } from "react-redux";
const Bag = () => {
  const baggedItems = useSelector((store) => store.Bag);
  const items = useSelector((state) => state.items);
  const finalItems = items.filter((item) => {
    const itemIndex = baggedItems.indexOf(item.id);
    return itemIndex >= 0;
  });

  return (
    <main>
      <div className="bag-page">
        {baggedItems.length <= 0 && <EmptyBag />}
        <div className="bag-items-container">
          {finalItems.map((item, index) => (
            <BagItem item={item} key={index} />
          ))}
        </div>
        {baggedItems.length > 0 && <BagSummary />}
      </div>
    </main>
  );
};

export default Bag;
