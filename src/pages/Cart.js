import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { order } from "../services/Api";

export default function Cart() {
  const dispatch = useDispatch();

  const [customer, setCusomter] = React.useReducer(
    (newState, oldState) => ({
      ...oldState,
      ...newState,
    }),
    {}
  );

  const cart = useSelector((state) => state.cart.items);

  const totalprice = cart.reduce((a, c) => a + c.qty * c.price, 0);

  // event handel
  const onDeleteItem = (e, id) => {
    e.preventDefault();

    // eslint-disable-next-line no-restricted-globals
    const isDelete = confirm(`Ban muon xoa san pham nay`);
    if (isDelete) {
      dispatch({
        type: "DELETE_CART_ITEM",
        payload: id,
      });
    }
  };

  const onChangeInput = (e, id) => {
    let value = parseInt(e.target.value);
    if (isNaN(value)) {
      value = 1;
    }

    dispatch({
      type: "UPDATE_CART_ITEM",
      payload: {
        id: id,
        qty: value,
      },
    });
  };

  const onChangeInputCusomer = (e) => {
    const { value, name } = e.target;
    setCusomter({ [name]: value });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    order(customer).then((res) => {
      console.log("🚀 ~ file: Cart.js ~ line 57 ~ order ~ res", res);
    });
  };

  return (
    <div>
      <div id="my-cart">
        <div className="row">
          <div className="cart-nav-item col-lg-7 col-md-7 col-sm-12">
            Thông tin sản phẩm
          </div>
          <div className="cart-nav-item col-lg-2 col-md-2 col-sm-12">
            Tùy chọn
          </div>
          <div className="cart-nav-item col-lg-3 col-md-3 col-sm-12">Giá</div>
        </div>
        <form method="post">
          {cart.map((item) => (
            <div key={item.id} className="cart-item row">
              <div className="cart-thumb col-lg-7 col-md-7 col-sm-12">
                <img src={`http://vietpro.online/assets/uploads/${item.img}`} />
                <h4>{item.name}</h4>
              </div>
              <div className="cart-quantity col-lg-2 col-md-2 col-sm-12">
                <input
                  type="number"
                  id="quantity"
                  className="form-control form-blue quantity"
                  value={item.qty}
                  onChange={(e) => onChangeInput(e, item.id)}
                  min={1}
                />
              </div>
              <div className="cart-price col-lg-3 col-md-3 col-sm-12">
                <b>
                  {new Intl.NumberFormat("vi-VN", {
                    style: "currency",
                    currency: "VND",
                  }).format(item.price)}
                </b>
                <a href="#" onClick={(e) => onDeleteItem(e, item.id)}>
                  Xóa
                </a>
              </div>
            </div>
          ))}

          <div className="row">
            <div className="cart-thumb col-lg-7 col-md-7 col-sm-12"></div>
            <div className="cart-total col-lg-2 col-md-2 col-sm-12">
              <b>Tổng cộng:</b>
            </div>
            <div className="cart-price col-lg-3 col-md-3 col-sm-12">
              <b>
                {new Intl.NumberFormat("vi-VN", {
                  style: "currency",
                  currency: "VND",
                }).format(totalprice)}
              </b>
            </div>
          </div>
        </form>
      </div>
      {/*	End Cart	*/}
      {/*	Customer Info	*/}
      {(cart.length && (
        <div id="customer">
          <form method="post" onSubmit={onSubmit}>
            <div className="row">
              <div id="customer-name" className="col-lg-4 col-md-4 col-sm-12">
                <input
                  placeholder="Họ và tên (bắt buộc)"
                  type="text"
                  name="name"
                  onChange={onChangeInputCusomer}
                  className="form-control"
                  required
                />
              </div>
              <div id="customer-phone" className="col-lg-4 col-md-4 col-sm-12">
                <input
                  placeholder="Số điện thoại (bắt buộc)"
                  type="text"
                  name="phone"
                  onChange={onChangeInputCusomer}
                  className="form-control"
                  required
                />
              </div>
              <div id="customer-mail" className="col-lg-4 col-md-4 col-sm-12">
                <input
                  placeholder="Email (bắt buộc)"
                  type="text"
                  name="email"
                  onChange={onChangeInputCusomer}
                  className="form-control"
                  required
                />
              </div>
              <div id="customer-add" className="col-lg-12 col-md-12 col-sm-12">
                <input
                  placeholder="Địa chỉ nhà riêng hoặc cơ quan (bắt buộc)"
                  type="text"
                  name="address"
                  onChange={onChangeInputCusomer}
                  className="form-control"
                  required
                />
              </div>
            </div>
            <div className="row">
              <div className="by-now col-lg-6 col-md-6 col-sm-12">
                <button className="btn btn-primary">
                  <b>Mua ngay</b>
                  <span>Giao hàng tận nơi siêu tốc</span>
                </button>
              </div>
            </div>
          </form>
        </div>
      )) ||
        null}
    </div>
  );
}
