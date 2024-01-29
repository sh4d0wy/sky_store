import axios from "axios";
import { AnimatePresence, motion } from "framer-motion";
import React, { useState } from "react";
import toast from "react-hot-toast";
import { useSnapshot } from "valtio";
import state from "../../store";
import { CustomButton } from "../../Components";
import { slideAnimation } from "../../config/motion";

const ForgotPassword = () => {
  const snap = useSnapshot(state);
  const [email, setEmail] = useState("");
  const handleSubmit = (e)=>{
    e.preventDefault();
    state.email = email
    handleEmail();

  }
  const handleEmail = async () => {
    await axios
      .post("https://erin-faithful-scarab.cyclic.app/forgotpassword", {
        email: email,
      })
      .then((response) => {
        console.log(response.status);
          toast.success(response.data.msg);
          state.forgotPassword = false;
          state.verify = true;
    }).catch((err)=>{
        toast.error("User Not found");
    });
  };
  return (
    <>
      <AnimatePresence>
        {snap.forgotPassword && (
          <motion.div className="w-[100vw] h-[100vh] flex justify-center items-center" {...slideAnimation("up")}>
            <motion.div className="bg-white p-10 rounded shadow-xl h-[30vh]">
            <form className="flex justify-center align-center flex-col h-[100%]" onSubmit={handleSubmit}>
              <label className="font-bold text-lg">Enter Your Email</label>
              <input
                className="border-2 rounded border-gray-300 my-4 py-2 px-2"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
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

export default ForgotPassword;
