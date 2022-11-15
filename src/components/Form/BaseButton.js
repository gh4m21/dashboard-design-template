import React, { Children, cloneElement } from 'react';

const BaseButtons = ({
  type = 'justify-start',
  mb = '-mb-3',
  classAddon = 'mr-3 last:mr-0 mb-3',
  noWrap = false,
  children,
}) => {
  return (
    <div
      className={`flex items-center ${type} ${mb} ${
        noWrap ? 'flex-nowrap' : 'flex-wrap'
      }`}
    >
      {Children.map(children, (child) =>
        cloneElement(child, { className: classAddon })
      )}
    </div>
  );
};

export default BaseButtons;
