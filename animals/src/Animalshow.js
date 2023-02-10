import './AnimalShow.css';
import { useState } from 'react';

import bird from './svg/bird.svg';
import cat from './svg/cat.svg';
import cow from './svg/cow.svg';
import dog from './svg/dog.svg';
import gator from './svg/gator.svg';
import heart from './svg/heart.svg';
import horse from './svg/horse.svg';

const svgMap = {
    //as key is identical to value we can use it like this
    
    bird,
    cat,
    cow,
    dog,
    gator,
    horse
};





function Animalshow({ type }){
    const [clicks , setclicks] = useState(0);


    const handleClick = () => {
        setclicks(clicks+1);
    };


    return (
    <div className = 'animal-show' onClick={handleClick}>
        <img className = 'animal' alt = "picture" src = {svgMap[type]} />
        <img className = 'heart' alt = "heart" src = {heart} style = {{width: 10 + 10 * clicks + 'px' }} />
    </div>
    )

}
export default Animalshow;