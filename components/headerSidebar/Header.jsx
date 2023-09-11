import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import MyAccount from "./MyAccount";
import Noti from "../../public/icons/noti.svg";
import User from "../../public/user.jpg";
import Down from "../../public/icons/down.svg";

const Index = ({ isOpen, toggleSidebar }) => {
  const [myAccount, setMyAccount] = useState(false);

  return (
    <>
      <div className="bg-[#3347D2] px-10 text-white py-2 relative">
        <div className="flex justify-between items-center flex-wrap gap-6">
          <button className="text-2xl block sm:hidden" onClick={toggleSidebar}>
            {!isOpen ? "☰" : "✕"}
          </button>
          <Link href="/" className="text-xl font-semibold">
            Logo
          </Link>
          <div className="flex justify-center sm:justify-between items-center flex-wrap gap-6">
            <motion.div whileTap={{ scale: 0.9 }}>
              <Image src={Noti} alt="" className="cursor-pointer" />
            </motion.div>
            <motion.div
              className="flex justify-center sm:justify-between items-center flex-wrap gap-4 cursor-pointer"
              onClick={() => setMyAccount(!myAccount)}
              whileTap={{ scale: 0.9 }}
            >
              <Image src={User} alt="" className="w-12 h-12 rounded-full" />
              <p className="text-lg">Dale Bradley</p>
              <Image src={Down} alt="" />
            </motion.div>
          </div>
        </div>
      </div>
      {myAccount && <MyAccount />}
    </>
  );
};

export default Index;
