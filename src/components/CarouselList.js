import React from 'react';
import CarouselItem from './CarouselItem'
import './CarouselList.scss';

class CarouselList extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			currentMainItem: 0,
			items: [
				{title: "Наука",  href: "/users"},
				{title: "Культура", href: "/users"},
				{title: "Спорт",  href: "/users"},
				{title: "Туризм", href: "/users"},
				{title: "Кино",  href: "/users"},
				{title: "Литература", href: "/users"},
				{title: "Развлечения",  href: "/users"},
				{title: "Кафе", href: "/users"},
			]
		}
	}

	changeMain(e) {
		e.preventDefault();
		e.stopPropagation();
		if (e.type.toLowerCase() === "wheel") e.deltaY = e.deltaY / 25;
		 if (e.type.toLowerCase() === "wheel" || e.type.toLowerCase() === "touchmove") {
			this.setState({
				currentMainItem: (this.state.currentMainItem + (e.deltaY < 0 ? -1 : 1) + this.state.items.length) % this.state.items.length
			});
		}
		return false;
	}

	render() {
		let items = [
			this.state.items[(this.state.currentMainItem - 2 + this.state.items.length) % this.state.items.length],
			this.state.items[(this.state.currentMainItem - 1 + this.state.items.length) % this.state.items.length],
			this.state.items[this.state.currentMainItem],
			this.state.items[(this.state.currentMainItem + 1) % this.state.items.length],
			this.state.items[(this.state.currentMainItem + 2) % this.state.items.length]
		].map((item, i) => {
			return <CarouselItem item={item} main={ i === 2 } />
		});
		return (
			<React.Fragment>
			<ul className="category-carousel form-primary" onTouchMove={this.changeMain.bind(this)} onWheel={this.changeMain.bind(this)}>
		      {items}
		    </ul>
		    </React.Fragment>
		)
	}
}

export default CarouselList;
