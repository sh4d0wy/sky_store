import React, { useState } from "react";
import { useSnapshot } from "valtio";
import state from "../../store";
import { AnimatePresence, motion } from "framer-motion";
import axios from "axios";
import toast from "react-hot-toast";
import { slideAnimation } from "../../config/motion";

const ResetPassword = () => {
  const snap = useSnapshot(state);
  const [newpassword, setNewPassword] = useState("");
  const handleResetPass = async (e) => {
    e.preventDefault();
    await axios
      .post(
        "https://erin-faithful-scarab.cyclic.app/forgotpassword/resetpassword",
        {
          email: snap.email,
          newpassword: newpassword,
        }
      )
      .then((response) => {
        console.log(response.headers.status);
        toast.success(response.data.msg);
        state.resetPassword = false;
        state.login = true;
      });
  };
  return (
    <>
      <AnimatePresence>
        {snap.resetPassword && (
          <motion.div className="w-[100vw] h-[100vh] flex justify-center items-center" {...slideAnimation("up")}>
            <motion.div className="bg-white p-10 rounded shadow-xl h-[43vh]">
            <form className="flex justify-center align-center flex-col h-[100%]" onSubmit={handleResetPass}>
              <label className="font-bold text-lg">Enter New password</label>
              <input
                className="border-2 rounded border-gray-300 my-4 py-1 px-2"
                type="text"
                value={newpassword}
                onChange={(e) => setNewPassword(e.target.value)}
              ></input>
              <label className="font-bold text-lg">Confirm New password</label>
              <input
                className="border-2 rounded border-gray-300 my-4 py-1 px-2"
                type="text"
              ></input>
              <button type="submit" className="py-1.5 flex-1 mt-3 rounded-md text-white bg-yellow-400">Submit</button>
            </form>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default ResetPassword;
