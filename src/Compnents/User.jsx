import React from "react";
import { Details } from "../Alldetails";
import Button from "react-bootstrap/Button";
import styles from "../Compnents/Styles/User.module.css";
import { Briefcase, Bookmark, GeoAlt } from "react-bootstrap-icons";
import ReactReadMoreReadLess from "react-read-more-read-less";

const User = () => {
  return (
    <>
      {Details.map((item) => {
        return (
          <div className={styles.container}>
            <div className={styles.detail_section}>
              <div>
                <div>
                  <div className={styles.name_text}>{item.name}</div>
                  <div>
                    <span>
                      {item.category} | {item.year} Years | {item.salary}K /
                      Month
                    </span>
                  </div>
                </div>
                {item.experience.map((exp) => {
                  return (
                    <div className={styles.disflix}>
                      <div>
                        <Briefcase className={styles.icons} />
                      </div>
                      <div className={styles.left_margin}>
                        <p className={styles.jobtype_jobrole}>
                          {exp.jobtype} - {exp.role}
                        </p>
                        <p className={styles.expyears}>
                          {exp.from} - {exp.to}
                        </p>
                      </div>
                    </div>
                  );
                })}
                <div className={styles.disflix}>
                  <div>
                    <GeoAlt className={styles.icons} />
                  </div>
                  <div className={styles.left_margin}>{item.location}</div>
                </div>
              </div>
              <div>
                <div className={styles.image_section}>
                  <div className={styles.image_div}>
                    <img src={item.image} alt="" className={styles.image} />
                  </div>
                  <div>
                    <Button className={styles.btn} type="button">
                      View Details
                    </Button>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.about}>
              <div className={styles.about_text}>
                <ReactReadMoreReadLess
                  charLimit={45}
                  readMoreText={"see more "}
                  readLessText={"see Less"}
                  readMoreClassName={styles.read_more}
                  readLessClassName={styles.read_less}
                >
                  {item.about}
                </ReactReadMoreReadLess>
              </div>
              <div>
                <Bookmark className={styles.icons} />
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default User;
