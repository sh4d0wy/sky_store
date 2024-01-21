import React from "react";
import { useSnapshot } from "valtio";
import state from "../../store";

const Cart = () => {
  const snap = useSnapshot(state);
  console.log(snap.cartPage);
  return( 
   <>
        {snap.cartPage &&
        (
          <div style={{background:"Red",width:"100vw",height:"100vh"}}>
            <h2 style={{color:"white"}}>Hello</h2>
          </div>
        )}
    </>
  );
};
export default Cart;