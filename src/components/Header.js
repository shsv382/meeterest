import React from 'react';

import './Header.css';

class Header extends React.Component {
	menuExpand(e) {
		let lines = document.querySelectorAll(".hamburger-line");
		lines.forEach(line => {
		    line.style.animationPlayState = "running";
		    line.onanimationend = () => {
				line.style.animationPlayState = "paused";
			    line.classList.toggle("reverse-animation");
		    }
		});	
	}

	animationIterationHandler(e) {
		e.target.style.animationPlayState = "paused";
		// e.target.classList.toggle("reverse-animation");
		// e.target.classList.toggle("forward-animation");
	}

	render() {
		return (
			<header className="head">
				<div className='logo'>Meeterest</div>
				<div className='menu' onClick={this.menuExpand.bind(this)}>
					<div className="hamburger">
				      <div className="hamburger-line forward-animation" onAnimationIteration={this.animationIterationHandler.bind(this)}></div>
				      <div className="hamburger-line forward-animation" onAnimationIteration={this.animationIterationHandler.bind(this)}></div>
				      <div className="hamburger-line forward-animation" onAnimationIteration={this.animationIterationHandler.bind(this)}></div>
				    </div>
				</div>
			</header>
		);
	}
}

export default Header;