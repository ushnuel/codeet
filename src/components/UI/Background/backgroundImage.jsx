import React from 'react';

const backgroundImage = ({ image, text, className, children }) => {
  const style = {
    backgroundImage: `url(${image})`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
  };
  return (
    <div style={style} className={className}>
      <div>{children}</div>
      <p>{text}</p>
    </div>
  );
};

export default backgroundImage;
