'use client';

import { useState } from 'react';
import Card from '@/app/components/card';

export default function Home({ searchParams }) {
  const [isVisible, setIsVisible] = useState(true);
  const [names, setNames] = useState(['Ameen', 'John', 'Doe']);

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    console.log(e);
    setIsVisible(!isVisible);
  }

  const handleAdd = (e: React.MouseEvent<HTMLButtonElement>) => {
    console.log(e);
    setNames([...names, 'New element!']);
  }

  const cards = isVisible && names.map((name, index) => <Card key={index}>{name}</Card>);

  const name = "Ameen";

  console.log(searchParams);
  if (searchParams.error) throw new Error('oops');;

  return (
    <>
      <div className="space-y-10">
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
