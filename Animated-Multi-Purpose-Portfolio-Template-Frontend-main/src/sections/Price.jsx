import React, { useRef } from 'react';
import SectionTitle from '../components/SectionTitle';
import { priceData } from '../../public/data/priceData';
import PriceCard from '../components/priceComp/PriceCard';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger, useGSAP);

const Price = () => {
    const sectionContainerRef = useRef(null);
    const cardContainerRef = useRef(null);

    useGSAP(() => {
        const cards = gsap.utils.toArray('.priceCard');
        let mm = gsap.matchMedia();
        mm.add({
            
            isDesktop: "(min-width: 768px)",
            isMobile: "(max-width: 767px)"
        }, (context) => {
            let { isDesktop } = context.conditions;

            if (isDesktop) {
                
                gsap.from(cards, {
                    y: 60,
                    opacity: 0,
                    stagger: 0.1,
                    duration: 1,
                    ease: 'power3.out',
                    scrollTrigger: {
                        trigger: cardContainerRef.current,
                        start: 'clamp(top 85%)',
                    }
                });
            } else {
               
                cards.forEach((card) => {
                    gsap.from(card, {
                        y: 40,
                        opacity: 0,
                        duration: 0.8,
                        ease: 'power2.out',
                        scrollTrigger: {
                            trigger: card,
                            start: 'clamp(top 90%)',
                            
                        }
                    });
                });
            }
        });

    }, { scope: sectionContainerRef });

    return (
        <section ref={sectionContainerRef} className="py-20">
            <SectionTitle
                title={'PRODUCT PRICE'}
                des={`Lorem ipsum dolor sit amet, consectetur adipiscing elit Integer.`}
            />

            <div ref={cardContainerRef} className='grid grid-cols-1 md:grid-cols-3 mt-[82px] gap-x-[20px] gap-y-10 justify-items-center'>
                {
                    priceData.map(item => {
                        return <PriceCard data={item} key={item.id} />;
                    })
                }
            </div>
        </section>
    );
};

export default Price;