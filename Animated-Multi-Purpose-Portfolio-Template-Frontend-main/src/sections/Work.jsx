import React from 'react';
import SectionTitle from '../components/SectionTitle';
import { workData } from '../../public/data/workData';
import WorkCard from '../components/workComp/workCard';

const Work = () => {
    return (
        <div className='py-20'>
            <SectionTitle title={`OUR WORK`} des={`Lorem ipsum dolor sit amet, consectetur adipiscing elit Integer.`}/>

            {/* work card section  */}
            <div className='mt-21.25 grid grid-cols-2 md:grid-cols-3'>
                {
                    workData.map(item=>{
                        return <WorkCard key={item.id} data={item}/>
                    })
                }
            </div>
        </div>
    );
};

export default Work;