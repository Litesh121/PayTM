import { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

export function UserPage() {
  const { userId } = useParams();
  const [user, setUser] = useState(null);

  useEffect(() => {
    console.log("Fetching data for user ID:", userId); // Log the user ID
    axios.get(`http://localhost:3000/api/v1/user/${userId}`)
      .then(response => {
        setUser(response.data.user);
      })
      .catch(error => {
        console.error("Error fetching user data:", error);
      });
  }, [userId]);

  if (!user) {
    return <div>Loading...</div>;
  }

  return (
    <div className="bg-slate-300 h-screen flex justify-center">
      <div className="flex flex-col justify-center">
        <div className="rounded-lg bg-white w-80 text-center p-2 h-max px-4">
          <h1 className="text-2xl font-bold mb-4">User Details</h1>
          <div className="mb-4">
            <p><strong>First Name:</strong> {user.firstName}</p>
            <p><strong>Last Name:</strong> {user.lastName}</p>
            <p><strong>Email:</strong> {user.username}</p>
            <p><strong>UPI ID:</strong> {user.upiId}</p>
          </div>
        </div>
      </div>
    </div>
  );
}