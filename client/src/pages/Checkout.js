import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  getUserCart,
  emptyUserCart,
  saveUserAddress,
  applyDiscount,
} from "../functions/user";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import AddressForm from "../components/forms/AddressForm";

const initialState = {
  street: "",
  street2: "",
  city: "",
  state: "",
  zip: "",
};

const Checkout = () => {
  const [products, setProducts] = useState([]);
  const [total, setTotal] = useState(0);
  const [address, setAddress] = useState(initialState);
  const [addressSaved, setAddressSaved] = useState(false);
  const [discount, setDiscount] = useState("");
  const [totalAfterDiscount, setTotalAfterDiscount] = useState(0);
  const [discountError, setDiscountError] = useState("");

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { user } = useSelector((state) => ({ ...state }));

  useEffect(() => {
    getUserCart(user.token).then((res) => {
      console.log("user cart res", JSON.stringify(res.data, null, 4));
      setProducts(res.data.products);
      setTotal(res.data.cartTotal);
    });
  }, []);

  const handleChange = (e) => {
    setAddress({ ...address, [e.target.name]: e.target.value });
  };

  const saveAddressToDb = (e) => {
    e.preventDefault();
    saveUserAddress(user.token, address)
      .then((res) => {
        if (res.data.ok) {
          setAddressSaved(true);
          toast.success("Address Saved");
        }
      })
      .catch((err) => console.log(err));
  };

  const applyDiscountRate = () => {
    console.log("Send the Discount to the Back End", discount);
    applyDiscount(user.token, discount).then((res) => {
      console.log("RES ON DISCOUNT APPLIED", res.data);
      if (res.data) {
        setTotalAfterDiscount(res.data);
        // update redux discount applied
        dispatch({
          type: "DISCOUNT_APPLIED",
          payload: true,
        });
      }
      // error
      if (res.data.err) {
        setDiscountError(res.data.err);
        // update redux discount applied
        dispatch({
          type: "DISCOUNT_APPLIED",
          payload: false,
        });
      }
    });
  };

  const showAddress = () => (
    <>
      <AddressForm
        handleChange={handleChange}
        saveAddressToDb={saveAddressToDb}
        address={address}
        setAddress={setAddress}
      />
    </>
  );

  const showProductSummary = () =>
    products.map((p, i) => (
      <div key={i}>
        <p>
          {p.product.title} ({p.color}) * {p.count} = $
          {p.product.price * p.count}
        </p>
      </div>
    ));

  const showApplyDiscount = () => (
    <>
      <input
        onChange={(e) => {
          setDiscount(e.target.value);
          setDiscountError("");
        }}
        value={discount}
        type="text"
        className="form-control"
      />
      <button onClick={applyDiscountRate} className="btn btn-primary mt-2">
        Apply
      </button>
    </>
  );

  const emptyCart = () => {
    //remove from local storage
    if (typeof window !== "undefined") {
      localStorage.removeItem("cart");
    }
    //remove from redux
    dispatch({
      type: "ADD_TO_CART",
      payload: [],
    });
    // remove from backend
    emptyUserCart(user.token).then((res) => {
      setProducts([]);
      setTotal(0);
      toast.success("Cart has been Emptied. Continue Shopping");
    });
  };
  return (
    <div className="row">
      <div className="col-md-8">
        <h4>Delivery Address</h4>
        <br />
        {showAddress()}
        <hr />
        <h4>Discounts</h4>
        <br />
        {showApplyDiscount()}
        <br />
        {discountError && <p className="bg-danger p-2">{discountError}</p>}
      </div>
      <div className="col-md-4">
        <h4>Order Summary</h4>
        <p>Products {products.length}</p>
        <hr />
        {showProductSummary()}
        <hr />
        <p>Cart Total: ${total}</p>
        {totalAfterDiscount > 0 && (
          <p className="bg-success p-2">
            Discount Applied: Total Payment: ${totalAfterDiscount}{" "}
          </p>
        )}
        <div className="row">
          <div className="col-md-6">
            <button
              className="btn btn-primary"
              disabled={!addressSaved || !products.length}
              onClick={() => navigate("/payment")}
            >
              Place Order
            </button>
          </div>
          <div className="col-md-6">
            <button
              className="btn btn-primary"
              disabled={!products.length}
              onClick={emptyCart}
            >
              Empty Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Checkout;
