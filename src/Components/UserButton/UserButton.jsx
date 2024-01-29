import React from "react";
import { AnimatePresence, motion } from "framer-motion";
import { FaUser } from "react-icons/fa";
import state from "../../store";
import { useSnapshot } from "valtio";
const UserButton = () => {
  const handleClick = () => {
    state.isModal = !state.isModal;
    console.log(state.isModal);
  };
  const handleLogout = ()=>{
    state.login=true;
    state.userName = null;
    state.cartPage = false;
  }
  const snap = useSnapshot(state)
  return (
    <>
      {snap.userName && (
        <div className="w-10 h-10 absolute right-60 top-5 z-50">
          <button
            className="bg-gray-300 rounded-full flex items-center justify-center p-3"
            onClick={handleClick}
          >
            <FaUser className="font-large" />
          </button>
          {snap.isModal && (
            <>
              <div className="bg-white-300 shadow-xl w-[10vw] flex bg-white text-sm items-start justify-center flex-col h-100 p-5">
                <button className="font-bold border-b-2 border-gray-200 m-1">
                  Password
                </button>
                <button
                  className="font-bold border-b-2 border-gray-200 m-1"
                  onClick={handleLogout}
                >
                  Logout
                </button>
              </div>
            </>
          )}
        </div>
      )}
    </>
  );
};
export default UserButton;