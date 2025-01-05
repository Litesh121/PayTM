import { useState } from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";

export function SendMoney({ onTransactionSuccess }) {
  const location = useLocation();
  const { userId, upiId: initialUpiId } = location.state || {};
  const [upiId, setUpiId] = useState(initialUpiId || "");
  const [amount, setAmount] = useState("");
  const [message, setMessage] = useState("");

  const handleSendMoney = async () => {
    try {
      const response = await axios.post(
        "http://localhost:3000/api/v1/account/transfer",
        {
          toUpiId: upiId,
          amount
        },
        {
          headers: {
            Authorization: "Bearer " + localStorage.getItem("token")
          }
        }
      );
      console.log(response)
      setMessage("Sent successfully");
      
    } catch (error) {
      console.error("Error sending money:", error);
      setMessage("Failed to send money");
    }
  };

  return (
    <div className="bg-slate-300 h-screen flex justify-center">
      <div className="flex flex-col justify-center">
        <div className="rounded-lg bg-white w-80 text-center p-2 h-max px-4">
          <h1 className="text-2xl font-bold mb-4">Send Money</h1>
          <div className="mb-4">
            <input
              type="text"
              value={upiId}
              onChange={(e) => setUpiId(e.target.value)}
              placeholder="Enter recipient UPI ID"
              className="w-full p-2 border border-gray-300 rounded"
            />
          </div>
          <div className="mb-4">
            <input
              type="number"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              placeholder="Enter amount"
              className="w-full p-2 border border-gray-300 rounded"
            />
          </div>
          <button
            onClick={handleSendMoney}
            className="justify-center rounded-md text-sm font-medium ring-offset-background transition-colors h-10 px-4 py-2 w-full bg-green-500 text-white"
          >
            Send
          </button>
          {message && <p className="mt-4 text-green-500">{message}</p>}
        </div>
      </div>
    </div>
  );
}

export default SendMoney;