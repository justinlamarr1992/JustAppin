import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useUserAuth } from "../../context/UserAuthContent";
import { getUserOrders } from "../../functions/user";
import ShowPaymentInfo from "../../components/cards/ShowPaymentInfo";
import UserNav from "../../components/nav/UserNav";
import Invoice from "../../components/order/Invoice";
import {
  CheckCircleOutlined,
  CloseCircleOutlined,
  ConsoleSqlOutlined,
} from "@ant-design/icons";
import { PDFDownloadLink } from "@react-pdf/renderer";
import { toast } from "react-toastify";
import { Button } from "antd";

const History = () => {
  const { active } = useSelector((state) => ({ ...state }));

  const { user, logOut } = useUserAuth();
  console.log(active.token);
  const handleLogOut = async () => {
    try {
      await logOut();
    } catch (err) {
      console.log(err.message);
    }
  };
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    loadUserOrders();
  }, []);

  const loadUserOrders = () =>
    getUserOrders(active.token).then((res) => {
      console.log(JSON.stringify(res.data, null, 4));
      setOrders(res.data);
    });

  const showOrderInTable = (order) => (
    <table className="table table-bordered">
      <thead className="thead-light">
        <tr>
          <th scope="col">Title</th>
          <th scope="col">Price</th>
          <th scope="col">Article of Clothing</th>
          <th scope="col">Color</th>
          <th scope="col">Count</th>
          <th scope="col">Shipping</th>
        </tr>
      </thead>
      <tbody>
        {order.products.map((p, i) => (
          <tr key={i}>
            <td>
              <b>{p.product.title}</b>
            </td>
            <td>{p.product.price}</td>
            <td>{p.product.article}</td>
            <td>{p.color}</td>
            <td>{p.count}</td>
            <td>
              {p.product.shipping === "Yes" ? (
                <CheckCircleOutlined style={{ color: "green" }} />
              ) : (
                <CloseCircleOutlined style={{ color: "red" }} />
              )}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );

  const showDownLoadLink = (order) => (
    <PDFDownloadLink
      document={<Invoice order={order} />}
      fileName="invoice.pdf"
      className="btn btn-sm btn-block btn-outlined-primary"
    >
      Download PDF
    </PDFDownloadLink>
  );

  const showEachOrders = () =>
    orders.map((order, i) => (
      <div key={i} className="m-5 p-3 card">
        <ShowPaymentInfo order={order} />
        {showOrderInTable(order)}
        <div className="row">
          <div className="col">{showDownLoadLink(order)}</div>
        </div>
      </div>
    ));

  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-2">
          <UserNav />
        </div>
        {user && user.email}
        {/* LOG OUT CODE */}
        <Button onClick={handleLogOut}>Log Out</Button>
        {/* LOG OUT CODE */}
        {/* <div className="col text-center">
          <h4>
            {orders.length > 0 ? "User Purchase Orders" : "No Purchased Orders"}
          </h4>
          {showEachOrders()}
        </div> */}
      </div>
    </div>
  );
};
export default History;
