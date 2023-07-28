import { useState } from 'react';
import bird from './images/bird.svg';
import cat from './images/cat.svg';
import cow from './images/cow.svg';
import dog from './images/dog.svg';
import gator from './images/gator.svg';
import horse from './images/horse.svg';
import heart from './images/heart.svg';
import './AnimalShow.css';

const svgMap = {
    bird,
    cat,
    cow,
    dog,
    gator,
    horse
}
export default function AnimalShow({ type }) {

    let [clicks, setClicks] = useState(0);

    const handleClick = () => {
        setClicks(clicks + 1);
    }

    return (
        <div onClick={handleClick} className='animal-show'>
            <img src={svgMap[type]} alt='animal' className='animal' />
            <img
                src={heart}
                alt='heart'
                style={{ width: 10 + 10 * clicks + 'px', maxWidth: '80%' }} className='heart' />
        </div>
    )
}
