import React from 'react';
import PropTypes from 'prop-types';

const BaseIcon = ({
  Icon,
  w = 'w-6',
  h = 'h-6',
  size = null,
  className = '',
}) => {
  const iconSize = size ?? 16;

  return (
    <span
      className={`inline-flex justify-center items-center ${w} ${h} ${className}`}
    >
      <Icon size={iconSize} className={`${className} mx-auto`} />
    </span>
  );
};

BaseIcon.propTypes = {
  Icon: PropTypes.any,
  className: PropTypes.string,
  w: PropTypes.string,
  h: PropTypes.string,
  size: PropTypes.string,
};

export default BaseIcon;
