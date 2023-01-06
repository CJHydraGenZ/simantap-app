"use client";
import { initRegister } from "@/components/context/init";
import React, { useState } from "react";
import {
  useAppContext,
  useRegisterDispatch,
} from "@/components/context/AppContext";
import { useRegisterStore } from "app/store/store";
export default function Register() {
  // const { register, dispatch } = useAppContext();
  // const dispatch = useRegisterDispatch();
  const registerSubmit = useRegisterStore((state) => state.registerData);
  const [username, SetUserName] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("");
  const handleRegister = (e) => {
    e.preventDefault();
    console.log("data", {
      username,
      password,
      role,
    });
    const data = {
      email: username,
      password,
      role,
    };
    registerSubmit(data);
    // dispatch({
    //   type: "register",
    //   email: username,
    //   password: password,
    //   role: role,
    // });
  };
  return (
    <div>
      <form onSubmit={(e) => handleRegister(e)}>
        <label htmlFor="">Username</label>
        <input type="text" onChange={(e) => SetUserName(e.target.value)} />
        <label htmlFor="">Password</label>
        <input type="password" onChange={(e) => setPassword(e.target.value)} />
        <label htmlFor="">Role</label>
        <input type="text" onChange={(e) => setRole(e.target.value)} />
        <button>Register</button>
      </form>
    </div>
  );
}
