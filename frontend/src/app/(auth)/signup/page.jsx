"use client";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import Link from "next/link";
import { toast } from "react-toastify";
import axios from "axios";
import { apiUrl } from "@/app/utils/util";

const SignUp = () => {
  const router = useRouter();
  const [userData, setUserData] = useState({
    name: "",
    email: "",
    password: "",
    repassword: "",
  });

  const signUp = async () => {
    // const imageUrl = await handleImageUpload();
    // if (!imageUrl) return;

    const { name, email, password, repassword } = userData;

    if (password !== repassword) {
      toast.error("Нууц үг хоорондоо тохирохгүй байна.");
      return;
    }

    try {
      const response = await fetch(`${apiUrl}/auth/signup`, {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({ email, name, password }),
      });

      if (response.status === 201) {
        toast.success("Хэрэглэгч амжилттай бүртгэгдлээ", { autoClose: 1000 });
        router.push("/login");
      }
    } catch (error) {
      console.error("There was an error signing up:", error);
      toast.error("Алдаа гарлаа. Дахин оролдоно уу.");
    }
  };

  return (
    <section className="w-screen h-screen bg-[#0166FF]">
      <div className="w-1/2 bg-white h-full flex items-center justify-center">
        <div className="flex flex-col w-[384px] gap-[40px] items-center">
          <img src="/img/logo.png" alt="" className="h-[34px] w-[92px]" />
          <div className="text-center">
            <h3 className="text-2xl font-semibold text-[#0F172A]">
              Create Geld account
            </h3>
            <p className="mt-2 text-base text-[#334155]">
              Sign up below to create your Wallet account
            </p>
          </div>
          <div className="flex flex-col gap-4 w-full">
            <input
              type="text"
              placeholder="Name"
              value={userData.name}
              onChange={(e) =>
                setUserData({ ...userData, name: e.target.value })
              }
              className="input input-bordered w-full border-[1px] border-[#D1D5DB] bg-[#F3F4F6] px-4 py-3 text-base text-[#A3A3A3]"
            />
            <input
              type="email"
              placeholder="Email"
              value={userData.email}
              onChange={(e) =>
                setUserData({ ...userData, email: e.target.value })
              }
              className="input input-bordered w-full border-[1px] border-[#D1D5DB] bg-[#F3F4F6] px-4 py-3 text-base text-[#A3A3A3]"
            />
            <input
              type="password"
              placeholder="Password"
              value={userData.password}
              onChange={(e) =>
                setUserData({ ...userData, password: e.target.value })
              }
              className="input input-bordered w-full border-[1px] border-[#D1D5DB] bg-[#F3F4F6] px-4 py-3 text-base text-[#A3A3A3]"
            />
            <input
              type="password"
              placeholder="Re-password"
              value={userData.repassword}
              onChange={(e) =>
                setUserData({ ...userData, repassword: e.target.value })
              }
              className="input input-bordered w-full border-[1px] border-[#D1D5DB] bg-[#F3F4F6] px-4 py-3 text-base text-[#A3A3A3]"
            />
            <button
              className="btn btn-info bg-[#0166FF] rounded-[20px] py-[10px] border-0 text-xl text-white font-normal"
              onClick={signUp}
            >
              Sign up
            </button>
          </div>
          <div className="flex flex-row items-center">
            <p className="text-base text-[#0F172A]">Already have account?</p>
            <Link href="/login">
              <p className="btn text-base text-[#0166FF] bg-white border-0 shadow-none">
                Log in
              </p>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SignUp;
