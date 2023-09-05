import { createContext, useEffect, useState } from "react";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import "../config/firebase";

export const MyContext = createContext();

function AppStore({ children }) {
  const [isAuth, setIsAuth] = useState(true);
  const [user, setUser] = useState(null);

  const auth = getAuth();

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
    <MyContext.Provider value={{ user, isAuth }}>{children}</MyContext.Provider>
  );
}

export default AppStore;
