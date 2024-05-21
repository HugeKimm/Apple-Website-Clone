//import React, { useRef } from 'react'
import { iguaneImg } from '../utils' ;
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { animateWithGsap } from '../utils/animations'; 

const Images = () => {
    useGSAP(() =>{
        gsap.from('#image', {
            scrollTrigger:{
                trigger: '#image',
                start:'20% bottom'
            },
            opacity: 0,
            scale: 1,
            duration: 3,
            ease:'power2.inOut'
        })

       animateWithGsap('.g_fadeIn',{
            opacity: 1,
            y: 0,
            duration: 1,
            ease:'power2.inOut'
       })
    }, );



  return (
    <section className="h-full common-padding relative overflow-hidden">
        <div className="screen-max-width" style={{ paddingTop: '200px' }}>
            <div className="flex flex-col items-center">
                <h2 className="hiw-title">
                    Surreal photos and larger than life.
                </h2>
                <p className="hiw-subtitle">
                    From extreme framing flexibility to next-generation portraits, 
                    discover all the creative possibilities offered by the most powerful photo system on iPhone.   
                </p>

            </div>

            <div id="image" className="flex-center w-full my-20">
                <img 
                    src={iguaneImg} 
                    alt="image" 
                    width={1300} 
                    height={1000} 
                    
                />
            </div>


       
        </div>

    </section>
  )
}

export default Images;
