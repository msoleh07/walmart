const { Router } = require("express");
const { DB } = require("../model/productModel");
const { productValidation } = require("../validation/productValidation");

const rt = Router();

// GET
rt.get("/all", async (req, res) => {
  let allProduct = await DB.find();
  if (!allProduct.length) {
    return res.status(404).json({
      success: false,
      msg: "Product are not found",
      innerData: allProduct,
    });
  }
  res
    .status(200)
    .json({ success: true, msg: "Product are  found", innerData: allProduct });
});

// POST || CREATE

rt.post("/create", [productValidation], async (req, res) => {
  let newPro = req.body;
  let create = await DB.create(newPro);
  let saved = await create.save();

  res
    .status(201)
    .json({ success: true, msg: "Product was created", innetData: saved });
});

// PUT

rt.put("/update/:id", async (req, res) => {
  let { id } = req.params;
  let updatedProduct = req.body;
  let updateProduct = await DB.findByIdAndUpdate(id, updatedProduct);
  if (!updateProduct) {
    return res.send({ msg: "Product is not found", innerData: updateProduct });
  }
  res.send({ msg: "Product is updated succesfully", innerData: updateProduct });
});

// PRODUCT delete

rt.delete("/delete/:id", async (req, res) => {
  let { id } = req.params;
  let deletedProduct = await DB.findByIdAndDelete(id);
  if (!deletedProduct) {
    return res.send({ msg: "Product is not found", innerData: deletedProduct });
  }
  res.send({ msg: "Product is deleted", innerData: deletedProduct });
});

// SEARCH

rt.get("/search", async (req, res) => {
  let { productName } = req.query;
  let findProduct = await DB.find();
  let result = findProduct.filter((p) =>
    p.title?.toLocaleLowerCase().includes(productName.toLocaleLowerCase())
  );
  if (!result.length)
    return res
      .status(404)
      .json({ success: false, msg: "Product not found", innerData: null });
  res
    .status(200)
    .json({ success: true, msg: "Product are found", innerData: result });
});

//  single product id

// rt.get("/singleProductId", async (req, res) => {
//   let { productId } = req.query;
//   let id = DB.findOne();
//   let i = id.filter((id) => id._id === productId);
//   console.log(i);
// });

module.exports = { rt };
