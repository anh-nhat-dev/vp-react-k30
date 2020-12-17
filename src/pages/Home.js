import React from "react";
import { useSelector, useDispatch } from "react-redux";

// Components
import ProductList from "../components/ProductList";
import { getProducts } from "../services/Api";

export default function Home() {
  const [newProducts, setNewProducts] = React.useState([]);
  const [featureProducts, setFeatureProducts] = React.useState([]);
  const [loading, setLoading] = React.useReducer((o, n) => ({ ...o, ...n }), {
    loadNewProd: false,
    loadFeaturePrd: false,
  });

  React.useEffect(() => {
    setLoading({
      loadNewProd: true,
      loadFeaturePrd: true,
    });
    getProducts({
      params: {
        limit: 6,
      },
    }).then(function (res) {
      if (res.data?.data?.docs) {
        setNewProducts(res.data.data.docs);
        setLoading({
          loadFeaturePrd: false,
        });
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
        setLoading({
          loadNewProd: false,
        });
      }
    });
  }, []);

  return (
    <>
      <div className="products">
        <h3>Sản phẩm nổi bật</h3>
        <ProductList loading={loading.loadNewProd} data={featureProducts} />
      </div>
      <div className="products">
        <h3>Sản phẩm mới</h3>
        <ProductList loading={loading.loadNewProd} data={newProducts} />
      </div>
    </>
  );
}
