import { useEffect, useState } from "react";
import instance from "../../../api/axios";
import { WishListData } from "../type";

export const GetMainList = () => {
  const [wishList, setWishList] = useState<WishListData[]>([]);
  const [pay, setPay] = useState();

  useEffect(() => {
    instance.get('/product/wish')
      .then((res) => {
        setWishList(res.data);
      })
      .catch(err => console.error(err));
  }, []);

  useEffect(() => {
    instance.get('/payment?page=0&size=3')
      .then((res) => {
        setPay(res.data);
        console.log(res);
      })
      .catch(err => console.error(err));
  }, []);

  return { wishList, pay };
};

export const GetWishList = () => {
  const [wishList, setWishList] = useState<WishListData[]>([]);

  useEffect(() => {
    instance.get('/product/wish')
      .then((res) => {
        setWishList(res.data);
      })
      .catch(err => console.error(err));
  }, []);

  return wishList;
};

export const GetOrderList = () => {
  const [order, setOrder] = useState([]);

  useEffect(() => {
    instance.get('/order/list')
      .then((res) => {
        setOrder(res.data);
      })
      .catch(err => console.error(err))
  }, []);

  return order;
};