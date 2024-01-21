import React,{useState,useEffect} from 'react'
import { AnimatePresence,motion } from 'framer-motion';
import {useSnapshot} from 'valtio';
import confid from '../config/config';
import state from "../store";
import {download} from '../assets';
import {downloadCanvasToImage,reader} from '../config/helpers';
import {EditorTabs,FilterTabs,DecalTypes} from '../config/constants'
import {fadeAnimation,slideAnimation } from '../config/motion'
import { Aipicker,Colorpicker,CustomButton,Filepicker,Tab } from '../Components';
import { Link } from 'react-router-dom';

const Customizer = () => {
  const snap = useSnapshot(state);
  const [file,setFile] = useState('')
  const [prompt,setPrompt] = useState('')
  const [generatingImg,setGeneratingImg] = useState(false)
  const [activeEditorTab, setActiveEditorTab] = useState("");
  const [activeFilterTab,setActiveFilterTab] =useState({
    logoShirt:true,
    stylishShirt:false
  })

  //function to show the tab content 
  const generateTabContent = ()=>{
    switch(activeEditorTab){
      case "colorpicker":
        return <Colorpicker />
      case "filepicker":
        return <Filepicker
          file={file}
          setFile={setFile}
          readFile = {readFile}
        />
      case "aipicker":
        return <Aipicker
          prompt={prompt}
          setPrompt={setPrompt}
          generatingImg={generateImg}
          handleSubmit={handleSubmit}
        />
      default:
        return null;
    }
  }

  const handleSubmit = async(type)=>{
      if(!prompt) return alert("Please enter the prompt")

      try{

      }catch(e){
        alert(e)
      }finally{
        setGeneratingImg(false);
        setActiveEditorTab("")
      }
  }
  const handleDecals = (type,result)=>{
    const decalType = DecalTypes[type];
    state[decalType.stateProperty] = result;
    if(!activeFilterTab[decalType.filterTab]){
      handleActiveFilterTab(decalType.filterTab)
    }
  }
  const handleActiveFilterTab = (tabName)=>{
    switch(tabName){
      case "logoShirt":
        state.isLogoTexture = !activeFilterTab[tabName];
        break;
      case "stylishShirt":
        state.isFullTexture = !activeFilterTab[tabName];
        break;
      default:
        state.isFullTexture = false;
        state.isLogoTexture = true;
    }
      setActiveFilterTab((prev)=>{
        return({
          ...prev,
        [tabName]:!prev[tabName]
        })
      })
    
  }
  const readFile = (type)=>{
    reader(file)
      .then((result)=>{
        handleDecals(type,result)
        setActiveEditorTab("")
      })
  }

  const handleState = ()=>{
    state.login= true;
    state.registerpage = true;
  }
  return (
    <AnimatePresence>
      {(!snap.intro && !snap.login && !snap.cartPage)&& (
         <>
         <motion.div 
         key="custom"
         className="absolute top-0 left-0 z-10"
         {...slideAnimation('left')}
         >
          <div className="flex items-center min-h-screen">
            <div className='editortabs-container tabs glassmorphism'>
              {EditorTabs.map((tab)=>(
                <Tab 
                  key={tab.name}
                  tab={tab}
                  handleclick={()=>setActiveEditorTab(tab.name)}
                />
              ))}
              {generateTabContent()}
            </div>
          </div>
         </motion.div>
         <motion.div
          className='absolute z-10 top-5 right-5'
          {...fadeAnimation}
         >
            <CustomButton
              type="filled"
              title="Go back"
              handleClick={()=>state.intro = true}
              customStyles="w-fit px-4 py-2.5 font-bold text-sm"
            />
         </motion.div>
         <motion.div
          className='absolute z-10 right-40 bottom-60'
          {...fadeAnimation}
         >
            <motion.div className="absolute z-10 right-30 bottom-10">
              <h1 className="text-5xl mb-2 font-bold ">599Rs</h1>
              <p className='text-xs w-52 mb-3'>Prices inclusive of all taxes</p>
            </motion.div>
            <Link to="/login" >
              <CustomButton
                type="filled"
                title="Buy Now"
                handleClick={handleState}
                customStyles="w-fit px-20 py-2.5 text-white font-bold"
              />
            </Link>
         </motion.div>
         <motion.div
          className='filtertabs-container'
          {...slideAnimation('up')}
         >
          {FilterTabs.map((tab)=>(
                <Tab 
                  key={tab.name}
                  tab={tab}
                  isFilterTab
                  isActiveTab={activeFilterTab[tab.name]}
                  handleclick={()=>handleActiveFilterTab(tab.name)}/>
          ))}
         </motion.div>
         </>
      )}
    </AnimatePresence>
  )
}

export default Customizer;