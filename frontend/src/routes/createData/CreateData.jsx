import axios from "axios";
import "react-toastify/dist/ReactToastify.css";
import "./CreateData.css";
import { useState } from "react";

function CreateData() {
  let Api = "http://localhost:8080/create";
  const [images, setImages] = useState("");
  const [details, setDetails] = useState("");
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [brand, setBrand] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");
  let imgItem = images.split(" ");
  let detailsItem = details.split("\n");
  console.log(detailsItem);

  let sendData = (e) => {
    e.preventDefault();
    let data = {
      images: imgItem,
      details: detailsItem,
      title: title,
      price: +price,
      brand: brand,
      category: category,
      description: description,
    };
    axios
      .post(Api, data)
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  };

  return (
    <div className="CreateData">
      <h1 className="text-center">Create Data</h1>
      <form className="FormData" onSubmit={sendData}>
        <div className="inputs">
          <input
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Title"
            required
            type="text"
          />
          <input
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            placeholder="Price"
            required
            type="number"
          />
          <input
            value={brand}
            onChange={(e) => setBrand(e.target.value)}
            placeholder="Brand"
            required
            type="text"
          />
          <input
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Description"
            type="text"
          />
          <textarea
            name="details"
            value={details}
            onChange={(e) => setDetails(e.target.value)}
            placeholder="Details"
            cols="40"
            rows="2"
          ></textarea>
          <input
            value={images}
            onChange={(e) => setImages(e.target.value)}
            placeholder="Images"
            name="images"
            type="text"
          />
          <select onChange={(e) => setCategory(e.target.value)}>
            <option value="fashion">Fashion</option>
            <option value="tires">Tires</option>
          </select>
        </div>

        <div className="text-center">
          <button className="submit">Create</button>
        </div>
      </form>
    </div>
  );
}

export default CreateData;
