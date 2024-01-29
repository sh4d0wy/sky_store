import axios from 'axios'
import React, { useState } from 'react'
import { useSnapshot } from 'valtio'
import state from '../../store'
import toast from 'react-hot-toast'

const ChangePass = () => {
  const snap = useSnapshot(state)
  const [oldpass,setOldpass] = useState("");
  const [newpass,setNewpass] = useState("");

  const handleSubmit = async ()=>{
    await axios
      .put("https://erin-faithful-scarab.cyclic.app/updatepassword", {
        userName:snap.userName,
        oldpassword:oldpass,
        newpassword:newpass
      })
      .then((response) => {
        toast.success("Password updated successfully");
        state.updatePassword = !state.updatePassword;
      })
      .catch(() => {
        toast.error("Password is incorrect!");
      });
  }
  return (
    <>
    {snap.updatePassword && (
        <div className='w-[100vw] h-[100vh] absolute z-100 flex justify-center items-center'>
        <div className='w-[100vw] h-[100vh] absolute z-102 bg-black opacity-30'>
        </div>
        <div className='w-[30vw] h-[40vh] rounded-lg flex flex-col px-12 items-center justify-center bg-white relative z-103 opacity-100 shadow-xl'>
                <div className='text-lg font-bold flex items-center justify-between w-[100%] m-3'>
                    Old Password
                <input type="text" value={oldpass} onChange={(e)=>setOldpass(e.target.value)} className='w-[10vw] text-sm p-2 py-1 h-100 border-slate-100 border-3 shadow-lg bg-slate-100'/>
                </div>
                <div className='text-lg font-bold flex items-center justify-between w-[100%] m-3'>
                    New Password
                <input type="text" value={newpass} onChange={(e)=>setNewpass(e.target.value)}className='w-[10vw] text-sm p-2 py-1 h-100 border-slate-100 border-3 shadow-lg bg-slate-100'/>
                </div>
                <div className='text-lg font-bold flex items-center justify-between w-[100%] m-3'>
                   Confirm New Password
                <input type="text" className='w-[10vw] text-sm p-2 py-1 h-100 border-slate-100 border-3 shadow-lg bg-slate-100'/>
                </div>
                <button className='rounded bg-yellow-300 shadow-lg text-white py-2 px-3 mt-5' onClick={handleSubmit}>Submit</button>
        </div>
        </div>
    )}
    </>
  )
}

export default ChangePass