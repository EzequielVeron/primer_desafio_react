import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyCmnyfytZpDJ_fCrp1mcSaKLJ09fdGJbFc",
    authDomain: "fir-ecommerce-c94e9.firebaseapp.com",
    projectId: "fir-ecommerce-c94e9",
    storageBucket: "fir-ecommerce-c94e9.appspot.com",
    messagingSenderId: "4385708130",
    appId: "1:4385708130:web:41117bf6c78315944b593b"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);

export default app;