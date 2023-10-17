import { initializeApp } from "firebase/app";
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
  apiKey: "AIzaSyA-8X96MhAHqpy4KGcs2W8PVlBYnImbCSw",
  authDomain: "codescape-hotel.firebaseapp.com",
  projectId: "codescape-hotel",
  storageBucket: "codescape-hotel.appspot.com",
  messagingSenderId: "490152120007",
  appId: "1:490152120007:web:1fc492d4933dff0e4df8e2"
};

const app = initializeApp(firebaseConfig);

export const storage = getStorage(app);

export default app;
