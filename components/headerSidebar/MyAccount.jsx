import { getAuth, signOut } from "firebase/auth";

const MyAccount = () => {
  const auth = getAuth();

  return (
    <div className="rounded shadow absolute top-16 bg-white z-50 right-10">
      <p className="py-1 hover:bg-gray-100 text-gray-900 rounded px-10 cursor-pointer">
        My Account
      </p>
      <p
        className="py-1 hover:bg-gray-100 text-gray-900 rounded px-10 cursor-pointer"
        onClick={() => signOut(auth)}
      >
        Logout
      </p>
    </div>
  );
};

export default MyAccount;
