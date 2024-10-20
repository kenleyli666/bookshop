"use client";

import { useState, useContext } from "react";
import { Container, Typography } from "@mui/material";
import ShoppingCartContext from "../../contextCart";

export default function BookDetailClient({ book }) {
  const { setCartItems } = useContext(ShoppingCartContext);
  const [amount, setAmount] = useState(1);

  if (!book) {
    return <div>書籍未找到。</div>;
  }

  const addToCart = () => {
    // 处理添加到购物车的逻辑
  };

  return (
    <Container>
      <Typography variant="h4">{book.title}</Typography>
      <Typography variant="h6">作者：{book.author}</Typography>
      <Typography>{book.description}</Typography>
      <Typography>價格：${book.price}</Typography>
      {/* 数量选择和添加到购物车按钮 */}
    </Container>
  );
}
