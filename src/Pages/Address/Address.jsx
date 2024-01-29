import React from "react";
import { useSnapshot } from "valtio";
import state from "../../store";
import { AnimatePresence, motion } from "framer-motion";
import styles from "./Address.module.css";
import { CustomButton } from "../../Components";
import { slideAnimation,fadeAnimation } from "../../config/motion";
import UserButton from "../../Components/UserButton/UserButton";
export const Address = () => {
  const snap = useSnapshot(state);

  const handlePage = () => {
    state.addressPage = false;
    state.paymentsPage = true;
  };

  return (
    <>
      <AnimatePresence>
        {snap.addressPage && (
          <motion.div className={styles.addressPage} >
            <UserButton/>
            <motion.div className={styles.box} {...slideAnimation("up")}  >
              <h1 className={styles.heading}>Billing Details </h1>
              <hr className="h-px my-6 bg-gray-400 border-0 w-full" />
              <form className="flex items-center justify-center gap-4 flex-col">
                <motion.div className="flex justify-between w-full" {...slideAnimation("up")}>
                  <input
                    className={`${styles.inputbox}  ${styles.name}`}
                    id="FirstName"
                    placeholder="FirstName"
                  />
                  <input
                    className={`${styles.inputbox}  ${styles.name}`}
                    id="LastName"
                    placeholder="LastName"
                  />
                </motion.div>
                <motion.div {...slideAnimation("up")}>
                  <input
                    className={styles.inputbox}
                    id="Address"
                    placeholder="Address"
                  />
                </motion.div>
                <motion.div {...slideAnimation("up")}>
                  <input
                    className={styles.inputbox}
                    id="Area"
                    placeholder="Area"
                  />
                </motion.div>
                <motion.div {...slideAnimation("up")}>
                  <input
                    className={styles.inputbox}
                    id="City"
                    placeholder="City"
                  />
                </motion.div>
                <motion.div {...slideAnimation("up")}>
                  <input
                    className={styles.inputbox}
                    id="State"
                    placeholder="State"
                  />
                </motion.div>
                <motion.div {...slideAnimation("up")}>
                  <input
                    className={styles.inputbox}
                    id="phone"
                    placeholder="Phone Number"
                  />
                </motion.div>
              </form>
            </motion.div>
            <motion.div className={styles.box} {...slideAnimation("up")}>
              <h1 className={styles.heading}>Summary </h1>
              <hr className="h-px my-6 bg-gray-400 border-0 w-full" />
              <motion.div className="flex flex-col w-full justify-center items-center h-auto">
                <motion.div className="flex justify-between w-full gap-20" {...slideAnimation("up")}>
                  <span>Products</span>
                  <span>Rs. {snap.prize * snap.Quantity}</span>
                </motion.div>
                <motion.div className="flex justify-between w-full gap-20" {...slideAnimation("up")}>
                  <span>Discount</span>
                  <span className="text-left">Rs {snap.discount}</span>
                </motion.div>
                <hr className="h-px my-6 bg-gray-400 border-0 w-full" />
                <motion.div className="flex justify-between w-full gap-20 my-2" {...slideAnimation("up")}>
                  <span className="font-bold text-lg">Total</span>
                  <span className="font-bold text-lg">Rs {snap.prize*snap.Quantity - snap.discount}</span>
                </motion.div>
                <button
                  onClick={handlePage}
                  className="w-fit px-20 py-2.5 my-4 font-bold py-1.5 flex-1 rounded-md text-white"
                  style={{ backgroundColor: `${snap.color}` }}
                >
                  Proceed
                </button>
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
