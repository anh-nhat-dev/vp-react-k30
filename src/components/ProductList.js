import React from "react";
import ProductItem from "./ProductItem";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";

const ProductItemSkeleton = () => (
  <div className="product-item card text-center">
    <Skeleton height={250} width="90%" />
    <Skeleton style={{ marginTop: 15 }} height={10} width="90%" />
    <Skeleton height={10} width="90%" />
  </div>
);

export default function ProductList({ data = [], loading = true, litmit = 6 }) {
  return (
    <div className="product-list card-deck">
      {loading
        ? Array(litmit)
            .fill(1)
            .map((i, index) => <ProductItemSkeleton key={index} />)
        : data.map((item) => <ProductItem key={item._id} product={item} />)}
    </div>
  );
}
