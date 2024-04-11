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
		const chooseOne = Math.floor(Math.random() * iconList.length);
		setRandomIcon(iconList[chooseOne]);
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