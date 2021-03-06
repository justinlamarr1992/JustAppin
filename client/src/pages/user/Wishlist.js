import React, { useState, useEffect } from "react";
import { getWishlist, removeWishlist } from "../../functions/user";
import UserNav from "../../components/nav/UserNav";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { DeleteOutlined } from "@ant-design/icons";

const Wishlist = () => {
  const [wishlist, setWishlist] = useState([]);
  const { active } = useSelector((state) => ({ ...state }));

  useEffect(() => {
    loadWishlist();
  }, []);

  const loadWishlist = () =>
    getWishlist(active.token).then((res) => {
      console.log(res);
      setWishlist(res.data.wishlist);
    });

  const handleRemove = (productId) =>
    removeWishlist(productId, active.token).then((res) => {
      loadWishlist();
    });

  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-2">
          <UserNav />
        </div>
        <div className="col">
          <h4>Wishlist</h4>
          {wishlist.map((p) => (
            <div key={p._id} className="alert alert-secondary">
              <Link to={`/product/${p.slug}`}>{p.title}</Link>
              <span
                onClick={() => handleRemove(p._id)}
                className="btn btn-sm float-end"
              >
                <DeleteOutlined className="text-danger" />
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
export default Wishlist;
