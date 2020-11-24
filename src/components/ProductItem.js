import React from "react";
import { Link } from "react-router-dom";
import slug from "slug";

export default function ProductItem({ product }) {
  const urlSlug = slug(product.name, { lower: true });
  return (
    <div className="product-item card text-center">
      <Link to={`/p-${urlSlug}.${product._id}`}>
        <img src={`http://vietpro.online/assets/uploads/${product.image}`} />
      </Link>
      <h4>
        <Link to={`/p-${urlSlug}.${product._id}`}>{product.name}</Link>
      </h4>
      <p>
        Giá Bán:
        <span>
          {new Intl.NumberFormat("vi-VN", {
            style: "currency",
            currency: "VND",
          }).format(product.price)}
        </span>
      </p>
    </div>
  );
}
