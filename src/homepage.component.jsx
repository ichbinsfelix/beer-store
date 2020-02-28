import React from 'react';
import App from './App';
import './homepage.styles.scss';

const HomePage = () => (
  <div className='homepage'>
    <div className='directory-menu'>
      <div className='menu-item'>
        <div className='content'>
          <h1 className='title'>Blonde</h1>
          <span className='subtitle'>Lager</span>
        </div>
      </div>
      <div className='menu-item'>
        <div className='content'>
          <h1 className='title'>Dunkel</h1>
          <span className='subtitle'>Lager</span>
        </div>
      </div>
      <div className='menu-item'>
        <div className='content'>
          <h1 className='title'>Bock</h1>
          <span className='subtitle'>Lager</span>
        </div>
      </div>
      <div className='menu-item'>
        <div className='content'>
          <h1 className='title'>Stout</h1>
          <span className='subtitle'>Lager</span>
        </div>
      </div>
      <div className='menu-item'>
        <div className='content'>
          <h1 className='title'>IPA</h1>
          <span className='subtitle'>Lager</span>
        </div>
      </div>
    </div>
  </div>
);

export default HomePage;
