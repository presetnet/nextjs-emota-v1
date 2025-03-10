// app/page.tsx
import PreGame from '@/components/PreGame';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Ezra Meeker\'s Oregon Trail Adventure',
  description: 'A challenging 8-bit Oregon Trail game with mini-games and survival mechanics',
};

export default function Page() {
  return (
    <div style={{ minHeight: '100vh', padding: '20px' }}>
      <main>
        <h1
          id="title"
          style={{
            color: '#32CD32',
            fontFamily: 'monospace',
            textAlign: 'center',
            fontSize: '48px',
            fontWeight: 'bold',
            animation: 'flash 1s infinite',
          }}
        >
          Ezra Meeker\'s Oregon Trail Adventure
        </h1>
        <PreGame />
      </main>
      <style>
        {`
          @keyframes flash {
            0% { opacity: 1; }
            50% { opacity: 0.3; }
            100% { opacity: 1; }
          }
        `}
      </style>
    </div>
  );
}
