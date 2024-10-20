"use client";

import { useState, useEffect, useContext } from "react";
import {
  Typography,
  Container,
  Grid,
  Button,
  TextField,
  IconButton,
  Box,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import { useRouter } from "next/navigation";
import ShoppingCartContext from "../contextCart";
import Image from "next/image";
import "../globals.css";

const ShoppingCart = () => {
  const router = useRouter();
  const { cartItems, setCartItems } = useContext(ShoppingCartContext);

  const updateQuantity = (id, newQuantity) => {
    setCartItems(
      cartItems.map((item) =>
        item.id === id ? { ...item, quantity: Math.max(1, newQuantity) } : item
      )
    );
  };

  const removeItem = (id) => {
    setCartItems(cartItems.filter((item) => item.id !== id));
  };

  const total = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  ).toFixed(2);
  // console.log("Cart Items:", cartItems);

  return (
    <>
      <Container
        maxWidth="md"
        className="relatiive my-8 mt-[15vh] min-h-[75vh] "
      >
        <Typography variant="h4" component="h1" gutterBottom>
          購物車
        </Typography>
        {cartItems.length === 0 ? (
          <Typography>您的購物車是空的。</Typography>
        ) : (
          <>
            <Grid container spacing={2} className="mb-4">
              {cartItems.map((item, index) => {
                return (
                  <Grid
                    item
                    xs={12}
                    key={index}
                    className="flex items-center justify-between border-b py-2 rounded shadow-md hover:shadow-2xl hover:bg-gray-200"
                  >
                    <Box
                      display="flex"
                      className="min-w-[200px]"
                      flexDirection={{ xs: "column", md: "row" }}
                      gap={1}
                    >
                      <Box flex={1}>
                        <Image
                          src={item.cover_image || "/images/nothisbook.png"}
                          alt={item.title}
                          width={500}
                          height={300}
                          className="w-full h-auto hover:scale-110 mb-5"
                          priority
                        />
                      </Box>
                      <Box
                        flex={1}
                        className="flex align-middle flex-col text-center"
                      >
                        <Typography variant="h6">{item.title}</Typography>
                        <Typography variant="body2">
                          單價：${item.price}
                        </Typography>
                      </Box>
                    </Box>
                    <div className="flex items-center gap-1">
                      <TextField
                        type="number"
                        value={item.quantity}
                        onChange={(e) =>
                          updateQuantity(item.id, parseInt(e.target.value))
                        }
                        inputProps={{ min: 1 }}
                        className="w-16"
                      />
                      <IconButton onClick={() => removeItem(item.id)}>
                        <DeleteIcon />
                      </IconButton>
                    </div>
                  </Grid>
                );
              })}
            </Grid>
            <Typography variant="h5" className="text-right mb-4">
              總計：${total}
            </Typography>
            <div className="flex justify-end">
              <Button
                variant="contained"
                color="primary"
                onClick={() => {
                  router.push("./checkout");
                }}
              >
                結帳
              </Button>
            </div>
          </>
        )}
      </Container>
    </>
  );
};

export default ShoppingCart;
