import React, { useState, useEffect } from "react";
import { Product } from "./type";
import { AiFillHeart } from "react-icons/ai";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Item: React.FC<Product> = (item) => {
  const navigate = useNavigate();
  const [isTokenAvailable, setIsTokenAvailable] = useState(false);
  const [liked, setLiked] = useState(item.liked);
  const token = localStorage.getItem("accesstoken");

  useEffect(() => {
    if (token) {
      setIsTokenAvailable(true);
    } else {
      setIsTokenAvailable(false);
    }
  }, [token]);

  const toggleLike = async () => {
    if (!isTokenAvailable) {
      navigate("/login");
    } else {
      alert("관심상품 추가");
      try {
        const headers = {
          Authorization: `Bearer ${token}`,
        };
        const response = await axios.post(
          `https://pet-commerce.shop/v1/api/product/wish/${item.id}`,
          { headers }
        );
        setLiked(true);
      } catch (error) {
        console.error("위시리스트 추가 오류:", error);
        alert("오류가 발생했습니다.");
      }
    }
  };

  const navigateToDetail = () => {
    navigate(`/product/${item.id}`);
  };

  return (
    <li>
      <img onClick={navigateToDetail} src={item.imageUrl} alt="" />
      <div className="item-meta">
        <div className="title">{item.productName}</div>
        <div className="division"></div>
        <div className="meta">
          <div className="like">
            {liked ? (
              <AiFillHeart className="full-heart" />
            ) : (
              <AiFillHeart className="heart" onClick={toggleLike} />
            )}
          </div>
          <span>{item.price}원</span>
        </div>
      </div>
    </li>
  );
};

export default Item;
