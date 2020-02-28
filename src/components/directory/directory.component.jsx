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
          linkUrl: 'shop/blonde'
        },
        {
          title: 'Dunkel',
          imageUrl: 'https://source.unsplash.com/9AgKficrJW4',
          id: 2,
          linkUrl: 'shop/dunkel'
        },
        {
          title: 'Bock',
          imageUrl: 'https://source.unsplash.com/RnWWjXpXQG4',
          id: 3,
          linkUrl: 'shop/bock'
        },
        {
          title: 'Stout',
          imageUrl: 'https://source.unsplash.com/xVjfRXJqCzs',
          size: 'large',
          id: 4,
          linkUrl: 'shop/stout'
        },
        {
          title: 'IPA',
          imageUrl: 'https://source.unsplash.com/tu2Zn6hoaDc',
          size: 'large',
          id: 5,
          linkUrl: 'shop/ipa'
        }
      ]
    };
  }
  render() {
    return (
      <div className='directory-menu'>
        {this.state.sections.map(({ title, imageUrl, id, size }) => (
          <MenuItem key={id} title={title} imageUrl={imageUrl} size={size} />
        ))}
      </div>
    );
  }
}

export default Directory;
