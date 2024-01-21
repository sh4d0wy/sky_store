import React from 'react'
import styles from "./Payments.module.css";
import { useSnapshot } from 'valtio';
import { AnimatePresence,motion } from 'framer-motion';
import state from '../../store';

const Payments = () => {
    const snap = useSnapshot(state);
    return (
        <>
        <AnimatePresence>
            {snap.paymentsPage && (
                <motion.div className="w-full h-full bg-red-500">
                    <h1 className="font-bold">My payments</h1>
                </motion.div>
            )}
        </AnimatePresence>
        </>
    )
}
export default Payments;