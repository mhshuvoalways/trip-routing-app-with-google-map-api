import Link from "next/link";
import { motion } from "framer-motion";
import { useState } from "react";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

const SignUp = () => {
  const [authValus, setAuthValues] = useState({
    email: "",
    password: "",
  });
  const [errorMsg, setErrorMsg] = useState("");
  const [loading, setLoading] = useState(false);

  const auth = getAuth();

  const onChangeHandler = (event) => {
    setErrorMsg("");
    setAuthValues({
      ...authValus,
      [event.target.name]: event.target.value,
    });
  };

  const onSubmitHandler = () => {
    setLoading(true);
    createUserWithEmailAndPassword(auth, authValus.email, authValus.password)
      .then(() => {
        setLoading(true);
        setAuthValues({
          email: "",
          password: "",
        });
      })
      .catch((err) => {
        setLoading(true);
        setErrorMsg(err.message.replace(/^Firebase: /, ""));
      });
  };

  return (
    <div className="w-10/12 md:w-6/12 lg:w-4/12 mx-auto my-20 bg-[#3347D2] p-16 rounded-xl">
      <input
        type="email"
        className="bg-[#EFF0F2] rounded-xl text-[#747678] p-2 outline-0 focus:ring w-full"
        placeholder="Email"
        name="email"
        onChange={onChangeHandler}
      />
      <input
        type="password"
        className="bg-[#EFF0F2] rounded-xl text-[#747678] p-2 outline-0 focus:ring w-full mt-10"
        placeholder="Password"
        name="password"
        onChange={onChangeHandler}
      />
      <p className="mt-5">
        <Link
          href="/login"
          className="hover:underline text-gray-100"
        >{`Already have an account?`}</Link>
      </p>
      <motion.p
        className={`bg-[#707070] rounded-xl text-gray-100 p-2 cursor-pointer w-full sm:w-6/12 mx-auto mt-5 text-center ${
          loading && "cursor-not-allowed opacity-50"
        }`}
        whileTap={{ scale: 0.9 }}
        onClick={onSubmitHandler}
      >
        Sign Up
      </motion.p>
      <p className="text-red-400 text-center mt-5">{errorMsg}</p>
    </div>
  );
};

export default SignUp;
