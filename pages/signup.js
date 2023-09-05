import { useContext, useEffect } from "react";
import { useRouter } from "next/router";
import Signup from "@/components/auth/Signup";
import { MyContext } from "../context/Context";

const LoginPage = () => {
  const { isAuth } = useContext(MyContext);
  const router = useRouter();

  useEffect(() => {
    if (isAuth) {
      router.push("/");
    }
  }, [router, isAuth]);

  return <Signup />;
};

export default LoginPage;
