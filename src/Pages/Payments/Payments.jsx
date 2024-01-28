import React from "react";
import styles from "./Payments.module.css";
import { useSnapshot } from "valtio";
import { AnimatePresence, motion } from "framer-motion";
import state from "../../store";

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
  const AddressChange = (e) => {
    state.address1= false;
    state.address2 = false;
    if (e.target.value == "A1") {
        state.address1= true;
    } else if (e.target.value == "A2") {
        state.address2 = true;
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
        <div className="bg-zinc-100 flex gap-[3vw] w-[100vw] h-[100vh]">
          <div className="flex flex-col gap-[1vw]">
          <div className="flex flex-col gap-2 items-center mt-[1vw]">
                <p className="font-bold">Payment method</p>
                <hr className="w-[30vw]" />
            </div>
            <div
              className={
                snap.Card ? "flex flex-col gap-[1vw] m-[1vw]" : "hidden"
              }
            >
              <div
                className={
                  snap.setCard
                    ? "bg-white w-[50vw] border-0 border-2 border-solid border-green-700 rounded-md"
                    : "bg-white w-[50vw] rounded-md"
                }
              >
                <div className="flex flex-col gap-[1.5vw] m-[1.5vw]">
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
                      className="w-[10vw] h-[3vw] bg-green-700 text-white text-xs rounded-sm"
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
                    ? "bg-white w-[50vw] h-[5vw] border-0 border-2 border-solid border-green-700 rounded-md flex gap-[10vw]"
                    : "bg-white w-[50vw] h-[4vw] rounded-md flex gap-[10vw]"
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
                    ? "bg-white w-[50vw] h-[5vw] border-0 border-2 border-solid border-green-700 rounded-md flex gap-[10vw]"
                    : "bg-white w-[50vw] h-[4vw] rounded-md flex gap-[10vw]"
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
          <div className="flex flex-col m-[3vw] gap-[2vw]">
          <div className=" bg-gray-200 w-[38vw] h-[20vw] rounded-md">
            <div className="flex flex-col gap-[2vw] items-center m-[1vw]">
              <div className="flex flex-col gap-[1vw] items-center">
              <p className="font-bold">Order Summary</p>
              <hr className="w-[30vw] border border-gray-50" />
              </div>
              <div className="flex flex-col text-sm text-slate-500 gap-[1vw]">
                <div className="flex gap-[18vw]">
                  <span>Shipping cost</span>
                  <span>TBD</span>
                </div>
                <div className="flex gap-[21vw]">
                  <span>Discount</span>
                  <span>-${snap.discount}</span>
                </div>
                <div className="flex gap-[24vw]">
                  <span>Tax</span>
                  <span>TBD</span>
                </div>
                <hr className="w-[30vw] border border-gray-50" />
                <div className="flex gap-[16vw] font-bold text-slate-900 font-l">
                  <span>Estimated Total</span>
                  <span>${snap.prize * snap.Quantity - snap.discount}</span>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-[2vw] items-center">
            <div className="flex flex-col gap-2 items-center">
                <p className="font-bold">Shipping Address</p>
                <hr className="w-[30vw]" />
            </div>
            <div
                className={snap.address1?"bg-white w-[38vw] h-[5vw] rounded-md border-0 border-2 border-solid border-green-700":"bg-white w-[38vw] h-[5vw] rounded-md"}     
              >
                <div className="m-[1.5vw]">
                  <input
                    type="radio"
                    name="Address"
                    onChange={AddressChange}
                    value="A1"
                  />{" "}
                  ---------------
                </div>
                <div></div>
            </div>
            <div className={snap.address2?"bg-white w-[38vw] rounded-md border-0 border-2 border-solid border-green-700":"bg-white w-[38vw] rounded-md"}>
            <div className="flex flex-col gap-[1vw] m-[1.5vw]">
            <div className="text-sm">
                    <input
                      type="radio"
                      name="Address"
                      onChange={AddressChange}
                      value='A2'
                    />{" "}
                    Add Another Address
                  </div>
                  <div>
                    <p className="text-xs text-gray-400">Street Address</p>
                    <input
                      type="text"
                      className="h-[2.5vw] w-[30vw] p-2 border-0 border-2 border-solid border-gray-200 outline-0 rounded-sm"
                    />
                  </div>
                  <div>
                    <p className="text-xs text-gray-400">State</p>
                    <input
                      type="text"
                      className="h-[2.5vw] w-[30vw] p-2 border-0 border-2 border-solid border-gray-200 outline-0 rounded-sm"
                    />
                  </div>
                  <div className="flex gap-[1vw]">
                    <div>
                      <p className="text-xs text-gray-400">
                        City
                      </p>
                      <input
                        type="text"
                        className="h-[2.5vw] w-[20vw] p-2 border-0 border-2 border-solid border-gray-200 outline-0 rounded-sm"
                      />
                    </div>
                    <div>
                      <p className="text-xs text-gray-400">Zip code</p>
                      <input
                        type="text"
                        className="h-[2.5vw] w-[20vw] p-2 border-0 border-2 border-solid border-gray-200 outline-0 rounded-sm"
                      />
                    </div>
                  </div>

                  <div className="flex gap-[1vw]">
                    <button
                      className="w-[10vw] h-[3vw] bg-green-700 text-white text-xs rounded-sm"
                      onClick={Card}
                    >
                      Cancel
                    </button>
                  </div>
            </div>
            </div>

          </div>
          </div>
        </div>
      )}
    </>
  );
};
export default Payments;
