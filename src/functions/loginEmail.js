import { auth } from "../Firebase/credenciales";
import { createUserWithEmailAndPassword} from "firebase/auth";

async function loginEmail(email, password) {
  const result = await createUserWithEmailAndPassword(auth, email, password);
  return result;
}

export default loginEmail;
