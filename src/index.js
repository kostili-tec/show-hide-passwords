import { createPasswords } from "./scripts/createPasswordsContainer";
import './style.css';

const start = () => {
  document.body.append(createPasswords());
}

start();