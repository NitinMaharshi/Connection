import React from "react";
import styles from "../Compnents/Styles/Navbar.module.css";
import {
  Sliders2,
  Bell,
  ChatText,
  ThreeDotsVertical,
} from "react-bootstrap-icons";
const Navbar = () => {
  return (
    <div>
      <div className={styles.nav_Container}>
        <nav className={styles.nav}>
          <ul>
            <li>
              <div className={styles.nav_image_div}>
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-iWwks1Gusy5uoIdLZ84Z2-2ZDdb_5H2bcw&usqp=CAU"
                  alt=""
                  className={styles.user_image}
                />
              </div>
            </li>
            <li>
              <div className={styles.search_box}>
                <input
                  type="text"
                  className={styles.form_control}
                  placeholder="Condidates Search"
                />

                <Sliders2 className={styles.slider_icon} />
              </div>
            </li>
            <li>
              <ChatText className={styles.nav_icons} />
              <br />
              Message
            </li>
            <li>
              <Bell className={styles.nav_icons} />
              <br />
              Notification
            </li>
            <li>
              <ThreeDotsVertical className={styles.nav_icons} />
              <br />
              Settings
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

// /import styles from "./Navbar.Module.css";
// import "bootstrap/dist/css/bootstrap.min.css";

// const Navbar = () => {
//   return (
//     <div className={styles.nav_Container}>
//       <nav className={styles.navber}>
//         <ul>
//           <li>
//             <img
//               src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-iWwks1Gusy5uoIdLZ84Z2-2ZDdb_5H2bcw&usqp=CAU"
//               alt="#"
//             />
//           </li>
//           <li>
//             <div className={styles.search_box}>
//               <input type="text" className={styles.form_control} />
//               <button className={styles.input_btn}>
//                 <Sliders2 />
//               </button>
//             </div>
//           </li>
//           <li>
//             <ChatText className={styles.nav_icons} />
//             <br />
//             Message
//           </li>
//           <li>
//             <Bell className={styles.nav_icons} />
//             <br />
//             Notification
//           </li>
//           <li>
//             <ThreeDotsVertical className={styles.nav_icons} />
//             <br />
//             Settings
//           </li>
//         </ul>
//       </nav>

{
  /* <div>
        <ul>
          <li>
            <i class="bi bi-geo-alt"></i>
          </li>
          <li>
            <i class="bi bi-briefcase"></i>
          </li>
          <li>
            <i class="bi bi-sliders"></i>
          </li>
          <li>
            <i class="bi bi-house-door"></i>
          </li>
          <li>
            <i class="bi bi-youtube"></i>
          </li>
          <li>
            <i class="bi bi-person"></i>
          </li>
          <li>
            <i class="bi bi-bag-plus"></i>
          </li>
          <li>
            <i class="bi bi-bookmark"></i>
          </li>
        </ul>
      </div> */
}
//     </div>
//   );
// };

export default Navbar;
