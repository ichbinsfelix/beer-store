const INITIAL_STATE = {
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
}

const directoryReducer = (state = INITIAL_STATE, action) => {
  switch (action.state) {
    default:
      return state
  }
}

export default directoryReducer
