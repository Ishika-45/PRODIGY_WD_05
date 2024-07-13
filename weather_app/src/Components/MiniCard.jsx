import React, { useEffect, useState } from 'react';
import sun from '../assets/icons/sun.png';
import cloud from '../assets/icons/cloud.png';
import fog from '../assets/icons/fog.png';
import rain from '../assets/icons/rain.png';
import snow from '../assets/icons/snow.png';
import storm from '../assets/icons/storm.png';
import wind from '../assets/icons/windy.png';

const MiniCard = ({ time, temp, iconString ,risetime,settime}) => {
  const [icon, setIcon] = useState(sun);

  useEffect(() => {
    if (iconString) {
      if (iconString.toLowerCase().includes('cloud')) {
        setIcon(cloud);
      } else if (iconString.toLowerCase().includes('rain') || iconString.toLowerCase().includes('shower')) {
        setIcon(rain);
      } else if (iconString.toLowerCase().includes('fog') || iconString.toLowerCase().includes('haze') || iconString.toLowerCase().includes('mist')) {
        setIcon(fog);
      } else if (iconString.toLowerCase().includes('snow')) {
        setIcon(snow);
      } else if (iconString.toLowerCase().includes('thunder') || iconString.toLowerCase().includes('storm')) {
        setIcon(storm);
      } else if (iconString.toLowerCase().includes('clear')) {
        setIcon(sun);
      } else if (iconString.toLowerCase().includes('wind')) {
        setIcon(wind);
      }
    }
  }, [iconString]);

  return (
    <div className='glassCard w-[10rem] h-[15rem] p-4 flex flex-col'>
      <p className='text-center'>
      {new Date(time).toLocaleDateString('en', { weekday: 'long' })}
      </p>
      <hr/>
      <div className='w-full flex justify-center items-center flex-1'>
        <img src={icon} alt='weather' className='w-[4rem] h-[4rem]'/>
      </div>
      <p className='text-center font-bold mb-2'>
        {temp}&deg;C
      </p>
      <p className='text-center mb-1'>
        Sunrise:{risetime}
      </p>
      <p className='text-center mb-1'>
        Sunset:{settime}
      </p>
    </div>
  );
}

export default MiniCard;
