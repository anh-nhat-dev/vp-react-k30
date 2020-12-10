import React from "react";
import { useDispatch } from "react-redux";

import {
  getProduct,
  getCommentByProductId,
  createCommentByProductId,
} from "../services/Api";

export default function ProductDetail(props) {
  const [product, setProduct] = React.useState(null);
  const [comments, setComments] = React.useState([]);
  const [input, setInput] = React.useState({
    content: "",
    email: "",
    name: "",
  });
  const [qty, setQty] = React.useState(1);

  const dispatch = useDispatch();

  const id = props?.match?.params?.id;

  React.useEffect(() => {
    getProduct(id).then((res) => {
      if (res.data.data) {
        setProduct(res.data.data);
      }
    });

    getCommentByProductId(id, {
      params: {
        sort: "-_id",
      },
    }).then((res) => {
      if (res?.data?.data?.docs) {
        setComments(res.data.data.docs);
      }
    });
  }, [id]);

  function onSubmitCreateComment(e) {
    e.preventDefault();

    createCommentByProductId(id, input).then((res) => {
      setInput({ ...input, content: "" });
      getCommentByProductId(id, {
        params: {
          sort: "-_id",
        },
      }).then((res) => {
        if (res?.data?.data?.docs) {
          setComments(res.data.data.docs);
        }
      });
    });
  }

  function onChangeInput(e) {
    const { value, name } = e.target;

    setInput({ ...input, [name]: value });
  }

  function onChangeQuantity(e) {
    const value = e.target.value;
    setQty(parseInt(value));
  }

  function onAddToCart(e) {
    e.preventDefault();

    dispatch({
      type: "ADD_TO_CART",
      payload: {
        id: product._id,
        qty: qty,
        name: product.name,
        price: product.price,
        img: product.image,
      },
    });

    setQty(1);
  }

  return (
    <div>
      {/*	List Product	*/}
      <div id="product">
        <div id="product-head" className="row">
          <div id="product-img" className="col-lg-6 col-md-6 col-sm-12">
            <img
              src={`http://vietpro.online/assets/uploads/${product?.image}`}
            />
          </div>
          <div id="product-details" className="col-lg-6 col-md-6 col-sm-12">
            <h1>{product?.name}</h1>
            <ul>
              <li>
                <span>Bảo hành:</span> 12 Tháng
              </li>
              <li>
                <span>Đi kèm:</span> {product?.accessories}
              </li>
              <li>
                <span>Tình trạng:</span> {product?.status}
              </li>
              <li>
                <span>Khuyến Mại:</span> {product?.promotion}
              </li>
              <li id="price">Giá Bán (chưa bao gồm VAT)</li>
              <li id="price-number">
                {new Intl.NumberFormat("vi-VN", {
                  style: "currency",
                  currency: "VND",
                }).format(product?.price)}
              </li>
              <li>
                {product?.is_stock ? (
                  <span className="badge badge-success">Còn hàng</span>
                ) : (
                  <span className="badge badge-danger">Hết hàng</span>
                )}
              </li>
            </ul>
            {product?.is_stock ? (
              <form onSubmit={onAddToCart} className="form-inline row">
                <div className="form-group mx-sm-3 mb-2">
                  <input
                    type="number"
                    min={1}
                    value={qty}
                    className="form-control"
                    onChange={onChangeQuantity}
                  />
                </div>
                <button type="submit" className="btn btn-primary mb-2">
                  Add to cart
                </button>
              </form>
            ) : null}
          </div>
        </div>
        <div id="product-body" className="row">
          <div className="col-lg-12 col-md-12 col-sm-12">
            <h3>Đánh giá về iPhone X 64GB</h3>
            <div dangerouslySetInnerHTML={{ __html: product?.details }}></div>
          </div>
        </div>
        {/*	Comment	*/}
        <div id="comment" className="row">
          <div className="col-lg-12 col-md-12 col-sm-12">
            <h3>Bình luận sản phẩm</h3>
            <form method="post" onSubmit={onSubmitCreateComment}>
              <div className="form-group">
                <label>Tên:</label>
                <input
                  onChange={onChangeInput}
                  name="name"
                  value={input?.name}
                  required
                  type="text"
                  className="form-control"
                />
              </div>
              <div className="form-group">
                <label>Email:</label>
                <input
                  onChange={onChangeInput}
                  name="email"
                  value={input?.email}
                  required
                  type="email"
                  className="form-control"
                  id="pwd"
                />
              </div>
              <div className="form-group">
                <label>Nội dung:</label>
                <textarea
                  onChange={onChangeInput}
                  name="content"
                  value={input?.content}
                  required
                  rows={8}
                  className="form-control"
                  defaultValue={""}
                />
              </div>
              <button type="submit" name="sbm" className="btn btn-primary">
                Gửi
              </button>
            </form>
          </div>
        </div>
        {/*	End Comment	*/}
        {/*	Comments List	*/}
        <div id="comments-list" className="row">
          <div className="col-lg-12 col-md-12 col-sm-12">
            {comments.map((comment) => (
              <div className="comment-item">
                <ul>
                  <li>
                    <b>{comment.name}</b>
                  </li>
                  <li>{comment.createdAt}</li>
                  <li>
                    <p>{comment.content}</p>
                  </li>
                </ul>
              </div>
            ))}
          </div>
        </div>
        {/*	End Comments List	*/}
      </div>
      {/*	End Product	*/}
      <div id="pagination">
        <ul className="pagination">
          <li className="page-item">
            <a className="page-link" href="#">
              Trang trước
            </a>
          </li>
          <li className="page-item active">
            <a className="page-link" href="#">
              1
            </a>
          </li>
          <li className="page-item">
            <a className="page-link" href="#">
              2
            </a>
          </li>
          <li className="page-item">
            <a className="page-link" href="#">
              3
            </a>
          </li>
          <li className="page-item">
            <a className="page-link" href="#">
              Trang sau
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}
