import React, { useEffect } from "react";
import { ItemsActions } from "../store/ItemSlice";
import { useDispatch, useSelector } from "react-redux";
import { fetchSliceActions } from "../store/fetchSlice";

const FetchItems = () => {
  const fetchStatus = useSelector((store) => store.fetchStatus);

  const dispatch = useDispatch();
  useEffect(() => {
    if (fetchStatus.fetchDone) return;
    const controller = new AbortController();
    const signal = controller.signal;
    dispatch(fetchSliceActions.markFetchStarted());
    fetch("http://localhost:8080/products", { signal })
      .then((res) => res.json())
      .then(({ items }) => {
        dispatch(ItemsActions.addInitialItems(items));
        dispatch(fetchSliceActions.markFetchDone());
        dispatch(fetchSliceActions.markFetchFinished());
      });
    return () => {
      controller.abort();
    };
  }, [fetchStatus]);
  return (
    <>
      {""} {""}{" "}
    </>
  );
};

export default FetchItems;
