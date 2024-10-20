

import { useState, useEffect, useContext } from "react";
import { useRouter } from "next/navigation";
import {
  Typography,
  Container,
  Box,
  Button,
  TextField,
  Snackbar,
} from "@mui/material";
import axios from "axios";
import Link from "next/link";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import FavouriteContext from "../../contextFavourite";
import ShoppingCartContext from "../../contextCart";

export async function generateStaticParams() {
    const response = await fetch('https://kenleyli666.github.io/booksApi/books.json');
    const data = await response.json();
    
    return data.books.map(book => ({
        bookId: book.id.toString(),
    }));
}

export default function BookDetail({ params }) {
  const router = useRouter();
  const { cartItems, setCartItems } = useContext(ShoppingCartContext);
  const { favouriteItems, setFavouriteItems } = useContext(FavouriteContext);
  const [book, setBook] = useState(null);
  const [amount, setAmount] = useState(1);
  const [snackbarOpen, setSnackbarOpen] = useState(false);

  useEffect(() => {
    const fetchBook = async () => {
      if (!params.bookId) return;
      try {
        const response = await axios.get(
          "https://kenleyli666.github.io/booksApi/books.json"
        );
        const books = response.data.books;
        const foundBook = books.find(
          (b) => parseInt(b.id) === parseInt(params.bookId, 10)
        );
        if (!foundBook) {
          return setBook(null);
        }
        setBook(foundBook);
      } catch (error) {
        console.error("Error fetching book details:", error);
        alert("无法获取书籍信息，请稍后再试。");
        setBook(null);
      }
    };

    fetchBook();
  }, [params.bookId]);

  const handleSnackbarClose = () => {
    setSnackbarOpen(false);
  };

  const addToCart = () => {
    setSnackbarOpen(true);

    const existingItem = cartItems.find((item) => item.id === params.bookId);
    if (existingItem) {
      setCartItems(
        cartItems.map((item) =>
          item.id === params.bookId
            ? { ...item, quantity: item.quantity + amount }
            : item
        )
      );
    } else {
      setCartItems([
        ...cartItems,
        {
          id: params.bookId,
          cover_image: book.cover_image,
          title: book.title,
          price: book.price,
          quantity: amount,
        },
      ]);
    }
  };

  if (!book)
    return (
      <div className="text-2xl">
        書籍未找到。
        <Link href="/books" className="underline text-blue-600">
          <ArrowBackIcon>返回</ArrowBackIcon>
        </Link>
      </div>
    );

  return (
    <>
      <Container
        maxWidth="md"
        className="mt-[20vh] min-h-[75vh]"
        style={{ marginTop: '20vh', minHeight: '75vh' }}
      >
        <Box display="flex" flexDirection={{ xs: "column", md: "row" }} gap={4}>
          <Box flex={1}>
            <img
              src={book.cover_image}
              alt={book.title}
              style={{
                width: "100%",
                height: "60vh",
                borderRadius: "8px",
                boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
              }}
              className="hover:scale-110"
            />
          </Box>
          <Box flex={1}>
            <Typography variant="h4" component="h1" gutterBottom>
              {book.title}
            </Typography>
            <Typography variant="h6" gutterBottom>
              作者：{book.author}
            </Typography>
            <Typography variant="body1" component="p">
              {book.description}
            </Typography>
            <Typography variant="h6" gutterBottom>
              價格：${book.price}
            </Typography>
            <Box display="flex" alignItems="center" gap={2} my={4}>
              <TextField
                type="number"
                label="數量"
                value={amount}
                onChange={(e) => setAmount(Math.max(1, parseInt(e.target.value)))}
                inputProps={{ min: 1 }}
              />
              <Button
                variant="contained"
                color="primary"
                onClick={addToCart}
              >
                加入購物車
              </Button>
            </Box>
          </Box>
        </Box>
        <Snackbar
          open={snackbarOpen}
          autoHideDuration={3000}
          onClose={handleSnackbarClose}
          message={`${amount} 本 ${book.title} 書已加入購物車`}
        />
      </Container>
    </>
  );
}
