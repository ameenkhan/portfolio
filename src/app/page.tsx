'use client';
import { useState } from 'react';
import Card from './card';

export default function Home() {
  const [isVisible, setIsVisible] = useState(true);
  const [names, setNames] = useState(['Ameen', 'John', 'Doe']);

  const handleClick = (e) => {
    setIsVisible(!isVisible);
  }

  const handleAdd = (e) => {
    setNames([...names, 'New element!']);
  }

  const cards = isVisible && names.map((name, index) => <Card key={index}>{name}</Card>);

  const name = "Ameen";
  return (
    <>
      <div className="p-20 space-y-10">
        <div>Hello, {name}</div>

        {cards}

        <div className='flex space-x-4'>
          <button onClick={handleClick}>
            {isVisible ? 'Hide' : 'Show'}
          </button>
          <button onClick={handleAdd}>Add</button>
        </div>
      </div>
    </>
  );
}
