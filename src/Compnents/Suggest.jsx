import React from "react";
import { ChevronRight } from "react-bootstrap-icons";
import styles from "../Compnents/Styles/Suggest.module.css";

const Suggest = () => {
  return (
    <div className={styles.container}>
      <div>
        <p className={styles.suggest_text}>Suggested Candidates</p>
      </div>
      <div>
        <button className={styles.post_button}>
          Post a job <ChevronRight className={styles.arrow_icon} />
        </button>
      </div>
    </div>
  );
};

export default Suggest;
