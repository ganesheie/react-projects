import { useSelector } from "react-redux";

const BagSummary = () => {
  const bagItemIds = useSelector((state) => state.Bag);
  const items = useSelector((state) => state.items);
  const finalItems = items.filter((item) => {
    const itemIndex = bagItemIds.indexOf(item.id);
    return itemIndex >= 0;
  });

  const DELIVERY_CHARGE = 10;
  let totalItem = bagItemIds.length;
  let totalMRP = 0;
  let totalDiscount = 0;

  finalItems.forEach((bagItem) => {
    totalMRP += bagItem.original_price;
    let item_currentPrice = Math.round(
      eval(
        bagItem.original_price * ((100 - bagItem.discount_percentage) / 100)
      ),
      2
    );
    totalDiscount += bagItem.original_price - item_currentPrice;
  });

  let finalPayment = totalMRP - totalDiscount + DELIVERY_CHARGE;

  return (
    <div className="bag-summary">
      <div className="bag-details-container">
        <div className="price-header">PRICE DETAILS ({totalItem} Items) </div>
        <div className="price-item">
          <span className="price-item-tag">Total MRP</span>
          <span className="price-item-value">£{totalMRP}</span>
        </div>
        <div className="price-item">
          <span className="price-item-tag">Discount on MRP</span>
          <span className="price-item-value priceDetail-base-discount">
            -£{totalDiscount}
          </span>
        </div>
        <div className="price-item">
          <span className="price-item-tag">Delivery Fee</span>
          <span className="price-item-value">£ {DELIVERY_CHARGE} </span>
        </div>
        <hr />
        <div className="price-footer">
          <span className="price-item-tag">Total Amount</span>
          <span className="price-item-value">£{finalPayment}</span>
        </div>
      </div>
      <button className="btn-place-order">
        <div className="css-xjhrni">PLACE ORDER</div>
      </button>
    </div>
  );
};

export default BagSummary;
