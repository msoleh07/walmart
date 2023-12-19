import React from "react";
import "./SinglePage.css";
import { LiaSearchPlusSolid } from "react-icons/lia";
import { GoHeart } from "react-icons/go";
import { Link, useParams } from "react-router-dom";
import { products } from "../../static/products";

const SinglePage = () => {
  //   const { id } = useParams();
  //   console.log(id);

  return (
    <div className="single_pages container">
      <div className="single_path_container"></div>
      <div className="single_container">
        <div className="single_left_img">
          <div className="single_all_img_container ">
            <div className="img_scroll_bar">
              <div className="single_all_img">
                <img
                  src="https://d19h8kn98xvxar.cloudfront.net/images/_hero/connectwithnature.jpg"
                  alt=""
                />
              </div>
            </div>
          </div>
          <div className="single_center_img_container">
            <div className="single_center_img">
              <img
                src="https://d19h8kn98xvxar.cloudfront.net/images/_hero/connectwithnature.jpg"
                alt=""
              />
            </div>
            <div className="single_center_img_icon_container">
              <button>
                <GoHeart />
              </button>
              <button>
                <LiaSearchPlusSolid />
              </button>
            </div>
          </div>
        </div>
        <div className="single_right_all_title">
          <div className="single_right_all_title_header">
            <span>100+ bought since yesterday</span>
          </div>
          <div className="single_right_title_container">
            <div className="single_title_border">
              <span>Best seller</span>
              <span>Popular pick</span>
              <label>for "paw patrol plush"</label>
            </div>
            <Link>PAW Patrol The Mighty Movie</Link>
            <h2>
              PAW Patrol: The Mighty Movie, Skye 12-inch Tall Premium Plush Toy
              for Kids 3+
            </h2>
            <b>$14.97</b>
            <span>Price when purchased online</span>
            <button>Add to cart</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SinglePage;
