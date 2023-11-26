import {Particles} from 'react-tsparticles';
import {loadFull} from 'tsparticles';
import React, {useCallback} from 'react';




const ParticlesContainer = () => {
	// init 

	const particlesInit = useCallback(async(engine)=> {
		await loadFull(engine);

	}, [])

	const particlesLoaed = useCallback(async () => {} ,[]);

	return (
	<Particles 
	className='w-full h-full absolute top-0 left-0'
	id='tsparticles' 
	init={particlesInit} 
	loaded={particlesLoaed}
	options={{
		fullScreen: {enable: false},
		background: {
			color:{
				value:''
			},
		},
		fpsLimit: 200,
		interactivity:{
			events: {
				onclick: {
					enable: false,
					mode: 'push'
				},
				onHover:{
					enable: true,
					mode: 'pulse',
					size: 8,
					duration: 1
				},
				resize: true,
			},
			modes:{
				push:{
					quantity: 150

				},
				repulse: {
					distance: 200,
					duration: 0.4,

				}
			}
		},
		particles:{
			color:{
				value: '#e68e2e',
			},
			links:{
				color: '#FFA600',
				distance: 200,
				enable: true,
				opacity: 0.9,
				width: 1.5
			},
			collisions: {
				enable: true,
			},
			move:{
				distance: 'none',
				enable: true,
				outMode:{
					default:'bounce'
				},
				random: false,
				speed: 1.5,
				straight: false,
			},
			number: {
				density: {
					enable: true,
					erea: 800,
				},
				value: 80
			},
			opacity:{
				value: 0.5,
			},
			shape:{
				type: 'traingle'
			},
			size: {
				value: {min: 2, max: 5},
			},
		},
		detectRetina: true,
	}}
   />	
	);
};

export default ParticlesContainer

