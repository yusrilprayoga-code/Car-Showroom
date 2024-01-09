"use client";

import { LoginButton } from "@/components";
import { useState } from "react";
import { useRouter } from "next/navigation";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const router = useRouter();

  const handleAuth = () => {
    if (username === "admin" && password === "admin") {
      router.push("/");
    } else {
      alert("Wrong username or password");
    }
  };

  return (
    <div className="flex flex-col items-center justify-center gap-4">
      <h1 className="text-4xl font-bold mt-52">Login</h1>
      <p className="text-lg">Login to your account to access all features</p>
      <div className="flex flex-col gap-4 mb-5">
        <input
          type="text"
          className="border border-gray-400 rounded-md px-4 py-2"
          placeholder="Username"
          value={username}
            onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="password"
          className="border border-gray-400 rounded-md px-4 py-2"
          placeholder="Password"
          value={password}
            onChange={(e) => setPassword(e.target.value)}
        />
        <LoginButton
          title="Login"
          containerStyles="bg-primary-blue text-white rounded-md px-4 py-2"
          handleClick={handleAuth}
          btnType="button"
        />
      </div>
    </div>
  );
};

export default Login;
