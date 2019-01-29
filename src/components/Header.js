import React from 'react';

import './Header.css';

const Header = () => {

	return (
		<header className="head">
			<div className='logo'>meeterest</div>
			<div className='menu'>
				<div className="hamburger">
			      <div className="hamburger-line forward-animation"></div>
			      <div className="hamburger-line forward-animation"></div>
			      <div className="hamburger-line forward-animation"></div>
			    </div>
			</div>
		</header>
	);
}

export default Header;