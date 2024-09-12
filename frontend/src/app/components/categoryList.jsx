import axios from "axios";
import React, { useEffect, useState } from "react";
import { apiUrl } from "../utils/util";
import { IoMdEye } from "react-icons/io";
import { toast } from "react-toastify";

const CategoryList = () => {
  const [categories, setCategories] = useState(null);
  const fetchCategories = async () => {
    try {
      const token = localStorage.getItem("token");
      const res = await axios.get(`${apiUrl}/categories`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      console.log("ST", res.data);
      setCategories(res.data);
    } catch (error) {
      console.error(error);
      toast.error("Failed to fetch categories");
    }
  };
  useEffect(() => {
    fetchCategories();
  }, []);
  return (
    <div className="flex flex-col gap-2">
      {categories?.category.map((cat) => (
        <div className="flex gap-2 items-center">
          <IoMdEye size={20} />
          <p className="text-base text-[#1F2937]">{cat.name}</p>
        </div>
      ))}
    </div>
  );
};

export default CategoryList;
