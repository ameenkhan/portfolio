'use client';
import { useState } from 'react';

function Card({ children }) {
  return (
    <div className="border rounded-md border-grau-600 p-4">
      {children}
    </div>
  )
}

export default function Home() {
  const [label, setLabel] = useState('Show');
  const name = "Ameen";
  const handleClick = (e) => {
    setLabel(label == 'Show' ? 'Hide' : 'Show');
  }

  return (
    <>
      <div className="p-20 space-y-10">
        <div>Hello, {name}</div>
        <Card>This is being passed</Card>
        <Card>
          <div>This is JS!</div>
          <Card>Nested text!</Card>
        </Card>
        <Card />
        <Card />
        <Card />

        <button onClick={handleClick}>{label}</button>
      </div>
    </>
  );
}
