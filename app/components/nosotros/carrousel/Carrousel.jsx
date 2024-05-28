'use client'
import { useState, useEffect } from "react";
import Image from "next/image";
import './Carrousel.css'
import img1 from "../../../../public/backgrounds/nosotros/ferre1.jpeg"
import img2 from "../../../../public/backgrounds/nosotros/ferre2.jpeg"
import img3 from "../../../../public/backgrounds/nosotros/ferre3.jpeg"

const Carrousel = ({autoPlay,showButtons}) => {

    const images = [img1,img2, img3];
    const [index, setIndex] = useState(0);
    
    
    
    useEffect(() => {
      if(autoPlay || !showButtons){
        const interval = setInterval(() => {
          selectImage(index,images)
        },3000);
      
        return () => clearInterval(interval)
      }
    }, [index, autoPlay, showButtons])
    
    
    const previous = () =>{
      selectImage(index, images, false);
    };
    
    const next = () =>{
     selectImage(index, images, true);
    }
    
    const selectImage = (index, images , next = true) => {
        const condition = next ?  index < images.length - 1 : index > 0;
        const nextIndex =  next ? (condition ? index + 1 : 0 ): condition? index -1 : images.length-1;
       
        setIndex(nextIndex)
    }
    
    
      return (
        <div className='carrousel w-736 h-736 ' style={{ animation: 'lazy ease-in 2s' }}>
            <Image 
            key={`${images[index].src}-${images[index]}`} 
            height={736}
            width={736}
            src={`${images[index].src}`}
            alt="ferreteria irontools" 
            className={`carrouselImg`}
            loading="lazy"
           />
            {   showButtons && (
                <>
                <button type='button' onClick={previous}> {"<"} </button>
                <button type='button' onClick={next}> {">"} </button>
                </>
            )}
           
        </div>
      )
    }
    
    export default Carrousel;