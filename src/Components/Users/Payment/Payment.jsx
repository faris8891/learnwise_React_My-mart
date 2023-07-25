import React, { useState } from "react";
import { postPaymentVerify } from "../../../services/UsersApi";
import { payment } from "../../../services/Users/Users";
import Cookies from "js-cookie";
import { toast } from "react-toastify";

function loadScript(src) {
  return new Promise((resolve) => {
    const script = document.createElement("script");
    script.src = src;
    script.onload = () => {
      resolve(true);
    };
    script.onerror = () => {
      resolve(false);
    };
    document.body.appendChild(script);
  });
}

export default function Payment() {
  const [paymentData, setPaymentData] = useState([]);
  async function displayRazorpay() {
    try {
      const res = await loadScript(
        "https://checkout.razorpay.com/v1/checkout.js"
      );
      if (!res) {
        alert("Razropay failed to load!!");
        return;
      }
      // Order request to server
      const data = await payment();
      const order = data.data.data;

      const tenMinutesInMilliseconds = 10 * 60 * 1000;
      const expirationDate = new Date(Date.now() + tenMinutesInMilliseconds);
      Cookies.set("orderToken", data.data.orderToken, {
        expires: expirationDate,
      });

      const orderId = Cookies.get("orderToken");

      const options = {
        key: import.meta.env.VITE_RZP_KEY,
        amount: order.amount,
        currency: "INR",
        name: "My Mart",
        description: "Test Transaction",
        image:
          "https://res.cloudinary.com/dknozjmje/image/upload/v1689664331/MyMartImages/os1f37gmjmb2txv0bsxx.svg",
        order_id: order.id,
        // Save payment response to state or send it to the server
        handler: async (response) => {
          setPaymentData(response);
          try {
            const res = await postPaymentVerify(response, orderId);
            console.log(res);
            toast.success(res.data, { position: "top-center" });
          } catch (error) {
            toast.error(error, { position: "top-center" });
          }
        },
        notes: {
          address: "MyMart Office",
        },
        theme: {
          color: "#3399cc",
        },
      };
      const paymentObject = new window.Razorpay(options);
      paymentObject.open();
    } catch (error) {
      console.log(error);
    }
  }
  return <button onClick={displayRazorpay}>Pay now</button>;
}
