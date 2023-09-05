import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyCFn9Z6I4bnI0hGNzHF5H3V_9hLWGq6-Ic",
  authDomain: "trip-routing-app.firebaseapp.com",
  projectId: "trip-routing-app",
  storageBucket: "trip-routing-app.appspot.com",
  messagingSenderId: "313249141880",
  appId: "1:313249141880:web:91f7794c806e49616b498d",
};

const app = initializeApp(firebaseConfig);

export default app;
