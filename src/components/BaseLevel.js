import React from 'react';

const BaseLevel = ({
  mobile = false,
  type = 'justify-between',
  className = '',
  children,
}) => {
  const parentClass = `${type} items-center`;

  const parentMobileClass = 'flex';

  const parentBaseClass = 'block md:flex';

  return (
    <div
      className={`${parentClass} ${className} ${
        mobile ? parentMobileClass : parentBaseClass
      }`}
    >
      {children}
    </div>
  );
};

export default BaseLevel;
