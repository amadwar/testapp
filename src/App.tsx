// src/App.tsx
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import ClosableBadge from './Components/ClosableBadge';

const App: React.FC = () => {
  return (
    <div className="container mt-5">
      <ClosableBadge text="Programmieren" />
    </div>
  );
};

export default App;
