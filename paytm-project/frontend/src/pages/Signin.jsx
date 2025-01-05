import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { BottomWarning } from "../components/BottomWarning";
import { Button } from "../components/Button";
import { Heading } from "../components/Heading";
import { InputBox } from "../components/InputBox";
import { SubHeading } from "../components/Subheading";

export function Signin() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const navigate = useNavigate();

  const handleSignin = async () => {
    try {
      const response = await axios.post("http://localhost:3000/api/v1/user/signin", {
        username,
        password
      });
      localStorage.setItem("token", response.data.token);
      localStorage.setItem("username", username); // Store username in local storage
      setMessage("Sign in successful!");
      setTimeout(() => {
        navigate("/dashboard");
      }, 2000); // Redirect to dashboard after 2 seconds
    } catch (error) {
      console.error("Error signing in:", error);
      setMessage("Failed to sign in. Please check your credentials.");
    }
  };

  return (
    <div className="bg-slate-300 h-screen flex justify-center">
      <div className="flex flex-col justify-center">
        <div className="rounded-lg bg-white w-80 text-center p-2 h-max px-4">
          <Heading label={"Sign In"} />
          <SubHeading label={"Enter your credentials to access your account"} />
          <InputBox
            onChange={(e) => setUsername(e.target.value)}
            placeholder={"litesh@gmail.com"}
            label={"Email"}
          />
          <InputBox
            onChange={(e) => setPassword(e.target.value)}
            placeholder={"Password"}
            label={"Password"}
            type="password"
          />
          <div className="pt-4">
            <Button
              onClick={handleSignin}
              label={"Sign In"}
            />
          </div>
          {message && <p className="mt-4 text-green-500">{message}</p>}
          <BottomWarning
            label={"Don't have an account?"}
            buttonText={"Sign up"}
            to={"/signup"}
          />
        </div>
      </div>
    </div>
  );
}

export default Signin;
