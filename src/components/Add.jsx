import React, { useRef,useState,useEffect } from 'react';
import logo from './1.png';
import { IoMdCloseCircle } from "react-icons/io";
import { motion } from "framer-motion";
import './img.css'


const Add = () => {

    const ref = useRef();
    const handleClick = () =>{
        ref.current.style.display = 'none';
    }

  const [show, setShow] = useState(false);

  useEffect(() => {
    // trigger after component mounts
    setTimeout(() => {
      setShow(true);
    }, 1000); // small delay for smooth start
  }, []);

  return <>
   

    <div   ref={ref} style={{ height: "1500px", padding: "20px", position:'absolute',  }} className=''>
     

      <div

style={{
    position: 'fixed',
    top: "50%",
    left: "50%",
    transform: show
    ? "translate(-50%, -50%) scale(1)"
    : "translate(-50%, -50%) scale(0.8)",
    opacity: show ? 1 : 0,
          transition: "all 0.5s ease",
          background: "",
          
          padding: "10px",
          color: "#fff",
          borderRadius: "10px",
        }}
        className='p-1 z-10 mt-10'
        >
        <div id='main'  className='flex flex-col w-full'>  
            <button onClick={handleClick} className='self-end text-red-600 text-4xl bg-white  rounded-full flex justify-center items-center     '><IoMdCloseCircle className='cursor-pointer'/></button>
        <img id='img' src={logo} alt="" className='h-150 '/>
        </div>
      </div>
    </div>
          
  
        </>
}


export default Add