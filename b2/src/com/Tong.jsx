import React from 'react';
import { Header } from './Header';
import { Footer } from './Footer';
import { Listitem } from './Listitem';

export const Tong = () => {
  return (
    <div className='warper'>
      <Header/>
      <Listitem/>
      <Footer/>
    </div>
  )
}
