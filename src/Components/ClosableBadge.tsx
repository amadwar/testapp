// src/components/ClosableBadge.tsx
import React from 'react';
import 'bootstrap/dist/js/bootstrap.bundle.min';

interface ClosableBadgeProps {
  text: string;
}

const ClosableBadge: React.FC<ClosableBadgeProps> = ({ text }) => {
  const [isVisible, setIsVisible] = React.useState(true);

  const handleClose = () => {
    setIsVisible(false);
  };

  return (
    <>
      {isVisible && (
        <span className="badge bg-primary p-2">
          {text}
          <span className="ml-2" style={{ cursor: 'pointer' }} onClick={handleClose}>
            &times;
          </span>
        </span>
      )}
    </>
  );
};

export default ClosableBadge;
