import React from 'react';
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHippo, faOtter, faFish, faDragon, faKiwiBird, faWorm, faSpider, faShrimp, faShieldDog, faShieldCat, faPaw } from '@fortawesome/free-solid-svg-icons';

import './MyButton.css';

const MyButton = () => {
	const icons = [faHippo, faOtter, faFish, faDragon, faKiwiBird, faWorm, faSpider, faShrimp, faShieldDog, faShieldCat, faPaw];
	const [randomIcon, setRandomIcon] = useState();
	const clickHandle = () => {
		const chooseOne = Math.floor(Math.random() * icons.length);
		setRandomIcon(icons[chooseOne]);
	}
	return (
		<div className='btn'>
			<button onClick={() => {
				setTimeout(clickHandle, 3000)
			}}>
				Click me!
			</button>
			<div className='icon'>
				{randomIcon && <FontAwesomeIcon icon={randomIcon} />}
			</div>
		</div>
	);
};

export default MyButton;