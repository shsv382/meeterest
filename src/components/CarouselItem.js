import React from 'react';
import './CarouselItem.scss';

class CarouselItem extends React.Component {
	componentDidMount() {
		if (this.props.main) {
			let main = this.refs.Main;
			main.classList.remove("carousel-main-item");
			let t = setTimeout(() => {main.classList.add("carousel-main-item");}, 4);
		} else {
			let sibling = this.refs.Sibling;
			sibling.classList.remove("carousel-sibling-item");
			let t = setTimeout(() => {sibling.classList.add("carousel-sibling-item");}, 4);
		}
	}

	componentDidUpdate() {
		if (this.props.main) {
			let main = this.refs.Main;
			main.classList.remove("carousel-main-item");
			let t = setTimeout(() => {main.classList.add("carousel-main-item");}, 4);
		} else {
			let sibling = this.refs.Sibling;
			sibling.classList.remove("carousel-sibling-item");
			let t = setTimeout(() => {sibling.classList.add("carousel-sibling-item");}, 4);
		}
	}

	render() {
		return (
		      <li ref={this.props.main ? "Main" : "Sibling"}>
		      	<a href={this.props.item.href}>
		      		{this.props.item.title}
		      	</a>
		      </li>
		)
	}
}

export default CarouselItem;
