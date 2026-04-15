import React from 'react';
import Button from '../Button';

const PriceCard = ({ data }) => {
    const features = (data?.des || '')
        .split('\n')
        .map((item) => item.trim())
        .filter(Boolean);

    return (
        <div className='group priceCard w-full max-w-80 bg-white border border-zinc-200 p-8 md:p-3 lg:p-8 transition-[border-color] duration-300 hover:border-zinc-400'>
            <p className='text-xs tracking-[2px] uppercase text-zinc-500'>
                {data.name}
            </p>

            <div className='mt-5 flex items-end gap-2'>
                <p className='text-4xl font-semibold text-zinc-900'>
                    {data.price}
                </p>
                <p className='text-xs text-zinc-400 mb-1'>
                    /{data.type}
                </p>
            </div>

            <div className='my-6 h-px bg-zinc-100' />

            <ul className='space-y-4'>
                {features.map((feature) => (
                    <li key={feature} className='flex items-start gap-3 text-sm text-zinc-600'>
                        <span className='mt-2 h-px w-4 bg-zinc-300' />
                        <span className='leading-relaxed'>
                            {feature}
                        </span>
                    </li>
                ))}
            </ul>

            <Button className='bg-black mt-5 text-white border-black cursor-pointer' text={'order now'} />
        </div>
    );
};

export default PriceCard;