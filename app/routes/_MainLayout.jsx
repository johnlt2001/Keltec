import { Outlet } from "@remix-run/react";
import styles from '../styles'
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
export default function Layour() {
  return (
    <div className="bg-primary  w-full overflow-hidden">
      <div className={`${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <Navbar />
        </div>
      </div>

      <Outlet />
      <Footer />
    </div>
  );
}