import { getDatabase } from "firebase/database"
import Contact from "./Homecomponents/Contact";
export const database = getDatabase(Contact);