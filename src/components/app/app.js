import React from "react";
import "./app.css";
import { Route, Routes } from "react-router-dom";
import { BookPage, CartPage, HomePage, NotFoundPage } from "../pages";
import ShopHeader from "../shop-header";

const App = () => {
  return (
    <main role="main" className="container">
      <ShopHeader numItems={5} total={210} />

      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/cart" element={<CartPage />}></Route>
        <Route path='/books/:bookId' element={<BookPage />}></Route>
        <Route path="*" element={<NotFoundPage />}></Route>
      </Routes>
    </main>
  );
};

export default App;
