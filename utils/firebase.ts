import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyBJcn3ycPwwTnCv845dyJ8Ic9qdhfodhVg",
  authDomain: "aada-web.firebaseapp.com",
  projectId: "aada-web",
  storageBucket: "aada-web.appspot.com",
  messagingSenderId: "73792805790",
  appId: "1:73792805790:web:501965baa1b218de52948f",
  measurementId: "G-5VLZNBF7N1",
};

// Initialize Firebase
export const firebaseApp = initializeApp(firebaseConfig);
export const storage = getStorage(firebaseApp);
