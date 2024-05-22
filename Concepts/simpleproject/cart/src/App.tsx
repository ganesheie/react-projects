import { useState } from "react";

const App = () => {
  const products = [
    {
      name: "iphone 14",
      price: 1000.0,
      quantity: 100,
    },
    {
      name: "samsung s24",
      price: 999.0,
      quantity: 100,
    },
    {
      name: "samsung s23",
      price: 100.0,
      quantity: 10,
    },
  ];
  const productCountStateObj = {};
  products.forEach((product) => {
    productCountStateObj[product.name] = 0;
  });
  productCountStateObj["totalprice"] = 0.0;

  const [baggedProductCount, setbaggedProductCount] =
    useState(productCountStateObj);

  const addtoBag = (item) => {
    let newStateObjeect = { ...baggedProductCount };
    let productName = item.name;
    let quantity = item.quantity;
    let price = item.price;

    if (quantity > newStateObjeect[productName]) {
      newStateObjeect[productName] += 1;
      newStateObjeect["totalprice"] += price;
      setbaggedProductCount(newStateObjeect);
    }
  };
  const removeFromBag = (item) => {
    let newStateObjeect = { ...baggedProductCount };
    let productName = item.name;
    let quantity = item.quantity;
    let price = item.price;

    if (newStateObjeect[productName] > 0) {
      newStateObjeect[productName] -= 1;
      newStateObjeect["totalprice"] -= price;
      setbaggedProductCount(newStateObjeect);
    }
  };

  return (
    <table>
      <thead>
        <tr>
          <td> Item Name </td>
          <td> Item Quantity </td>
          <td> Add </td>
          <td> Remove </td>
          <td> Bagged quanity </td>
        </tr>
      </thead>
      <tbody>
        {products.map((item, index) => (
          <tr key={`Product-${index}`}>
            <td> {item.name} </td>
            <td> {item.quantity}</td>
            <td>
              <button
                onClick={() => {
                  addtoBag(item);
                }}
              >
                +
              </button>
            </td>
            <td>
              <button
                onClick={() => {
                  removeFromBag(item);
                }}
              >
                {" "}
                -{" "}
              </button>
            </td>
            <td> {baggedProductCount[item.name]} </td>
          </tr>
        ))}
        <tr>
          <td colSpan={4}> Total Price </td>
          <td> {baggedProductCount["totalprice"]} </td>
        </tr>
      </tbody>
    </table>
  );
};

export default App;
