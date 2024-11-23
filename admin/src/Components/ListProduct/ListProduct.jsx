import React from 'react'
import './ListProduct.css'
import { useEffect, useState } from "react";
import cross_icon from "../../assets/cross_icon.png"
const ListProduct = () => {

  const [allproducts, setAllProducts] = useState([]);

  const fetchInfo = () => {
    fetch('http://localhost:4000/allproducts')
      .then((res) => res.json())
      .then((data) => setAllProducts(data))
  }

  useEffect(() => {
    fetchInfo();
  }, [])
  const removeProduct = async (id) => {
    await fetch(`http://localhost:4000/removeproducts`, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ id: id }),
    })

    fetchInfo();
  }

  return (
    <div>
      <h1>All Product List</h1>
      <div className="listproduct-format-main">
        <p>Products</p> <p>Title</p> <p>Old Price</p> <p>New Price</p> <p>Category</p> <p>Remove</p>
      </div>
      <div className="listproduct-allproducts">
      <hr />
      {allproducts.map((product, index) => (
          <div key={index}>
            <div className="listproduct-format-main listproduct-format">
              <img className="listproduct-product-icon" src={product.image} alt="" />
              <p className="cartitems-product-title">{product.name}</p>
              <p>${product.old_price}</p>
              <p>${product.new_price}</p>
              <p>{product.category}</p>
              <img className="listproduct-remove-icon" onClick={() => { removeProduct(product.id) }} src={cross_icon} alt="" />
            </div>
            <hr />
          </div>
        ))}
      </div>
    </div>
  )
}

export default ListProduct;
