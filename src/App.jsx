import { BrowserRouter, Routes, Route } from "react-router-dom";
import AdminRouter from "./Routes/AdminRouter";
import DealerRouter from "./Routes/DealerRouter";
import UserRouter from "./Routes/UserRouter";
import { ToastContainer } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Users Router */}
        <Route path="/*" element={<UserRouter />} />

        {/* Dealers Router */}
        <Route path="/dealers/*" element={<DealerRouter />} />

        {/* Dealers Router */}
        <Route path="/admin/*" element={<AdminRouter />} />
      </Routes>
      <ToastContainer
        position="bottom-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
    </BrowserRouter>
  );
}
export default App;
