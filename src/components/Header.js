import React from 'react';

import './Header.css';

class Header extends React.Component {
	menuExpand(e) {
		let lines = document.querySelectorAll(".hamburger-line");
		lines.forEach(line => {
		    line.style.animationPlayState = "running";
		    line.onanimationend = () => {
				line.style.animationPlayState = "paused";
		    }
		});
		let nav = document.querySelector("nav");
		nav.style.animationPlayState = "running";
	    nav.onanimationend = () => {
			nav.style.animationPlayState = "paused";
	    }
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
				<div className='open-menu' onClick={this.menuExpand.bind(this)}>
					<div className="hamburger">
				      <div className="hamburger-line forward-animation" onAnimationIteration={this.animationIterationHandler.bind(this)}></div>
				      <div className="hamburger-line forward-animation" onAnimationIteration={this.animationIterationHandler.bind(this)}></div>
				      <div className="hamburger-line forward-animation" onAnimationIteration={this.animationIterationHandler.bind(this)}></div>
				    </div>
				</div>
				<nav onAnimationIteration={this.animationIterationHandler.bind(this)}>
					<div class="nav-button">Home</div>
					<div class="nav-button">Help</div>
					<div class="nav-button">About</div>
					<div class="nav-button">Lang</div>
				</nav>
			</header>
		);
	}
}

export default Header;