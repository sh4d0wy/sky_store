import React from "react";
import { useSnapshot } from "valtio";
import state from "../../store";
import { CiShoppingCart } from "react-icons/ci";
import { IoHeartOutline } from "react-icons/io5";
import { FaRegUser } from "react-icons/fa";
import { IoBag } from "react-icons/io5";
const Cart = () => {
  const snap = useSnapshot(state);
  console.log(snap.cartPage);

  const handlePage = ()=> {
    state.addressPage = true;
    state.cartPage = false;
  }
  const handleCart=()=>{
    state.showCart=false;
    state.prize=0;
    state.discount=0;
  }
  const handleDiscount=()=>{
    if(snap.promoCode=="skbhugra143"){
      state.discount=2;
    }
  }
  const setPromoCode=(e)=>{
    state.promoCode=e.target.value;
    console.log(snap.promoCode)
  }
  
  return( 
      <>
        {snap.cartPage &&
        (
          <div className="w-[100vw] h-[100vh] flex flex-col g-2 items-center ">
            <div className="flex gap-[29vw] w-[100vw] h-[7vh] m-[2vw]">
              <img src="./threejs.png" alt="logo" className="w-[4vw] h-[4vw]"/>
              <input type="text" placeholder="Search Products" className="h-[3vw] w-[25vw] p-2 border-0 border-b-2 border-solid border-b-gray-400 outline-0 "/>
              <div className="flex gap-5">
                <FaRegUser size={30}/>
                <IoHeartOutline size={30}/>
                <CiShoppingCart size={30}/>
              </div>
            </div>
            <hr className="w-[100vw]"/>
            <div className="flex gap-2 mt-[1.5vw]">
              <IoBag size={40}/>
              <h1 className="font-extrabold text-3xl">My Cart</h1>
            </div>
            <div className="flex gap-[5vw] mt-[4vw]">
              <div className={snap.showCart?"flex flex-col gap-5":"hidden"}>
                <hr className="w-[50vw]"/>
                <div className="flex gap-[5vw]">
                  <div></div>
                  <div className="flex flex-col gap-2">
                    <h1 className="font-bold text-l">Shirt</h1>
                    <p className="text-sm">Color:{snap.color}</p>
                    <p className="text-sm">Size:S</p>
                    <p className="text-sm">In stock</p>
                  </div>
                  <div className="flex flex-col gap-2">
                    <h1 className="font-bold text-l">Each</h1>
                    <h2 className="text-sm">${snap.prize}</h2>
                  </div>
                  <div className="flex flex-col gap-2">
                    <h1 className="font-bold text-l">Quantity</h1>
                    <div className="flex gap-3">
                      <button onClick={()=>state.Quantity=snap.Quantity-1} className=" border-2 border-solid border-b-gray-800 p-1">-</button>
                      <h4>{snap.Quantity}</h4>
                      <button onClick={()=>state.Quantity=snap.Quantity+1} className=" border-2 border-solid border-b-gray-800 p-1">+</button>
                    </div>
                  </div>
                  <div>
                    <h1 className="font-bold text-l">Total</h1>
                    <h2 className="text-sm font-bold">${(snap.prize*snap.Quantity)}</h2>
                  </div>
                </div>
                <div className="flex gap-6">
                  <button className="text-xs text-slate-500" onClick={handleCart}>Remove</button>
                  <button className="text-xs text-slate-500">Add to Wishlist</button>
                </div>
                <hr className="w-[50vw]"/>
                <div className="flex gap-[33vw]">
                  <div className="text-sm">{snap.Quantity} items</div>
                  <div className="text-sm font-bold">${(snap.prize*snap.Quantity)}</div>
                </div>
              </div>
              <div className="flex flex-col gap-[1vw] items-center">
                <div>
                  <p className="text-xs text-slate-600">ENTER PROMO CODE</p>
                  <div className="flex gap-0">
                    <input type="text" placeholder="Promo code" className="h-[3vw] w-[25vw] p-2 border-0 border-2 border-solid border-gray-400 outline-0 " onChange={setPromoCode}/>
                    <button className="bg-black text-white w-[8vw]" onClick={handleDiscount}>Submit</button>
                  </div>
                </div>
                <div className="flex flex-col text-sm text-slate-500 gap-[1vw]">
                  <div className="flex gap-[18vw]">
                    <span>Shipping cost</span>
                    <span>TBD</span>
                  </div>
                  <div className="flex gap-[21vw]">
                    <span>Discount</span>
                    <span>-${snap.discount}</span>
                  </div>
                  <div className="flex gap-[24vw]">
                    <span>Tax</span>
                    <span>TBD</span>
                  </div>
                  <hr className="w-[30vw]"/>
                  <div className="flex gap-[16vw] font-bold text-slate-900 font-l">
                    <span>Estimated Total</span>
                    <span>${(snap.prize*snap.Quantity)-snap.discount}</span>
                  </div>
                </div>
                <div>
                  <button className="w-[30vw] h-[3vw] mt-[2vw] rounded-md text-white" style={{ backgroundColor: `${snap.color}` }} onClick={handlePage}>Checkout</button>
                </div>
                {!snap.prize&&
                (
                  <div>
                    <p className="text-xs">Cart is Empty</p>
                  </div>
                )
                }
              </div>
            </div>

          </div>
        )}
      </>
  );
};
export default Cart;
