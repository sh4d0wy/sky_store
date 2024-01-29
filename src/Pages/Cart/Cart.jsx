import React from "react";
import { useSnapshot } from "valtio";
import state from "../../store";
import { CiShoppingCart } from "react-icons/ci";
import { IoHeartOutline } from "react-icons/io5";
import { FaRegUser, FaUser } from "react-icons/fa";
import { IoBag } from "react-icons/io5";
import { AnimatePresence, motion } from "framer-motion";
import { slideAnimation } from "../../config/motion";
import  Userbutton  from "../../Components/UserButton/UserButton";
import ChangePass from "../../Components/ChangePasas/ChangePass";

const Cart = () => {
  const snap = useSnapshot(state);
  console.log(snap.cartPage);
  console.log(snap.isModal);
  const handleUser = ()=>{
    state.isModal = !state.isModal;
}
  const handlePage = () => {
    state.addressPage = true;
    state.cartPage = false;
  };
  const handleCart = () => {
    state.showCart = false;
    state.prize = 0;
    state.discount = 0;
  };
  const handleDiscount = () => {
    if (snap.promoCode == "skbhugra143") {
      state.discount = 2;
    }
  };
  const setPromoCode = (e) => {
    state.promoCode = e.target.value;
    console.log(snap.promoCode);
  };

  return (
    <>
      <AnimatePresence>
        {snap.cartPage && (
          <motion.div
            className="w-[100vw] h-[100vh] flex flex-col justify-start items-center py-[5%]"
            {...slideAnimation("up")}
          >
            <Userbutton/>
            <ChangePass/>
            <motion.div className="flex gap-2 " {...slideAnimation("up")}>
              <IoBag size={40} />
              <h1 className="font-extrabold text-3xl">My Cart</h1>
            </motion.div>
            <motion.div
              className="flex gap-[5vw] mt-[4vw]"
              {...slideAnimation("up")}
            >
              <motion.div
                className={snap.showCart ? "flex flex-col gap-5" : "hidden"}
              >
                <hr className="w-[50vw]" />
                <motion.div className="flex gap-[5vw]">
                  <motion.div></motion.div>
                  <motion.div className="flex flex-col gap-2">
                    <h1 className="font-bold text-l">Shirt</h1>
                    <p className="text-sm">Color:{snap.color}</p>
                    <p className="text-sm">Size:S</p>
                    <p className="text-sm">In stock</p>
                  </motion.div>
                  <motion.div className="flex flex-col gap-2">
                    <h1 className="font-bold text-l">Each</h1>
                    <h2 className="text-sm">Rs. {snap.prize}</h2>
                  </motion.div>
                  <motion.div className="flex flex-col gap-2">
                    <h1 className="font-bold text-l">Quantity</h1>
                    <motion.div className="flex gap-3">
                      <button
                        onClick={() => (state.Quantity = snap.Quantity - 1)}
                        className=" border-2 border-solid border-b-gray-800 p-1"
                      >
                        -
                      </button>
                      <h4>{snap.Quantity}</h4>
                      <button
                        onClick={() => (state.Quantity = snap.Quantity + 1)}
                        className=" border-2 border-solid border-b-gray-800 p-1"
                      >
                        +
                      </button>
                    </motion.div>
                  </motion.div>
                  <motion.div>
                    <h1 className="font-bold text-l">Total</h1>
                    <h2 className="text-sm font-bold">
                      Rs. {snap.prize * snap.Quantity}
                    </h2>
                  </motion.div>
                </motion.div>
                <motion.div className="flex gap-6">
                  <button
                    className="text-xs text-slate-500"
                    onClick={handleCart}
                  >
                    Remove
                  </button>
                  <button className="text-xs text-slate-500">
                    Add to Wishlist
                  </button>
                </motion.div>
                <hr className="w-[50vw]" />
                <motion.div className="flex gap-[33vw]">
                  <motion.div className="text-sm">
                    {snap.Quantity} items
                  </motion.div>
                  <motion.div className="text-sm font-bold">
                    Rs. {snap.prize * snap.Quantity}
                  </motion.div>
                </motion.div>
              </motion.div>
              <motion.div
                className="flex flex-col gap-[1vw] items-center"
                {...slideAnimation("up")}
              >
                <motion.div className="relative z-0">
                  <p className="text-xs text-slate-600">ENTER PROMO CODE</p>
                  <motion.div className="flex gap-0">
                    <input
                      type="text"
                      placeholder="Promo code"
                      className="h-[3vw] w-[25vw] p-2 border-0 border-2 border-solid border-gray-400 outline-0 "
                      onChange={setPromoCode}
                    />
                    <button
                      className="bg-black text-white w-[8vw] relative z-0"
                      onClick={handleDiscount}
                    >
                      Submit
                    </button>
                  </motion.div>
                </motion.div>
                <motion.div className="flex flex-col text-sm text-slate-500 gap-[1vw]">
                  <motion.div className="flex w-[25rem] justify-between">
                    <span>Shipping cost</span>
                    <span>TBD</span>
                  </motion.div>
                  <motion.div className="flex w-[25rem] justify-between">
                    <span>Discount</span>
                    <span>-Rs. {snap.discount}</span>
                  </motion.div>
                  <motion.div className="flex w-[25rem] justify-between">
                    <span>Tax</span>
                    <span>TBD</span>
                  </motion.div>
                  <hr className="w-[30vw]" />
                  <motion.div className="flex gap-[16vw] font-bold text-slate-900 font-l">
                    <span>Estimated Total</span>
                    <span>
                      Rs. {snap.prize * snap.Quantity - snap.discount}
                    </span>
                  </motion.div>
                </motion.div>
                <motion.div>
                  <button
                    className="w-[30vw] h-[3vw] mt-[2vw] rounded-md text-white"
                    style={{ backgroundColor: `${snap.color}` }}
                    onClick={handlePage}
                  >
                    Checkout
                  </button>
                </motion.div>
                {!snap.prize && (
                  <motion.div>
                    <p className="text-xs">Cart is Empty</p>
                  </motion.div>
                )}
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
export default Cart;
