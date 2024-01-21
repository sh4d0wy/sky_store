import React from "react";
import { useSnapshot } from "valtio";
import state from "../../store";

const Cart = () => {
  const snap = useSnapshot(state);
  return( 
   <>
        {(!snap.login && snap.cartPage) &&
        (
            <h2>Hello</h2>
        )}
    </>
  );
};
export default Cart;