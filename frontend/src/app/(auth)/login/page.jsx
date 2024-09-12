"use client";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import Link from "next/link";
import { toast } from "react-toastify";
import axios from "axios";
import { apiUrl } from "@/app/utils/util";

const Login = () => {
  const router = useRouter();
  const [userData, setUserData] = useState({
    email: "",
    password: "",
  });

  const logIn = async () => {
    const { email, password } = userData;

    try {
      const response = await axios.post(`${apiUrl}/auth/signin`, {
        email,
        password,
      });

      if (response.status === 200) {
        toast.success("Хэрэглэгч амжилттай нэвтэрлээ", { autoClose: 1000 });
        const { token } = response.data;
        localStorage.setItem("token", token);
        router.push("/dashboard");
      }
    } catch (error) {
      console.error("There was an error signing in:", error);
      toast.error("Нэвтрэх нэр эсвэл нууц үг буруу байна.");
    }
  };
  return (
    <section className="w-screen h-screen bg-[#0166FF]">
      <div className="w-1/2 bg-white h-full flex items-center justify-center">
        <div className="flex flex-col w-[384px] gap-[40px] items-center">
          <img src="/img/logo.png" alt="" className="h-[34px] w-[92px]" />
          <div className="text-center">
            <h3 className="text-2xl font-semibold text-[#0F172A]">
              Welcome Back
            </h3>
            <p className="mt-2 text-base text-[#334155]">
              Welcome back, Please enter your details
            </p>
          </div>
          <div className="flex flex-col gap-4 w-full">
            <input
              type="email"
              placeholder="Email"
              className="input input-bordered w-full border-[1px] border-[#D1D5DB] bg-[#F3F4F6] px-4 py-3 text-base text-[#A3A3A3]"
              onChange={(e) =>
                setUserData({ ...userData, email: e.target.value })
              }
            />
            <input
              type="password"
              placeholder="Password"
              className="input input-bordered w-full border-[1px] border-[#D1D5DB] bg-[#F3F4F6] px-4 py-3 text-base text-[#A3A3A3]"
              onChange={(e) =>
                setUserData({ ...userData, password: e.target.value })
              }
            />
            <button
              className="btn btn-info bg-[#0166FF] rounded-[20px] py-[10px] border-0 text-xl text-white font-normal"
              onClick={logIn}
            >
              Log in
            </button>
          </div>
          <div className="flex flex-row items-center">
            <p className="text-base text-[#0F172A]">Don’t have account?</p>
            <Link href="/signup">
              <p className="btn text-base text-[#0166FF] bg-white border-0 shadow-none">
                Sign up
              </p>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Login;
