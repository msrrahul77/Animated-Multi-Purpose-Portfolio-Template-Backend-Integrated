import React from 'react';
import SectionTitle from '../components/SectionTitle';

import InfiniteSlider from '../components/testimonialsComp/Slider';
import Slider from '../components/testimonialsComp/Slider';

const Testimonials = () => {
    return (
        <div className='py-20'>
            <SectionTitle title={'CLIENT SAYS'} des={`Lorem ipsum dolor sit amet, consectetur adipiscing elit Integer.`} />

            <div className='overflow-hidden'>
                <Slider/>
            </div>
        </div>
    );
};

export default Testimonials;