import React from 'react';
import { Item } from './Item';

export const Listitem = () => {
    const array = ['Clean up bedroom', 'Buy some milk', 'Jogging','Learn React', 'Doing Exercises']
  return (
    <div className='listitem'>{ array.map ((el) => {
        return Item(el);
    })}
    </div>
  )
}
