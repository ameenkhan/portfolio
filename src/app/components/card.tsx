import { ReactNode } from 'react';

interface CardProps {
  children: ReactNode;
}

export default function Card({ children, className }: CardProps) {
  return (
    <div className={`border rounded-md border-grau-600 p-4 ${className}`}>
      {children}
    </div>
  )
}