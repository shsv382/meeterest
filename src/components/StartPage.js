import React from 'react';
import './StartPage.scss';

class StartPage extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			selfGender: "male",
			findingGender: "female"
		}
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

	render() {
		return (
			<div className="container">
				<form className="find-couple-form">
					<div className="form-primary find-couple">
						<h3>I'd be glad to...</h3>
						<input type="text" placeholder="go to the cinema" />
						<a href="#" onClick={this.findCoupleClick}>Find a couple</a>
					</div>
					<div className="form-secondary set-gender">
						<div className="set-gender-description">I'm {this.state.selfGender}</div>
						<div className="set-gender-icon"><span></span></div>
						<div className="set-gender-icon"><span></span></div>
						<div className="set-gender-description">find {this.state.findingGender}</div>
						<div className="set-gender-icon"><span></span></div>
						<div className="set-gender-icon"><span></span></div>
						<a href="#" className="show-candidates">Show candidates</a>
					</div>
				</form>
			</div>
		)
	}
}

export default StartPage