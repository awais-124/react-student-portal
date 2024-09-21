import React from 'react';

const RGBSpinner = () => {
  return (
    <div
      style={{
        width: '100px',
        height: '100px',
        position: 'relative',
        margin: '100px auto',
      }}
    >
      {[...Array(3)].map((_, index) => (
        <div
          key={index}
          style={{
            position: 'absolute',
            width: '100%',
            height: '100%',
            border: '4px solid transparent',
            borderTopColor: index === 0 ? 'red' : index === 1 ? 'green' : 'blue',
            borderRadius: '50%',
            animation: `spin 1.5s cubic-bezier(0.68, -0.55, 0.27, 1.55) infinite ${index * 0.5}s`,
          }}
        />
      ))}
      <style jsx>{`
        @keyframes spin {
          0% {
            transform: rotate(0deg);
          }
          100% {
            transform: rotate(360deg);
          }
        }
      `}</style>
    </div>
  );
};

export default RGBSpinner;
