import React from "react";
import queryString from "query-string";
import { Helmet } from "react-helmet";

import Pagination from "../components/Pagination";
import { getCategory, getProducts } from "../services/Api";
import ProductList from "../components/ProductList";

export default function Category({ match, history, location }) {
  const [category, setCategory] = React.useState();
  const [products, setProducts] = React.useState([]);
  const [pages, setPages] = React.useReducer((o, n) => ({ ...o, ...n }), {
    limit: 12,
    totalDocument: 0,
    loading: false,
  });

  const search = queryString.parse(location.search);

  const { page } = search;
  const { id } = match?.params;

  const _getProducts = () => {
    setPages({ loading: true });
    getProducts({
      params: {
        "filter[category_id]": id,
        limit: pages.limit,
        page: page,
      },
    }).then((res) => {
      if (res?.data?.data?.docs) {
        setProducts(res.data.data.docs);
      }
      if (res?.data?.data?.pages) {
        setPages({ loading: false, totalDocument: res.data.data.pages.total });
      }
    });
  };

  React.useEffect(() => {
    getCategory(id)
      .then((res) => {
        if (res?.data?.data) {
          setCategory(res.data.data);
        }
      })
      .catch((err) => history.push("/404"));
    _getProducts();
  }, [id]);

  React.useEffect(() => {
    _getProducts();
  }, [page]);

  return (
    <div>
      <Helmet>
        <title>{category?.name}</title>
      </Helmet>
      <div className="products">
        <h3>
          {category?.name} (hiện có {pages.totalDocument} sản phẩm)
        </h3>

        <ProductList
          limit={pages.limit}
          loading={pages.loading}
          data={products}
        />
      </div>
      {/*	End List Product	*/}
      <div id="pagination">
        <ul className="pagination">
          <Pagination {...pages} />
        </ul>
      </div>
    </div>
  );
}
