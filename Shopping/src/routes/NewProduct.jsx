import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Form, redirect } from "react-router-dom";
import fetchSlice, { fetchSliceActions } from "../store/fetchSlice";

const NewProduct = () => {
  const id = new Date().getTime();
  const fetchStatus = useSelector((store) => store.fetchStatus);
  const dispatch = useDispatch();

  return (
    <main>
      <Form className="create-post" method="POST">
        <div className="items-container">
          <input
            type="hidden"
            className="form-control"
            name="id"
            value={id}
            readOnly
          />
        </div>

        <div className="items-container">
          <label htmlFor="productId" className="form-label">
            Product Name
          </label>
          <input
            type="text"
            className="form-control"
            id="productId"
            name="item_name"
            placeholder="Product Name"
          />
        </div>
        <div className="items-container">
          <label htmlFor="description" className="form-label">
            Product Description
          </label>
          <textarea
            type="text"
            rows="3"
            name="description"
            className="form-control"
            id="description"
            placeholder="Product Description"
          />
        </div>
        <div className="items-container">
          <label htmlFor="Brand" className="form-label">
            Product Brand
          </label>
          <input
            type="text"
            name="brand"
            className="form-control"
            id="Brand"
            placeholder="Product Brand"
          />
        </div>
        <div className="items-container">
          <label htmlFor="price" className="form-label">
            Original Price
          </label>
          <input
            type="text"
            name="original_price"
            className="form-control"
            id="price"
            placeholder="Product Price with out Discount"
          />
        </div>
        <div className="items-container">
          <label htmlFor="discount" className="form-label">
            Discount %
          </label>
          <input
            type="text"
            name="discount_percentage"
            className="form-control"
            id="discount"
            placeholder="Discount %"
          />
        </div>
        <div className="items-container">
          <label htmlFor="rating" className="form-label">
            Rating
          </label>
          <input
            type="text"
            name="rating"
            className="form-control"
            id="rating"
            placeholder="Star Rating 1 t0 5 including decimals"
          />
        </div>
        <div className="items-container">
          <label htmlFor="delivery_date" className="form-label">
            No of Days to Deliver
          </label>
          <input
            type="text"
            name="delivery_date"
            className="form-control"
            id="delivery_date"
            placeholder="No of Days to deliver"
          />
        </div>
        <div className="items-container">
          <label htmlFor="return_period" className="form-label">
            No of Days to Return With in
          </label>
          <input
            type="text"
            name="return_period"
            className="form-control"
            id="return_period"
            placeholder="Number of days to Return Days"
          />
        </div>
        <div className="items-container">
          <label htmlFor="imageURL" className="form-label">
            Image URL
          </label>
          <input
            type="text"
            name="image"
            className="form-control"
            id="imageURL"
            placeholder="Full Image URL https://xyz.com/abc.png"
          />
        </div>
        <center>
          <button type="submit" className="btn btn-primary">
            Add Products to Catalog
          </button>
        </center>
      </Form>
    </main>
  );
};

export async function NewProductPostAction(data) {
  const formData = await data.request.formData();
  const postData = Object.fromEntries(formData);

  console.log("Action Called after save", postData);
  fetch("http://localhost:8080/products/", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(postData),
  })
    .then((res) => res.json())
    .then((items) => {});
  dispatch(fetchSliceActions.reFetchItems());
  return redirect("/");
}

export default NewProduct;
