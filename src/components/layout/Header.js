import React from "react";
import { useHistory, Link } from "react-router-dom";
import { useSelector } from "react-redux";

export default function Header() {
  const history = useHistory();
  const { items } = useSelector((state) => state.cart);

  const [key, setKey] = React.useState(null);

  function onSubmit(e) {
    e.preventDefault();
    history.push(`/search?key=${key}`);
  }

  function onChangeInput(e) {
    const { value } = e.target;
    setKey(value);
  }

  return (
    <div id="header">
      <div className="container">
        <div className="row">
          <div id="logo" className="col-lg-3 col-md-3 col-sm-12">
            <h1>
              <Link to="/">
                <img className="img-fluid" src="images/logo.png" />
              </Link>
            </h1>
          </div>
          <div id="search" className="col-lg-6 col-md-6 col-sm-12">
            <form onSubmit={onSubmit} className="form-inline">
              <input
                className="form-control mt-3"
                type="search"
                placeholder="Tìm kiếm"
                aria-label="Search"
                onChange={onChangeInput}
                name="key"
              />
              <button className="btn btn-danger mt-3" type="submit">
                Tìm kiếm
              </button>
            </form>
          </div>
          <div id="cart" className="col-lg-3 col-md-3 col-sm-12">
            <Link className="mt-4 mr-2" to="/cart">
              giỏ hàng
            </Link>
            <span className="mt-3">{items.reduce((a, c) => a + c.qty, 0)}</span>
          </div>
        </div>
      </div>
      {/* Toggler/collapsibe Button */}
      <button
        className="navbar-toggler navbar-light"
        type="button"
        data-toggle="collapse"
        data-target="#menu"
      >
        <span className="navbar-toggler-icon" />
      </button>
    </div>
  );
}
