import React from "react";
import { getProducts } from "../services/Api";

// Components
import ProductList from "../components/ProductList";

export default function Home() {
  const [newProducts, setNewProducts] = React.useState([]);
  const [featureProducts, setFeatureProducts] = React.useState([]);

  React.useEffect(() => {
    getProducts({
      params: {
        limit: 6,
      },
    }).then(function (res) {
      if (res.data?.data?.docs) {
        setNewProducts(res.data.data.docs);
      }
    });

    getProducts({
      params: {
        limit: 6,
        "filter[is_featured]": true,
      },
    }).then(function (res) {
      if (res.data?.data?.docs) {
        setFeatureProducts(res.data.data.docs);
      }
    });
  }, []);

  return (
    <>
      <div className="products">
        <h3>Sản phẩm nổi bật</h3>
        <ProductList data={featureProducts} />
      </div>
      <div className="products">
        <h3>Sản phẩm mới</h3>
        <ProductList data={newProducts} />
      </div>
    </>
  );
}
