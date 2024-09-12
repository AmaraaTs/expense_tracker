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
  // const [user, setUser] = useState(null);
  // const getData = async () => {
  //   const res = await axios.get("http://localhost:8008/users/profile", {
  //     headers: {
  //       Authorization: `Bearer ${localStorage.getItem("token")}`,
  //     },
  //   });
  //   console.log("data", res.data);
  //   setUser(res.data.user[0]);
  // };
  console.log("USER SHALGAH", user);

  useEffect(() => {
    fetchUserData();
    // getData();
  }, []);

  const logOut = () => {
    localStorage.removeItem("token");
    router.push("/login");
  };

  // if (!user) {
  //   // redirect("/login");
  //   router.push("/login");
  // }

  return (
    <DashboardProvider>
      <Header user={user} logOut={logOut} />
      {/* <header>User: {user.user[0]?.name}</header> */}
      {children}
    </DashboardProvider>
  );
};

export default Layout;
