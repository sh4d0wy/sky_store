import React from "react";
import { useSnapshot } from "valtio";
import state from "../../store";
import { AnimatePresence, motion } from "framer-motion";
import styles from "./Address.module.css";
import { CustomButton } from "../../Components";

export const Address = () => {
  const snap = useSnapshot(state);
  return (
    <>
      <AnimatePresence>
        {snap.addressPage && (
          <motion.div className={styles.addressPage}>
            <motion.div className={styles.box}>
              <h1 className={styles.heading}>Billing Details </h1>
              <hr className="h-px my-6 bg-gray-400 border-0 w-full" />
              <form className="flex items-center justify-center gap-4 flex-col">
                <motion.div className="flex justify-between w-full">
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
                <motion.div>
                  <input
                    className={styles.inputbox}
                    id="Address"
                    placeholder="Address"
                  />
                </motion.div>
                <motion.div>
                  <input
                    className={styles.inputbox}
                    id="Area"
                    placeholder="Area"
                  />
                </motion.div>
                <motion.div>
                  <input
                    className={styles.inputbox}
                    id="City"
                    placeholder="City"
                  />
                </motion.div>
                <motion.div>
                  <input
                    className={styles.inputbox}
                    id="State"
                    placeholder="State"
                  />
                </motion.div>
                <motion.div>
                  <input
                    className={styles.inputbox}
                    id="phone"
                    placeholder="Phone Number"
                  />
                </motion.div>
              </form>
            </motion.div>
            <motion.div className={styles.box}>
              <h1 className={styles.heading}>Summary </h1>
              <hr className="h-px my-6 bg-gray-400 border-0 w-full" />
              <motion.div className="flex flex-col w-full justify-center items-center h-auto">
                <motion.div className="flex justify-between w-full gap-20">
                  <span>Products</span>
                  <span>Rs 599</span>
                </motion.div>
                <motion.div className="flex justify-between w-full gap-20">
                  <span>Shipping</span>
                  <span>Rs 49</span>
                </motion.div>
                <hr className="h-px my-6 bg-gray-400 border-0 w-full" />
                <motion.div className="flex justify-between w-full gap-20 my-2">
                  <span className="font-bold text-lg">Total</span>
                  <span className="font-bold text-lg">Rs 648</span>
                </motion.div>
                <CustomButton
                  type="filled"
                  title="Proceed"
                  customStyles="w-fit px-20 py-2.5 my-4 text-white font-bold"
                />
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
