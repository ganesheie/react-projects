import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { BagActions } from "../store/Bag";

const HomeItem = ({ item }) => {
  const dispatch = useDispatch();
  const addToBag = () => {
    dispatch(BagActions.addItemsToBag(item.id));
  };
  return (
    <div className="item-container">
      <img className="item-image" src={item.image} alt="item image" />
      <div className="rating">
        {item.rating} ⭐ | {Math.ceil(1500 * Math.random(1))}
      </div>
      <div className="company-name">{item.company}</div>
      <div className="item-name">{item.item_name}</div>
      <div className="item-description" style={{ minBlockSize: "120px" }}>
        {item.description}
      </div>
      <div className="price">
        <span className="current-price">
          £
          {Math.round(
            eval(
              item.original_price * ((100 - item.discount_percentage) / 100)
            ),
            2
          )}
        </span>
        <span className="original-price">£ {item.original_price}</span>
        <span className="discount">({item.discount_percentage}% OFF)</span>
      </div>
      <button className="btn-add-bag" onClick={addToBag}>
        Add to Bag
      </button>
    </div>
  );
};
export default HomeItem;
