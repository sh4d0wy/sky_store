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
    addressPage:false
})

export default state;