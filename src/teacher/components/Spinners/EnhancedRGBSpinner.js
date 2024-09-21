import React from 'react';

const EnhancedRGBSpinner = () => {
  const colors = ['#ff0000', '#ff7f00', '#ffff00', '#00ff00', '#0000ff', '#8b00ff'];

  return (
    <div
      style={{
        width: '100px',
        height: '100px',
        position: 'relative',
        margin: '100px auto',
      }}
    >
      {colors.map((color, index) => (
        <div
          key={index}
          style={{
            position: 'absolute',
            width: '100%',
            height: '100%',
            border: '4px solid transparent',
            borderTopColor: color,
            borderRadius: '50%',
            animation: `spin 1.5s cubic-bezier(0.68, -0.55, 0.27, 1.55) infinite ${index * 0.25}s`,
          }}
        />
      ))}
      <div className="lightning" />
      <style jsx>{`
        @keyframes spin {
          0% {
            transform: rotate(0deg);
          }
          100% {
            transform: rotate(360deg);
          }
        }
        @keyframes lightning {
          0%,
          100% {
            opacity: 0;
          }
          50% {
            opacity: 1;
          }
        }
        .lightning {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          width: 0;
          height: 0;
          border-left: 50px solid transparent;
          border-right: 50px solid transparent;
          border-bottom: 86.6px solid white;
          filter: blur(5px);
          animation: lightning 0.5s linear infinite, spin 5s linear infinite;
        }
        .lightning::before {
          content: '';
          position: absolute;
          top: 86.6px;
          left: -50px;
          width: 0;
          height: 0;
          border-left: 50px solid transparent;
          border-right: 50px solid transparent;
          border-top: 86.6px solid white;
          filter: blur(5px);
        }
      `}</style>
    </div>
  );
};

export default EnhancedRGBSpinner;
