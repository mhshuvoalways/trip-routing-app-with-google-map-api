import { useContext, useEffect } from "react";
import { useRouter } from "next/router";
import Login from "@/components/auth/Login";
import { MyContext } from "../context/Context";

const LoginPage = () => {
  const { isAuth } = useContext(MyContext);
  const router = useRouter();

  useEffect(() => {
    if (isAuth) {
      router.push("/");
    }
  }, [router, isAuth]);

  return <Login />;
};

export default LoginPage;
