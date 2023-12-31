import { useContext, useEffect } from "react";
import { useRouter } from "next/router";
import HeaderSidebar from "../components/headerSidebar";
import { MyContext } from "../context/Context";

const Index = () => {
  const { isAuth } = useContext(MyContext);
  const router = useRouter();

  useEffect(() => {
    if (!isAuth) {
      router.push("/login");
    }
  }, [router, isAuth]);

  return (
    <div>
      <HeaderSidebar />
    </div>
  );
};

export default Index;
