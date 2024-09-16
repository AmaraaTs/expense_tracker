import { useEffect, useState } from "react";
import { apiUrl } from "../utils/util";
import { toast } from "react-toastify";
import axios from "axios";

export const CategoryModal = ({ categoryOpen, close }) => {
  const [categoryData, setCategoryData] = useState({
    name: "",
    description: "",
    category_img:
      "https://plus.unsplash.com/premium_photo-1713967593106-202e5971416f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Y2F0ZWdvcnklMjBpY29ufGVufDB8fDB8fHww",
  });

  const addCategories = async () => {
    // const token = localStorage.getItem("token");
    try {
      const res = await axios.post(`${apiUrl}/categories`, {
        // headers: {
        //   Authorization: `Bearer ${token}`,
        // },
        name: categoryData.name,
        description: categoryData.description,
        category_img: categoryData.category_img,
      });
      toast.success("Категори амжилттай нэмлээ");
      //   setCategoryData(res.data);
    } catch (error) {
      console.error(error);
      toast.error("Failed to fetch categories");
    }
  };
  //   useEffect(() => {
  //     addCategories();
  //   }, []);

  return (
    <dialog open={categoryOpen} className="modal">
      <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
        <div className="modal-box">
          <button
            className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
            onClick={close}
          >
            ✕
          </button>
          <div className="flex flex-col gap-4 mr-5">
            <input
              type="text"
              placeholder="category name"
              className="w-full max-w-full input input-bordered input-primary"
              //   value={categoryData.name}
              //   onChange={(c) =>
              //     setCategoryData({ ...categoryData, name: c.target.value })
              //   }
              onChange={(e) => {
                setCategoryData({ ...categoryData, name: e.target.value });
              }}
            />
            <input
              type="text"
              placeholder="Description"
              className="w-full max-w-full input input-bordered input-primary"
              //   value={categoryData.description}
              //   onChange={(c) =>
              //     setCategoryData({ ...categoryData, name: c.target.value })
              //   }
              onChange={(e) => {
                setCategoryData({
                  ...categoryData,
                  description: e.target.value,
                });
              }}
            />
          </div>
          <div className="mt-3">
            <form method="dialog">
              <button className="btn" onClick={addCategories}>
                Add Category
              </button>
            </form>
          </div>
        </div>
      </div>
    </dialog>
  );
};
