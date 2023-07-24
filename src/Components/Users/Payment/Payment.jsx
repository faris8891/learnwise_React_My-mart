import React from "react";

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
  async function displayRazorpay() {
    try {
      const res = await loadScript(
        "https://checkout.razorpay.com/v1/checkout.js"
      );

      if (!res) {
        alert("Razropay failed to load!!");
        return;
      }
        console.log(res, "+++++++++++++++");
        
      const data = await fetch(`http://127.0.0.1:3011/users/pay-verify`, {
        method: "POST",
      }).then((t) => console.log(t, "-------------------"));

      console.log(data);
    } catch (error) {
      console.log(error);
    }

    const options = {
      key: import.meta.env.VITE_RZP_KEY, // Enter the Key ID generated from the Dashboard
      amount: "50000", // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
      currency: "INR",
      name: "Acme Corp",
      description: "Test Transaction",
      image: "https://example.com/your_logo",
      order_id: "order_MHd0IyYLAjCzbr", //This is a sample Order ID. Pass the `id` obtained in the response of Step 1
      callback_url: ``,
      notes: {
        address: "Razorpay Corporate Office",
      },
      theme: {
        color: "#3399cc",
      },
    };
    const paymentObject = new window.Razorpay(options);
    paymentObject.open();
  }
  return (
    <div className="App">
      <header className="App-header">
        <img src="" className="App-logo" alt="logo" />
        <button onClick={displayRazorpay}>Pay now</button>
      </header>
    </div>
  );
}
