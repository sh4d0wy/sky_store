import {proxy} from "valtio";

const state = proxy({
    login:false,
    intro:true,
    color:'#efbd48',
    isLogoTexture: true,
    isFullTexture:false,
    logoDecal:'./threejs.png',
    fullDecal:'./threejs.png'
})

export default state;