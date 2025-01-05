import { Appbar } from "../components/Appbar";
import { Balance } from "../components/Balance";
import { Users } from "../components/Users";
import { useState, useEffect } from "react";
import axios from "axios";

export const onTransactionSuccess= async () =>{
  try {
    const  response = await axios.get("http://localhost:3000/api/v1/account/balance", {
      headers: {
        Authorization: "Bearer " + localStorage.getItem("token")
      }
    });
    console.log(response);
    setBalance(response.data.balance);
  } catch (error) {
    console.error("Error fetching balance:", error);
  }
      
    }
  

export const Dashboard = () => {
  const [balance, setBalance] = useState(0);

 

  useEffect(  ()  => {
    onTransactionSuccess();
  }, []);

  const onTransactionSuccess= async () =>{
    try {
      const  response = await axios.get("http://localhost:3000/api/v1/account/balance", {
        headers: {
          Authorization: "Bearer " + localStorage.getItem("token")
        }
      });
      console.log(response);
      setBalance(response.data.balance);
    } catch (error) {
      console.error("Error fetching balance:", error);
    }
        
      }
   

  return (
    <div>
      <Appbar />
      <div className="m-8">
        <Balance value={balance.toFixed(2)} />
        <Users onTransactionSuccess={onTransactionSuccess} />
      </div>
    </div>
  );
};


  
