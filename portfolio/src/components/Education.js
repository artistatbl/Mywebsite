import React from 'react'



const Details = ({Position, company, companyLink, time, address, work}) => {
	return <li className='my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col items-center justify-between'>
		<div>
			<h3 className='capitalize font-bold text-2xl'>{Position}&nbsp;<a href={companyLink}
			target="_blank"
			className='text-blue-500 capitalize'
			>@{company}</a> </h3>
			<span className='capitalize font-medium text-dark/70'>
				{time} | {address}
			</span>
			<p className='font-medium w-full'>
				{work}
			</p>
		</div>
	</li>
}




const Education = () =>{
	return (
		<div className='my-64'> 
		<h2 className='font-bold text-8xl mb-32 text-center w-full'> Education
			
			
			</h2>
			<div className='w-[75%] mx-auto relative'>
				<ul>
					<Details

Position="Shift Manager" company="BurgerKing"
companyLink=""
time=" 2019 - present"  address="Warrignton Brigde str"
work="is simply dummy text of the printing and typesetting industry.
 Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
  when an unknown printer took a galley of type and scrambled it to make a type specimen book"
					
					
					
					
					
					
					
					/>



				</ul>
			</div>
			
			 </div>
	)
}

export default Education;