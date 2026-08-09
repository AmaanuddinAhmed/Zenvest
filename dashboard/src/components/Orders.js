import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import api from "../api";

const Orders = () => {
  const [allOrders, setAllOrders] = useState([]);

  useEffect(() => {
    api
      .get("/allOrders")
      .then((res) => {
        setAllOrders(res.data);
      })
      .catch((err) => {
        console.error("Failed to fetch orders:", err);
      });
  }, []);

  if (allOrders.length === 0) {
    return (
      <div className="orders">
        <div className="no-orders">
          <p>You haven't placed any orders today</p>

          <Link to={"/"} className="btn">
            Get started
          </Link>
        </div>
      </div>
    );
  }

  return (
    <>
      <h3 className="title">Orders ({allOrders.length})</h3>

      <div className="order-table">
        <table>
          <tr>
            <th>Instrument</th>
            <th>Qty.</th>
            <th>Price</th>
            <th>Mode</th>
          </tr>

          {allOrders.map((order, idx) => {
            return (
              <tr key={idx}>
                <td>{order.name}</td>
                <td>{order.qty}</td>
                <td>{order.price.toFixed(2)}</td>
                <td className={order.mode === "BUY" ? "profit" : "loss"}>
                  {order.mode}
                </td>
              </tr>
            );
          })}
        </table>
      </div>
    </>
  );
};

export default Orders;
