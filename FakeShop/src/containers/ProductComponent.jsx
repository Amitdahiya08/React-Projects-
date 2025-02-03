import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router";
import "./ProductComponent.css";

const ProductComponent = () => {
  const products = useSelector((state) => state.allProducts.products);

  return (
    <div className="product-grid">
      {products.map((product) => {
        const { id, title, image, price, category } = product;
        return (
          <div key={id} className="product-card">
            <Link to={`/product/${id}`}>
              <div className="card-image">
                <img src={image} alt={title} />
              </div>
              <div className="card-body">
                <h3 className="card-title">{title}</h3>
                <p className="card-category">{category}</p>
                <p className="card-price">${price}</p>
              </div>
            </Link>
          </div>
        );
      })}
    </div>
  );
};

export default ProductComponent;
