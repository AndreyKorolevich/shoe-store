import React from 'react';
import Information from './Information/Information';
import Pay from './Pay/Pay';
import Contacts from './Contacts/Contacts';

const Footer: React.FC = () => (
  <footer className='container bg-light footer'>
    <div className='row'>
      <Information />
      <Pay />
      <Contacts />
    </div>
  </footer>
);

export default Footer;
