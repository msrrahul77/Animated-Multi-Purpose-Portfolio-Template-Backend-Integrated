import React from 'react';
import SectionTitle from '../components/SectionTitle';
import { teamData } from '../../public/data/teamData';
import TeamCard from '../components/teamComp/teamCard';

const Team = () => {
    return (
        <div className='py-20'>
            <SectionTitle title={'TEAM MEMBER'} des={`Lorem ipsum dolor sit amet, consectetur
            adipiscing elit Integer.`} />

            {/* team img cards  */}
            <div className='grid md:grid-cols-4 sm:gap-y-11.5 sm:grid-cols-2 grid-cols-1 py-25 md:gap-x-5 sm:gap-x-11.25 justify-center place-items-center gap-y-12.5'>
                {
                    teamData.map(item => {
                        return <TeamCard key={item.id} data={item} />
                    })
                }
            </div>
        </div>
    );
};

export default Team;