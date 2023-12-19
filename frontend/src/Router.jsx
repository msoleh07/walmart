import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./routes/home/Home";
import SinglePage from "./routes/singlePage/SinglePage";
import Header from "./components/header/Header";
import Cart from "./routes/cart/Cart";
import AllProduct from "./routes/allProduct/AllProduct";
import CreateData from "./routes/createData/CreateData";

function Router() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/cart" element={<Cart />}></Route>
        <Route path="/single/:id" element={<SinglePage />} />
        <Route path="/allproduct" element={<AllProduct />} />
        <Route path="/create" element={<CreateData />} />
      </Routes>
    </div>
  );
}

export default Router;
