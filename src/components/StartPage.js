import React from 'react';
import './StartPage.scss';

import CarouselList from './CarouselList';

class StartPage extends React.Component {
	constructor(props) {
		super(props);
		this.findCoupleClick = this.findCoupleClick.bind(this);
	}

	findCoupleClick(e) {
		const findCouple = document.querySelector(".find-couple");
		const setGender = document.querySelector(".set-gender");
		findCouple.classList.toggle("form-secondary");
		findCouple.classList.toggle("form-primary");
		findCouple.style.animationDirection = "reverse";
		findCouple.style.animationPlayState = "running";
		setGender.classList.toggle("form-primary");
		setGender.classList.toggle("form-secondary");
	}

	shouldComponentUpdate(nextProps, nextState) {
		return this.props !== nextProps;
	}

	render() {
		return (
			<React.Fragment>
				<form className="find-couple-form">
					<CarouselList />
					<div className="form-secondary find-couple">
						<h3>I'd be glad to...</h3>
						<input type="text" placeholder="go to the cinema" />
						<a href="#" className="action-anchor" onClick={this.findCoupleClick}>Find a couple</a>
					</div>
					<div className="form-secondary set-gender">
						<div className="set-gender-description">I'm {this.props.selfGender}</div>
						<div className="set-gender-icon" data-gender="male" onClick={this.props.setSelfGender}><span></span></div>
						<div className="set-gender-icon" data-gender="female" onClick={this.props.setSelfGender}><span></span></div>
						<div className="set-gender-description">find {this.props.findingGender}</div>
						<div className="set-gender-icon"><span></span></div>
						<div className="set-gender-icon"><span></span></div>
						<a href="#" className="action-anchor" className="show-candidates">Show candidates</a>
					</div>
				</form>
			</React.Fragment>
		)
	}
}

export default StartPage