import {proxy} from "valtio";

const state = proxy({
    login:false,
    intro:true,
    canvas:true,
    loginpage:false,
    registerpage:false,
    color:'#efbd48',
    isLogoTexture: true,
    isFullTexture:false,
    logoDecal:'./threejs.png',
    fullDecal:'./threejs.png',
    cartPage:false,
    addressPage:false,
    paymentsPage:false,
    Quantity:1,
    prize:599,
    showCart:true,
    promoCode:"",
    discount:0,
    setSelected:false,
    setCard:false,
    setPaypal:false,
    setGooglePay:false,
    setApplePay:false,
    Card:true,
    forgotPassword:false,
    verify:false,
    resetPassword:false,
    updatePassword:false,
    email:"",
    userName:"",
    isModal:false
})

export default state;