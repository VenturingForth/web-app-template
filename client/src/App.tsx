import { useEffect, useState } from 'react';
import { getHealth } from './api';

export default function App() {
  const [status, setStatus] = useState('checking…');

  useEffect(() => {
    getHealth()
      .then((health) => setStatus(health.status))
      .catch(() => setStatus('unreachable'));
  }, []);

  return (
    <main>
      <h1>Web App</h1>
      <p>
        Server status: <span data-testid="server-status">{status}</span>
      </p>
    </main>
  );
}
