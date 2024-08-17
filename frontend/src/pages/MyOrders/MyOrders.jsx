/*import React, { useContext, useEffect, useState } from "react";
import "./MyOrders.css";
import axios from "axios"; // Importing axios
import { StoreContext } from "../../components/context/StoreContext";
//import { assets } from "../assets/assets";

const MyOrders = () => {
  const { url, token } = useContext(StoreContext);
  const [data, setData] = useState([]);
  const fetchOrders = async () => {
    const response = await axios.post(
      `${url}/api/order/usercoders`,
      {},
      { header: { token } }
    );
    setData(response.data.data);
  };
  useEffect(() => {
    if (token) {
      fetchOrders();
    }
  }, [token]);

  return (
    <div className="my-orders">
      <h2>My Orders</h2>
      <div className="container">
        {data.map((order, index) => {
          return (
            <div key={index} my-orders-order>
              <img src={assets.parcel_icon} alt="" />
              <p>
                {order.items.map((item, index) => {
                  if (index === order.item.length - 1) {
                    return item.name + "x" + item.quantity;
                  } else {
                    return item.name + " x " + item.quantity + " ,";
                  }
                })}
              </p>
              <p>${(order, amount)}.00</p>
              <p>Items:{order.items.length}</p>
              <p>
                <span>&#x25cf</span>
                <b>{order}</b>
              </p>
              <button>Track order</button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default MyOrders;
*/
import React, { useContext, useEffect, useState } from "react";
import axios from "axios"; // Importing axios
import "./MyOrders.css";
import { StoreContext } from "../../components/context/StoreContext";
//import { assets } from "../assets/assets";

const MyOrders = () => {
  const { url, token } = useContext(StoreContext);
  const [data, setData] = useState([]);

  const fetchOrders = async () => {
    const response = await axios.post(
      `${url}/api/order/usercoders`,
      {},
      { header: { token } }
    );
    setData(response.data.data);
  };

  useEffect(() => {
    if (token) {
      fetchOrders();
    }
  }, [token]);

  return (
    <div className="my-orders">
      <h2>My Orders</h2>
      <div className="container">
        {data.map((order, index) => (
          <div key={index} my-orders-order>
            <img src={assets.parcel_icon} alt="" />
            <p>
              {order.items.map((item, itemIndex) =>
                itemIndex === order.items.length - 1
                  ? `${item.name} x${item.quantity}`
                  : `${item.name} x${item.quantity}, `
              )}
            </p>
            <p>${order.amount}.00</p>
            <p>Items: {order.items.length}</p>
            <p>
              <span>&#x25cf</span>
              <b>{order.status}</b>
            </p>
            <button>Track order</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyOrders;
