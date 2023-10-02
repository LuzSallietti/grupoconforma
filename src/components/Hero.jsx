import React from 'react'
import draw from '../assets/draw.png';
import { Button } from 'react-daisyui';

const Hero = () => {
  return (
    <>
    <section className='py-10 bg-origin-border bg-no-repeat bg-contain bg-right-bottom' style={{ backgroundImage: `url(${draw})`}}>
        <div className="grid max-w-screen-xl px-4 py-20 md:py-8 mx-auto lg:py-16 md:grid-cols-12 ">
            <div className="mr-auto place-self-center md:col-span-6 lg:col-span-7">
                <h1 className="max-w-2xl mb-4 text-4xl text-gray-600 font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl">Hacé realidad tu proyecto</h1>
                <p className="max-w-2xl mb-6 font-light text-gray-900 lg:mb-8 md:text-lg lg:text-xl">Invertí de manera segura. Te ofrecemos múltiples opciones para remodelar, ampliar o construir tu casa.</p>
                <Button color='secondary' animation="true" responsive="true">
                    Quiero saber más
                </Button>
                 
            </div>
                        
        </div>
    </section>
   </>
  )
}

export default Hero
