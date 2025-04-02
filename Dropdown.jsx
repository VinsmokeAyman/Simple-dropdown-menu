import React from 'react'
import { useState,useEffect } from 'react'
import { animate, motion, useAnimation } from 'framer-motion';
import Down from '../Icons/icons8-expand-arrow-50.png'


function Dropdown({info}) {

    const [OpenDropdown,setOpen] = useState(false)
    const [Selected,setSelected] = useState('Select an item')

  return (
    <div className='hover' onClick={() => {setOpen(!OpenDropdown)}} style={{display:'flex',backgroundColor:'#fff',alignItems:'center',justifyContent:'space-between',flexDirection:'row',position:'relative',width:'200px',height:'35px',borderRadius:'7px',border:'2px solid #2a56cc'}}>
        {OpenDropdown?<motion.div initial={{y:-10,opacity:0}} animate={{y:0,opacity:1}} transition={{duration:0.4}}  style={{padding:'10px 0',alignItems:'center',display:'flex',flexDirection:'column',backgroundColor:'#fff',position:'absolute',minHeight:'100px',width:'100%',borderRadius:'7px',boxShadow:' -5px 10px 20px 5px #C0C0C0',top:'50px'}}>
            {info.map((item) => (
                <div onClick={()=>{setSelected(item)}} className='hover2' style={{display:'flex',flexDirection:'row',alignItems:'center',justifyContent:'center',borderRadius:'7px',width:'75%',height:'30px',margin:'7px 0'}}>
                    <p className='Title' style={{fontSize:'16px',fontWeight:'600',color:'black',margin:'0 0 0 0px'}}> {item} </p>
                </div>
            ))}
        </motion.div>:''}
        <p className='Title' style={{fontSize:'16px',fontWeight:'600',color:'black',margin:'0 0 0 7px'}}>{Selected}</p>
        {!OpenDropdown?<img src={Down} style={{height:'20px',width:'20px',margin:'0 7px 0 0'}}/>:<img src={Down} style={{height:'20px',rotate:'180deg',width:'20px',margin:'0 7px 0 0'}}/>}
    </div>
  )
}

export default Dropdown