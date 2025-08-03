import React from 'react';
import logo from '/S 1.png'
const Footer = () => {
    return (
        <footer className="px-4 py-6 ">
	<div className="max-w-[1290px]  flex flex-wrap items-center justify-center mx-auto space-y-4 sm:justify-between sm:space-y-0">
		<div className="flex flex-row pr-3 space-x-4 sm:space-x-8">
			<div className="flex items-center gap-4 justify-center   ">
				<img src={logo} alt="" />
                <p className='text-gray-600'>Copyright by 2019 Dev, Inc</p>
			</div>
			
		</div>
		<ul className="flex flex-wrap pl-3 space-x-4 text-gray-600 sm:space-x-8">
			<li>
				<a rel="noopener noreferrer" href="#">Home</a>
			</li>
			<li>
				<a rel="noopener noreferrer" href="#">Adversite</a>
			</li>
			<li>
				<a rel="noopener noreferrer" href="#">Supports</a>
			</li>
			<li>
				<a rel="noopener noreferrer" href="#">Marketing</a>
			</li>
			<li>
				<a rel="noopener noreferrer" href="#"> FAQ</a>
			</li>
		</ul>
	</div>
</footer>
    );
};
export default Footer;