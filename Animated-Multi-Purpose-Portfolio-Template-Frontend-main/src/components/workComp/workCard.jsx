/* eslint-disable react-hooks/refs */
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Link } from 'lucide-react';
import React, { useRef } from 'react';

gsap.registerPlugin(ScrollTrigger, useGSAP);

const WorkCard = ({ data }) => {
    const imgRef = useRef(null);
    const imgContainer = useRef(null);
    const linkRef = useRef(null);
    const overlayRef = useRef(null);


    const { contextSafe } = useGSAP({ scope: imgContainer });


    useGSAP(() => {
        gsap.config({
            force3D: true,
        });
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: imgContainer.current,
                start: 'top 88%',
            }
        });

        tl.fromTo(imgContainer.current,
            { autoAlpha: 0, y: 36, clipPath: 'inset(100% 0% 0% 0%)' },
            { autoAlpha: 1, y: 0, clipPath: 'inset(0% 0% 0% 0%)', duration: 1.25, ease: 'power3.out' }
        )
    }, { scope: imgContainer });


    const onMouseEnter = contextSafe(() => {

        gsap.to(overlayRef.current, { opacity: 1, duration: 0.4, ease: 'power2.out' });


        gsap.fromTo(linkRef.current,
            { y: 40, opacity: 0, scale: 0.5 },
            { y: 0, opacity: 1, scale: 1, duration: 0.6, ease: 'back.out(1.7)' }
        );


    });

    const onMouseLeave = contextSafe(() => {
        gsap.to(overlayRef.current, { opacity: 0, duration: 0.4, ease: 'power2.in' });
        gsap.to(linkRef.current, { y: -40, opacity: 0, scale: 0.5, duration: 0.4, ease: 'power2.in' });

    });

    return (
        <div
            ref={imgContainer}
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
            className='cursor-pointer will-change-transform group relative h-full w-full overflow-hidden'
        >

            <img
                ref={imgRef}
                className='h-full w-full will-change-transform object-cover transition-all duration-500 md:grayscale md:group-hover:grayscale-0 hover:scale-105'
                src={data.imgLink}
                alt={data.title || "Work Sample"}
            />

            <div
                ref={overlayRef}
                className='hidden absolute inset-0 bg-black/40 opacity-0 pointer-events-none md:flex items-center justify-center'
            >

                <div
                    ref={linkRef}
                    className='bg-white p-4 rounded-full text-black shadow-xl'
                >
                    <Link size={24} strokeWidth={2.5} />
                </div>
            </div>
        </div>
    );
};

export default WorkCard;