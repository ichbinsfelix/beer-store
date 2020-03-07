import React from 'react';

import MenuItem from '../menu-item/menu-item.component';

import './directory.styles.scss';

class Directory extends React.Component {
	constructor() {
		super();

		this.state = {
			sections: [
				{
					title: 'Lager',
					imageUrl: 'https://source.unsplash.com/o2hRqvFYJWY',
					id: 1,
					linkUrl: 'lager',
				},
				{
					title: 'Dunkel',
					imageUrl: 'https://source.unsplash.com/9AgKficrJW4',
					id: 2,
					linkUrl: '',
				},
				{
					title: 'Bock',
					imageUrl: 'https://source.unsplash.com/RnWWjXpXQG4',
					id: 3,
					linkUrl: '',
				},
				{
					title: 'Stout',
					imageUrl: 'https://source.unsplash.com/xVjfRXJqCzs',
					size: 'large',
					id: 4,
					linkUrl: '',
				},
				{
					title: 'IPA',
					imageUrl: 'https://source.unsplash.com/tu2Zn6hoaDc',
					size: 'large',
					id: 5,
					linkUrl: '',
				},
			],
		};
	}
	render() {
		return (
			<div className="directory-menu">
				{this.state.sections.map(({ id, ...otherSectionProps }) => (
					<MenuItem key={id} {...otherSectionProps} />
				))}
			</div>
		);
	}
}

export default Directory;
