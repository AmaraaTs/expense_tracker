"use client";

import { useContext, useEffect, useState } from "react";
import { UserContext } from "../context/user-context";
import { useRouter, redirect } from "next/navigation";
import { Header } from "../components";
import axios from "axios";
import { apiUrl } from "../utils/util";
import { DashboardProvider } from "../context/dashboard-context";

const Layout = ({ children }) => {
  const { user, fetchUserData } = useContext(UserContext);
  const router = useRouter();
  console.log("USER SHALGAH", user);

  useEffect(() => {
    fetchUserData();
  }, []);

  const logOut = () => {
    localStorage.removeItem("token");
    router.push("/login");
  };

  // if (!user) {
  //   //   // redirect("/login");
  //   router.push("/login");
  // }

  return (
    <DashboardProvider>
      <Header user={user} logOut={logOut} />
      {children}
    </DashboardProvider>
  );
};

export default Layout;
