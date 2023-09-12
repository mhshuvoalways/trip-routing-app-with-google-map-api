import { createContext, useEffect, useState } from "react";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import "../config/firebase";

export const MyContext = createContext();

function AppStore({ children }) {
  const [isAuth, setIsAuth] = useState(true);
  const [user, setUser] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);

  const auth = getAuth();

  useEffect(() => {
    const script = document.createElement("script");
    script.src = `https://maps.googleapis.com/maps/api/js?key=${process.env.NEXT_PUBLIC_GOOGLE_API_KEY}`;
    script.async = true;
    document.head.append(script);
    script.onload = () => {
      setIsLoaded(true);
    };
  }, []);

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setIsAuth(true);
        setUser(user);
      } else {
        setIsAuth(false);
        setUser(null);
      }
    });
  }, [auth]);

  return (
    <MyContext.Provider value={{ user, isAuth, isLoaded }}>
      {children}
    </MyContext.Provider>
  );
}

export default AppStore;
