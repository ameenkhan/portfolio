import { ReactNode } from 'react';

interface CardProps {
    children: ReactNode;
}

export default function Card({ children }: CardProps) {
    return (
        <div className="border rounded-md border-grau-600 p-4">
            {children}
        </div>
    )
}