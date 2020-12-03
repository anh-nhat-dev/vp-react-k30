import React from "react";
import queryString from "query-string";

// local
import ProductList from "../components/ProductList";
import Pagination from "../components/Pagination";
import { getProducts } from "../services/Api";

export default function Search(props) {
  const [products, setProducts] = React.useState([]);
  const [pages, setPages] = React.useState({
    limit: 12,
    totalDocument: 0,
  });

  const search = queryString.parse(props.location.search);
  const key = search.key;
  const page = search.page;

  React.useEffect(() => {
    getProducts({
      params: {
        name: key,
        page: page,
        limit: pages.limit,
      },
    }).then((res) => {
      if (res?.data?.data?.docs) {
        setProducts(res.data.data.docs);
      }
      if (res?.data?.data?.pages) {
        setPages({ ...pages, totalDocument: res.data.data.pages.total });
      }
    });
  }, [key, page]);

  return (
    <div>
      <div className="products">
        {key ? (
          <div id="search-result">
            Kết quả tìm kiếm với từ khóa <span>{key}</span>
          </div>
        ) : null}

        <ProductList data={products} />
      </div>
      {/*	End List Product	*/}
      <div id="pagination">
        <Pagination {...pages} />
      </div>
    </div>
  );
}
