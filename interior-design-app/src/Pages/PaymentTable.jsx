import React, { useEffect, useState, useContext } from "react";
import axios from "axios";
import { userContext } from "../Context/UserProvider";

function PaymentTable() {
  const user = useContext(userContext);
  let [payments, setPayments] = useState([]);
  useEffect(() => {
    (async () => {
      try {
        let response = await axios.get(`${user.url}/api/payment`);
        if (response.status == 200) {
          setPayments(response.data);
        }
      } catch (err) {
        console.log(err);
      }
    })();
  });
  return (
    <div className="max-w-4xl mx-auto mt-10 p-6 bg-white shadow-lg rounded-lg">
      <h2 className="text-2xl font-bold mb-4 text-center text-gray-800">
        Payment Details
      </h2>
      <table className="w-full table-auto border-collapse border border-gray-300">
        <thead>
          <tr className="bg-gray-100 text-gray-700">
            <th className="border border-gray-300 px-4 py-2">Client ID</th>
            <th className="border border-gray-300 px-4 py-2">Design ID</th>
            <th className="border border-gray-300 px-4 py-2">
              Total Amount Paid
            </th>
          </tr>
        </thead>
        <tbody>
          {payments.length > 0 ? (
            payments.map((payment, index) => (
              <tr
                key={index}
                className={`${
                  index % 2 === 0 ? "bg-gray-50" : "bg-white"
                } text-gray-700`}
              >
                <td className="border border-gray-300 px-4 py-2 text-center">
                  {payment.c_id}
                </td>
                <td className="border border-gray-300 px-4 py-2 text-center">
                  {payment.d_id}
                </td>
                <td className="border border-gray-300 px-4 py-2 text-center">
                  ₹{payment.amount.toLocaleString()}
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td
                colSpan="3"
                className="border border-gray-300 px-4 py-2 text-center text-red-500"
              >
                No payment data available.
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}

export default PaymentTable;
