import React, { useRef } from 'react';
import Button from '../Button';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(useGSAP);

const Hero = ({ introFinished }) => {
    const containerRef = useRef(null);
    const mainTl = useRef(null);

    useGSAP(() => {

        gsap.config({
            force3D: true,
        });

        gsap.set(".animate-title", { y: -30, autoAlpha: 0 });
        gsap.set(".animate-bottom-text", { y: 30, autoAlpha: 0 });
        gsap.set(".animate-button", { y: 20, autoAlpha: 0 });
        gsap.set(".animate-box", { scale: 0, autoAlpha: 0 });
        gsap.set(".animate-line", { scaleX: 0 });

        //  Create Timeline
        mainTl.current = gsap.timeline({
            paused: true,
            defaults: { duration: 0.6, ease: 'power1.inOut' }
        });

        mainTl.current
            .to(".animate-button", { y: 0, autoAlpha: 1 })

            .to(".animate-box", { scale: 1, autoAlpha: 1, duration: 0.4 }, "-=0.3")
            .to(".animate-line", { scaleX: 1, stagger: 0.1 }, "-=0.1")
            .to(".animate-title", { y: 0, autoAlpha: 1 }, "<")
            .to(".animate-bottom-text", { y: 0, autoAlpha: 1 }, "<");

    }, { scope: containerRef });


    useGSAP(() => {
        if (introFinished) {
            mainTl.current?.play();
        } else {
            mainTl.current?.pause(0);
        }
    }, { dependencies: [introFinished] });

    return (
        <div ref={containerRef} className='flex px-2 sm:max-w-137.5 max-w-none md:max-w-240 mx-auto text-center sm:py-[10%] py-[15%] font-roboto items-center text-white justify-center flex-col'>

            <p className='animate-title font-extrabold leading-[45px] text-[30px] md:text-[48px] uppercase tracking-[6px] font-open-sans'>
                PLAY YOUR IMAGINATION
            </p>

            <div className='relative mt-[49px] mb-[34px]'>
                <div className='relative sm:w-[224px] w-[160px] md:w-[350px] h-1'>
                    {/* Left Line */}
                    <div className='animate-line absolute right-1/2 top-0 h-full w-1/2 origin-right bg-white' />
                    {/* Right Line */}
                    <div className='animate-line absolute left-1/2 top-0 h-full w-1/2 origin-left bg-white' />
                </div>
                <div className='animate-box h-2 absolute -translate-y-1/2 -translate-x-1/2 left-[50%] top-[50%] w-4 bg-white' />
            </div>

            <div className='animate-bottom-text'>
                <p className='sm:text-[18px] text-[20px] md:text-[24px] md:leading-[48px] sm:leading-[36px] leading-[40px] mb-[8px] tracking-[3px]'>
                    MSR Creation present Multi Purpose Website Theme
                </p>
                <p className='tracking-[3px] text-[14px] sm:text-[12px] md:text-[16px] leading-[32px]'>
                    Awesome Think - Awesome Design
                </p>
            </div>

            <div className='animate-button mt-[73px]'>
                <Button
                    text='our offer'
                    className='text-[12px] cursor-pointer tracking-[2px] py-3 px-10 uppercase'
                />
            </div>
        </div>
    );
};

export default Hero;