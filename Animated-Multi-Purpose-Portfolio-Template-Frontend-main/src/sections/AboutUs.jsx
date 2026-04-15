import React, { useEffect, useRef } from 'react';

import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import NormalTextAnimation from '../components/NormalTextAnimation';

gsap.registerPlugin(useGSAP, ScrollTrigger);

const AboutUs = ({ introFinish }) => {
    const aboutContainerRef = useRef(null);
    const titleDivRef = useRef(null);
    const tl = useRef(null);

    // Container Refs
    const container2Ref = useRef(null);
    const imgContainer = useRef(null);
    const imgRef = useRef(null);
    const container3Ref = useRef(null);
    useEffect(() => {
        if (introFinish && tl.current) {
            tl.current.play();
        }
    }, [introFinish]);

    useGSAP(() => {

        gsap.config({
            force3D: true,
        });

        tl.current = gsap.timeline({ paused: true })
            .from(titleDivRef.current.children, {
                y: 30,
                opacity: 0,
                duration: 0.8,
                stagger: 0.15,
                ease: 'power3.out'
            });


        gsap.timeline({
            scrollTrigger: {
                trigger: imgContainer.current,
                start: 'top 88%',
            },

        })
            .fromTo(imgContainer.current,
                {
                    autoAlpha: 0,
                    y: 36,
                    clipPath: 'inset(100% 0% 0% 0% round 4px)'
                },
                {
                    autoAlpha: 1,
                    y: 0,
                    clipPath: 'inset(0% 0% 0% 0% round 4px)',
                    duration: 1.25,
                    ease: 'power3.out'
                }
            )
            .fromTo(imgRef.current,
                {
                    scale: 1.12,
                    yPercent: 8,
                },
                {
                    scale: 1,
                    yPercent: 0,
                    duration: 1.5,
                    ease: 'power2.out'
                },
                0
            );


        gsap.from(container2Ref.current.children, {
            y: 40,
            opacity: 0,
            duration: 0.8,
            stagger: 0.2,
            ease: 'power3.out',
            scrollTrigger: {
                trigger: container2Ref.current,
                start: 'top 85%',

            }
        });


        gsap.from(container3Ref.current.children, {
            y: 40,
            opacity: 0,
            duration: 0.8,
            stagger: 0.2,
            ease: 'power3.out',
            scrollTrigger: {
                trigger: container3Ref.current,
                start: 'top 85%',

            }
        });

    }, { scope: aboutContainerRef });

    return (
        <div ref={aboutContainerRef} className='text-white py-20 overflow-hidden md:text-start text-center'>


            <div ref={titleDivRef} className='flex flex-col gap-y-[18px] items-center '>
                <p className='text-center tracking-[6px] font-extrabold text-header font-open-sans'>ABOUT US</p>
                <div className='w-[150px] overflow-hidden'>

                    <div className='w-full h-px bg-white/60' />
                </div>
                <p className='text-secondary'>Lorem ipsum dolor sit amet, consectetur adipiscing elit Integer.</p>
            </div>


            <div className="grid mt-[86px] items-center justify-center grid-cols-1 md:grid-cols-2 gap-x-[74px] gap-y-[42px]">


                <div className="order-1 md:order-2">
                    <div ref={container2Ref} className='flex flex-col gap-y-5'>
                        <NormalTextAnimation style={'text-[20px] font-bold font-open-sans'} text={'COMPANY'} />
                        <p className='text-secondary leading-5.25'>
                            Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece
                            of classical Latin literature from 45 BC, making it over 20 years old. Richard McClintock,
                            an oni Latin professor at Hampden-Sydney intedns Virginia, looked up one of the most
                            more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going
                            through the cites of the word in classical literature.
                        </p>
                    </div>
                </div>


                <div ref={imgContainer} className="order-2 flex items-center justify-center overflow-hidden  md:order-1 md:row-span-2">
                    <img ref={imgRef} className='w-fit will-change-transform' src="/images/aboutImg/pcImg.jpg" alt="pcImg" />
                </div>


                <div className="order-3 md:order-3">
                    <div className='flex flex-col gap-y-5'>
                        <NormalTextAnimation style={'text-[20px] font-bold font-open-sans'} text={'MISSION & VISION'} />
                        <div ref={container3Ref}>
                            <p className='text-secondary leading-5.25'>
                                Contrary to popular belief, Lorem Ipsum is not simply random text. It a has roots in a
                                piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard
                                McClintock, a Latin professor at Hampden-Sydney.
                            </p>
                            <p className='text-secondary leading-5.25'>
                                College in Virginia, looked up one of the more obscure Latin words, consect one man tur,
                                from a Lorem Ipsum passage, and going through the cites of the word in classical
                                literature.
                            </p>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default AboutUs;