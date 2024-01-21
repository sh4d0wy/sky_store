import React from "react";
import { useSnapshot } from "valtio";
import state from "../../store";

const Cart = () => {
  const snap = useSnapshot(state);
  console.log(snap.cartPage);
  const handlePage = ()=> {
    state.addressPage = true;
    state.cartPage = false;
  }
  return( 
   <>
        {snap.cartPage &&
        (
          <div style={{background:"Red",width:"100vw",height:"100vh"}}>
            <h2 style={{color:"white"}}>Hello</h2>
            <button onClick={handlePage}>Addresspage</button>
          </div>
        )}
    </>
  );
};
export default Cart;