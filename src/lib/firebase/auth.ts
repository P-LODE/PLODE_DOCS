import { getAuth, type Auth } from "firebase/auth";
import { getFirebaseApp } from "./app.js";

export function getFirebaseAuth(): Auth {
  return getAuth(getFirebaseApp());
}
