import React, { useEffect, useState } from "react";
import "./AllProduct.css";
import { GoTrash } from "react-icons/go";
import { CiEdit } from "react-icons/ci";
import axios from "axios";

const AllProduct = () => {
  let API = "http://localhost:8080/delete";
  const [productAllData, setProductAllData] = useState(null);
  const [productId, setProductId] = useState("");
  let con = window.confirm("ochirishga rozimisiz");
  useEffect(() => {
    axios
      .get("http://localhost:8080/all")
      .then((res) => setProductAllData(res.data.innerData))
      .catch((err) => console.log(err));
  }, []);

  const deleteProduct = (id) => {
    if (con) {
      axios
        .delete(API + "/" + id)
        .then((res) => console.log(res))
        .catch((err) => console.log(err));
      window.location.reload();
    }
  };

  return (
    <div className="product_page">
      <div className="product_container">
        <div className="product_header">
          <h2>All product</h2>
        </div>
        <div className="produc_item_container">
          {productAllData?.map((item, index) => (
            <div key={index} className="product_card">
              <div className="product_img">
                <img src={item.images[0]} alt="" />
              </div>
              <div className="product_items_container">
                <h2>
                  {item.title.slice(0, 15) + " ..."}{" "}
                  <span>{item.category}</span>
                </h2>
                <p>{item.price}</p>
                <span>{item.brand}</span>
                <div className="product_btns">
                  <button onClick={() => deleteProduct(item._id)}>
                    <GoTrash />
                  </button>
                  <button>
                    <CiEdit />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AllProduct;
