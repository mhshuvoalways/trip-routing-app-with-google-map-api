import { useContext, useEffect, useState } from "react";
import Image from "next/image";
import { v4 as uuidv4 } from "uuid";
import ReactGoogleAutocomplete from "react-google-autocomplete";
import { motion } from "framer-motion";
import { MyContext } from "@/context/Context";
import FlyerIcon from "../../public/icons/flyer.svg";
import Vehicle from "../../public/icons/vehicle.svg";
import Minus from "../../public/icons/minus.svg";

const Sidebar = ({ isOpen, inputs, setInputs }) => {
  const { isLoaded } = useContext(MyContext);

  const inputIncreaseHandler = () => {
    const temp = [...inputs];
    if (temp.every((el) => el.value)) {
      const obj = {
        id: uuidv4(),
        value: "",
      };
      temp.push(obj);
      setInputs(temp);
    }
  };

  const inputDeleteHandler = (id) => {
    const temp = [...inputs];
    if (temp.length === 1) {
      return;
    }
    const newArr = temp.filter((el) => el.id !== id);
    setInputs(newArr);
  };

  const autoCompleteHandler = (place, id) => {
    const temp = [...inputs];
    const findIndex = temp.findIndex((el) => el.id === id);
    temp[findIndex] = {
      id,
      value: place.formatted_address,
    };
    setInputs(temp);
  };

  return (
    <div
      className={`sm:h-screen h-auto transform transition-all duration-200 shadow-none sm:shadow z-10 p-10 border-0 sm:border text-lg ${
        isOpen
          ? "translate-x-0 w-full sm:w-[36%]"
          : "-translate-x-full w-0 opacity-0"
      }`}
    >
      <div className="flex items-center justify-between gap-2 flex-wrap">
        <p className="bg-[#EFF0F2] rounded-xl text-[#747678] p-2 text-center w-full sm:w-[44%]">
          Tour Name
        </p>
        <motion.div
          className="flex items-center gap-2 bg-[#707070] rounded-xl text-gray-100 p-2 text-center cursor-pointer"
          whileTap={{ scale: 0.9 }}
        >
          <p>Flyer</p>
          <Image src={FlyerIcon} alt="" />
        </motion.div>
        <motion.div
          className="flex items-center gap-2 bg-[#707070] rounded-xl text-gray-100 p-2 text-center cursor-pointer"
          whileTap={{ scale: 0.9 }}
        >
          <p>Vehicle</p>
          <Image src={Vehicle} alt="" />
        </motion.div>
      </div>
      <div className="bg-[#EFF0F2] rounded-xl text-[#747678] p-2 mt-10">
        <p>Finances</p>
        <div className="flex items-center gap-2 flex-wrap">
          <span className="text-[#00FF45]">Income</span> |{" "}
          <span className="text-[#FF0000]">Expenses</span> |{" "}
          <span className="text-[#05E2FF]">Gross</span>
        </div>
      </div>
      {inputs.length ? (
        <div className="mt-10">
          {inputs.map((el) => (
            <div
              className="flex justify-between gap-3 items-center mt-5"
              key={el.id}
            >
              <div className="flex justify-between gap-2 items-center flex-wrap sm:flex-nowrap">
                {isLoaded && (
                  <ReactGoogleAutocomplete
                    className="bg-[#EFF0F2] rounded-xl text-[#747678] p-2 outline-0 focus:ring w-full"
                    placeholder="Place"
                    name="place"
                    onPlaceSelected={(place) =>
                      autoCompleteHandler(place, el.id)
                    }
                  />
                )}
                <input
                  type="text"
                  className="bg-[#EFF0F2] rounded-xl text-[#747678] p-2 outline-0 focus:ring w-full"
                  placeholder="Address"
                  readOnly
                  value={el.value}
                />
              </div>
              <motion.div
                whileTap={{ scale: 0.9 }}
                onClick={() => inputDeleteHandler(el.id)}
                className="w-5 h-5"
              >
                <Image src={Minus} alt="" className="cursor-pointer" />
              </motion.div>
            </div>
          ))}
        </div>
      ) : null}
      <motion.button
        className="bg-[#EFF0F2] rounded-xl text-[#747678] p-2 text-center w-full mt-5"
        whileTap={{ scale: 0.9 }}
        onClick={inputIncreaseHandler}
      >
        More
      </motion.button>
      <motion.p
        className="bg-[#707070] rounded-xl text-gray-100 p-2 cursor-pointer w-[50%] sm:w-[30%] mx-auto mt-10 text-center"
        whileTap={{ scale: 0.9 }}
      >
        Save
      </motion.p>
    </div>
  );
};

export default Sidebar;
