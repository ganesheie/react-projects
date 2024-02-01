import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { BagActions } from "../store/Bag";
import { IoMdRemoveCircle } from "react-icons/io";
const BagItem = ({ item }) => {
  const getDeliveryDate = () => {
    const now = new Date();
    let daystoAdd = Math.ceil(item.delivery_date);
    now.setDate(now.getDate() + daystoAdd);
    return now.toLocaleDateString("en-GB");
  };
  const dispatch = useDispatch();
  const handleRemoveItem = () => {
    dispatch(BagActions.removeItemFromBag(item.id));
  };

  return (
    <div className="bag-item-container">
      <div className="item-left-part">
        <img className="bag-item-img" src={item.image} />
      </div>
      <div className="item-right-part">
        <div className="company">{item.company}</div>
        <div className="item-name">{item.item_name}</div>
        <div className="item-description">{item.description}</div>
        <div className="price-container">
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
          <span className="discount-percentage">
            ({item.discount_percentage}% OFF)
          </span>
        </div>
        <div className="return-period">
          <span className="return-period-days">{item.return_period} days</span>{" "}
          return available
        </div>
        <div className="delivery-details">
          Delivery On
          <span className="delivery-details-days"> {getDeliveryDate()} </span>
        </div>
      </div>
      <div className="remove-from-cart" onClick={handleRemoveItem}>
        <IoMdRemoveCircle />
      </div>
    </div>
  );
};

export default BagItem;
