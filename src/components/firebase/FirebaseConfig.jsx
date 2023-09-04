import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyABIREKNQSvSHstzmm5JVlIkH5TGy-c8N4",
  authDomain: "academy-5d825.firebaseapp.com",
  projectId: "academy-5d825",
  storageBucket: "academy-5d825.appspot.com",
  messagingSenderId: "669644456043",
  appId: "1:669644456043:web:171b9a640715391033b12e",
  measurementId: "G-D3FGLEWLGM"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export default app;
