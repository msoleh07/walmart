import React, { useState } from "react";
import "./Header.css";
import logo from "../img/Emblem-Walmart.jpg";
import { CiGrid41 } from "react-icons/ci";
import {
  HiOutlineViewGrid,
  HiViewGrid,
  HiOutlineViewGridAdd,
} from "react-icons/hi";
import { CiHeart } from "react-icons/ci";
import { FaRegUser, FaCartArrowDown } from "react-icons/fa";
import { IoIosSearch } from "react-icons/io";
import { Link } from "react-router-dom";
import { products } from "../../static/products";
import { departmentData } from "../../static/Departments";
import { useSelector } from "react-redux";
import axios from "axios";

function Header() {
  let store = useSelector((s) => s.AddToCart);
  let cartLength = store.reduce((a, b) => a + b.quantity, 0);
  const [openSidebar, setOpenSidebar] = useState(false);
  const [openServ, setOpenServ] = useState(false);
  const [searchResult, setSearchResult] = useState(null);

  let totalPrice = Math.ceil(
    store.reduce((a, b) => a + b.price * b.quantity, 0)
  );

  function search(value) {
    if (!value) return setSearchResult(null);

    axios
      .get(`http://localhost:8080/search?productName=${value}`)
      .then((res) => {
        if (res.data.success) {
          setSearchResult(res.data.innerData);
        } else {
          alert(res.data.msg);
        }
      })
      .catch((err) => console.log(err));
  }

  return (
    <header>
      <div className="header_top">
        <div className="logo">
          <Link to={"/"}>
            <img src={logo} alt="walmart" />
          </Link>
        </div>

        <button className="dep" onClick={() => setOpenSidebar(!openSidebar)}>
          {openSidebar ? <CiGrid41 /> : <HiViewGrid />}
          <h3>Departments</h3>
        </button>

        {openSidebar && (
          <div className="dep_wrapper">
            {departmentData.map((depItem, index) => (
              <div key={index} className="dep_item">
                <p>{depItem.title.titleName}</p>
                <div className="dep_item_section">
                  <div className="dep_item_section_links">
                    {depItem.collection.map((item, index) => (
                      <div key={index}>
                        <h4>{item.collectionName}</h4>
                        <ul>
                          {item.collectionLinks.map((link_item, index) => (
                            <li key={index}>
                              <Link to={"/"}>{link_item}</Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        <button className="servis" onClick={() => setOpenServ(!openServ)}>
          {openServ ? <HiOutlineViewGrid /> : <HiOutlineViewGridAdd />}
          <h3>Services</h3>
        </button>

        <div className="inp">
          <input
            type="text"
            placeholder="Search everything at Walmart online and in store"
            onChange={(e) => search(e.target.value)}
          />
          <IoIosSearch />
        </div>
        <div
          className="searchResult"
          style={{ display: searchResult?.length ? "flex" : "none" }}
        >
          {searchResult?.map((item, index) => (
            <Link
              to={`/single/${item._id}`}
              className="searchResult_a"
              key={index}
            >
              {item.title}
            </Link>
          ))}
        </div>

        <div className="header_links">
          <div className="heart">
            <CiHeart />
            <div className="sp">
              <span>Reacorder</span>
              <b>My Items</b>
            </div>
          </div>

          <Link to={"/register"} className="sign">
            <FaRegUser />
            <div className="sp">
              <span>Sign In</span>
              <b>Account</b>
            </div>
          </Link>

          <Link to={"/cart"} className="cart">
            <span className="length">{cartLength}</span>
            <FaCartArrowDown />
            <span>${totalPrice}</span>
          </Link>
        </div>
      </div>

      <div className="div"></div>
      <div className="header_bottom">
        <div className="head">
          <select>
            <option value="eng">Eng</option>
            <option value="ru">Ru</option>
            <option value="uz">Uz</option>
          </select>
          <div className="hr"></div>
        </div>

        <div className="header_bottom_links">
          <Link>Cyber Deals</Link>
          <Link>Grocery & Essentials</Link>
          <Link>Christmas Shop</Link>
          <Link>Gift Finder</Link>
          <Link>Electronics</Link>
          <Link>Toy Shop</Link>
          <Link>Home</Link>
          <Link>Fashion</Link>
          <Link>Auto</Link>
        </div>
      </div>
    </header>
  );
}

export default Header;
