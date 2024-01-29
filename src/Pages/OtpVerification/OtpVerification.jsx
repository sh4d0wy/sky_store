import { AnimatePresence, motion } from "framer-motion";
import React, { useState } from "react";
import { useSnapshot } from "valtio";
import state from "../../store";
import axios from "axios";
import toast from "react-hot-toast";
import { slideAnimation } from "../../config/motion";

const OtpVerification = () => {
  const [otp, setOtp] = useState("");
  const snap = useSnapshot(state);
  const handleOtp = async (e) => {
    e.preventDefault();
    await axios
      .post("https://erin-faithful-scarab.cyclic.app/forgotpassword/verify", {
        email: snap.email,
        otp: otp,
      })
      .then((response) => {
        console.log(response.headers.status);
        toast.success(response.data.msg);
        state.verify = false;
        state.resetPassword = true;
      })
      .catch(() => {
        toast.error("Otp is incorrect!");
      });
  };
  return (
    <>
      <AnimatePresence>
        {snap.verify && (
          <motion.div className="w-[100vw] h-[100vh] flex justify-center items-center" {...slideAnimation("up")}>
            <motion.div className="bg-white p-10 rounded shadow-xl h-[30vh]">
            <form className="flex justify-center align-center flex-col h-[100%]" onSubmit={handleOtp}>
              <label className="font-bold text-lg">Enter OTP</label>
              <input
                className="border-2 rounded border-gray-300 my-4 py-2 px-2"
                type="text"
                value={otp}
                onChange={(e) => setOtp(e.target.value)}
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

export default OtpVerification;
