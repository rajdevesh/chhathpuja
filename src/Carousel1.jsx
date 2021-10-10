import React from 'react';
import Chhath from './Chhath.jpg';
import Argh from './Argh.jpg';
import Atlake from './Atlake.jpg';
import Bihar from './Bihar.jpg';
import Daura from './Daura.jpg';
import DevoteeatGhat from './DevoteeatGhat.jpg';
import Dev from './Devotees.jpg';
import DPChhath from './DPChhath.jpg';
import EveningTime from './EveningTime.jpg';
import Foreginer from './Foreginer.jpg';
import GreatDevotee from './GreatDevotee.jpg';
import Kalsup from './Kalsup.jpg';
import LadiesDuringChhath from './LadiesDuringChhath.jpg';
import LadyinLake from './LadyinLake.jpg';
import MaleDevotees from './MaleDevotees.jpg';
import Thekua from './Thekua.jpg';
import BackgroundSlider from 'react-background-slider'
function Carousel1(){
    return(
        <>
        <BackgroundSlider
             images={[Chhath, Argh, Atlake, Bihar, Daura, DevoteeatGhat, Dev, DPChhath,
                 EveningTime, Foreginer, GreatDevotee, Kalsup, LadiesDuringChhath, LadyinLake, MaleDevotees, Thekua ]}
            duration={5} transition={2} />
        </>
    );
} 

export default Carousel1;



 
