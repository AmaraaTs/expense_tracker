import { FaPlus } from "react-icons/fa6";
import Image from "next/image";
import Link from "next/link";
import AddRecord from "./addRecord";

export const Header = ({ user, logOut }) => {
  return (
    <header className="bg-white">
      <div className="flex items-center max-w-[2000px] mx-auto justify-between py-4 bg-white">
        <div className="flex gap-6 items-center">
          <Image src="/img/vector.png" width={20} height={20} alt="logo" />
          <p className="uppercase font-bold">{user?.name}</p>
          <Link href="/dashboard">
            <p className="text-base text-[#0F172A]">Dashboard</p>
          </Link>
          <Link href="/records">
            <p className="text-base text-[#0F172A]">Records</p>
          </Link>
        </div>
        <div className="flex gap-6 items-center">
          <button
            className="btn bg-[#0166FF] text-white btn-sm text-base"
            onClick={() => document.getElementById("my_modal_3").showModal()}
          >
            <FaPlus />
            Records
          </button>
          <AddRecord />
          <div className="avatar w-12 h-12">
            <div className="w-24 rounded-full">
              <img src={user?.profile_img} />
            </div>
          </div>
          <button className="btn btn-sm" onClick={logOut}>
            Log out
          </button>
        </div>
      </div>
    </header>
  );
};
