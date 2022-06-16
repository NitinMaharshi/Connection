import React from "react";
import Navbar from "./Navbar";
import User from "./User";
import Suggest from "./Suggest";
import styles from "../Compnents/Styles/Main.module.css";
const Main = () => {
  return (
    <div className={styles.main}>
      <Navbar />
      <Suggest />
      <User />
    </div>
  );
};

export default Main;
