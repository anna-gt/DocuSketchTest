import React from 'react';
import { useState } from 'react';

import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import * as Icons from '@fortawesome/free-solid-svg-icons';

const iconList = Object
  .keys(Icons)
  .filter(key => key !== "fas" && key !== "prefix" )
  .map(icon => Icons[icon])

library.add(...iconList)

import './MyButton.css';

const MyButton = () => {
	const [randomIcon, setRandomIcon] = useState();

	const clickHandle = () => {
		setTimeout(() => {
			const chooseOne = Math.floor(Math.random() * iconList.length);
			setRandomIcon(iconList[chooseOne]);
		}, 3000)
	};
	
	return (
		<div className='btn'>
			<button data-testid="btn" onClick={clickHandle}>
				Click me!
			</button>
			<div className='icon'>
				{randomIcon && <FontAwesomeIcon icon={randomIcon} data-testid="awesomeIcon"/>}
			</div>
		</div>
	);
};

export default MyButton;