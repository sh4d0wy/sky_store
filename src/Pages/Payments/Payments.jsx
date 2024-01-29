import React from "react";
import styles from "./Payments.module.css";
import { useSnapshot } from "valtio";
import { AnimatePresence, motion } from "framer-motion";
import state from "../../store";
import { slideAnimation } from "../../config/motion";
import UserButton from "../../Components/UserButton/UserButton";
import ChangePass from "../../Components/ChangePasas/ChangePass";

const Payments = () => {
  const snap = useSnapshot(state);
  const clicked = (e) => {
    state.setCard = false;
    state.setGooglePay = false;
    state.setPaypal = false;
    state.setApplePay = false;
    if (e.target.value == "card") {
      state.setCard = true;
    } else if (e.target.value == "pp") {
      state.setPaypal = true;
    } else if (e.target.value == "gpay") {
      state.setGooglePay = true;
    } else if (e.target.value == "apay") {
      state.setApplePay = true;
    }
  };

  const Card = () => {
    state.Card = false;
  };
  const Switch = () => {
    state.paymentsPage = false;
    state.cartPage = true;
  };
  return (
    <>
      {snap.paymentsPage && (
        <div className="bg-zinc-100 flex gap-[3vw] w-[100vw] h-[100vh] flex justify-center items-start  pt-[3%]">
          <UserButton/>
          <ChangePass/>
          <div className="flex flex-col gap-[1vw]">
            <div className="flex flex-col gap-2 items-center">
              <p className="font-bold text-xl">Payment method</p>
              <hr className="w-[30vw]" />
            </div>
            <div
              className={
                snap.Card ? "flex flex-col gap-[1vw] m-[1vw] shadow-lg" : "hidden"
              }
            >
              <div
                className={
                  snap.setCard
                    ? "bg-white w-[50vw] border-0 border-2 border-solid border-green-700 shadow-lg rounded-md"
                    : "bg-white w-[50vw] rounded-md shadow-lg"
                }
              >
                <div className="flex flex-col gap-[1.5vw] m-[1.5vw] ">
                  <div className="text-sm">
                    <input
                      type="radio"
                      onClick={clicked}
                      name="#payment-mode"
                      value="card"
                    />{" "}
                    Credit or Debit Card
                  </div>
                  <div>
                    <p className="text-xs text-gray-400">Name on card</p>
                    <input
                      type="text"
                      className="h-[2.5vw] w-[30vw] p-2 border-0 border-2 border-solid border-gray-200 outline-0 rounded-sm"
                    />
                  </div>
                  <div>
                    <p className="text-xs text-gray-400">Card Number</p>
                    <input
                      type="text"
                      className="h-[2.5vw] w-[30vw] p-2 border-0 border-2 border-solid border-gray-200 outline-0 rounded-sm"
                    />
                  </div>
                  <div className="flex gap-[1vw]">
                    <div>
                      <p className="text-xs text-gray-400">
                        Expire Date(MM/YY)
                      </p>
                      <input
                        type="text"
                        className="h-[2.5vw] w-[20vw] p-2 border-0 border-2 border-solid border-gray-200 outline-0 rounded-sm"
                      />
                    </div>
                    <div>
                      <p className="text-xs text-gray-400">CVC/CVV</p>
                      <input
                        type="text"
                        className="h-[2.5vw] w-[20vw] p-2 border-0 border-2 border-solid border-gray-200 outline-0 rounded-sm"
                      />
                    </div>
                  </div>

                  <div className="flex gap-[1vw]">
                    <button
                      className="w-[10vw] h-[3vw] text-white text-sm rounded-md"
                      style={{background:`${snap.color}`}}
                      onClick={Card}
                    >
                      Cancel
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-[1vw] m-[1vw]">
              <div
                className={
                  snap.setPaypal
                    ? "bg-white w-[50vw] h-[5vw] shadow-lg border-0 border-2 border-solid border-green-700 rounded-md flex gap-[10vw]"
                    : "bg-white w-[50vw] h-[4vw] shadow-lg rounded-md flex gap-[10vw]"
                }
              >
                <div className="m-[1.5vw]">
                  <input
                    type="radio"
                    onChange={clicked}
                    name="#payment-mode"
                    value="pp"
                  />{" "}
                  PayPal
                </div>
                <div></div>
              </div>
              <div
                className={
                  snap.setGooglePay
                    ? "bg-white w-[50vw] h-[5vw] shadow-lg border-0 border-2 border-solid border-green-700 rounded-md flex gap-[10vw]"
                    : "bg-white w-[50vw] h-[4vw] shadow-lg rounded-md flex gap-[10vw]"
                }
              >
                <div className="m-[1.5vw]">
                  <input
                    type="radio"
                    onChange={clicked}
                    name="#payment-mode"
                    value="gpay"
                  />{" "}
                  Google Pay
                </div>
                <div></div>
              </div>
              <div className="flex gap-[30vw]">
                <button className="text-sm text-sky-700" onClick={Switch}>
                  {" "}
                  &lt; Back to Cart
                </button>
              </div>
            </div>
          </div>
          <motion.div className={styles.box} {...slideAnimation("up")}>
            <h1 className={styles.heading}>Summary </h1>
            <hr className="h-px my-6 bg-gray-400 border-0 w-full" />
            <motion.div className="flex flex-col w-full justify-center items-center h-auto">
              <motion.div
                className="flex justify-between w-full gap-20"
                {...slideAnimation("up")}
              >
                <span>Products</span>
                <span>Rs {snap.prize * snap.Quantity}</span>
              </motion.div>
              <motion.div
                className="flex justify-between w-full gap-20"
                {...slideAnimation("up")}
              >
                <span>Discount</span>
                <span className="text-left">Rs {snap.discount}</span>
              </motion.div>
              <hr className="h-px my-6 bg-gray-400 border-0 w-full" />
              <motion.div
                className="flex justify-between w-full gap-20 my-2"
                {...slideAnimation("up")}
              >
                <span className="font-bold text-lg">Total</span>
                <span className="font-bold text-lg">
                  Rs {snap.prize * snap.Quantity - snap.discount}
                </span>
              </motion.div>
              <button
                onClick={Card}
                className="w-fit px-20 py-2.5 my-4 font-bold py-1.5 flex-1 rounded-md text-white"
                style={{ backgroundColor: `${snap.color}` }}
              >
                Proceed
              </button>
            </motion.div>
          </motion.div>
        </div>
      )}
    </>
  );
};
export default Payments;
