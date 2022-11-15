import React from 'react';
import PropTypes from 'prop-types';
import { useAppSelector } from '../../redux/hooks';

const OverlayLayer = ({
  zIndex = 'z-50',
  type = 'flex',
  children,
  ...props
}) => {
  const overlayStyle = useAppSelector((state) => state.style.overlayStyle);

  const handleClick = (e) => {
    e.preventDefault();

    if (props.onClick) {
      props.onClick(e);
    }
  };

  return (
    <div
      className={`${type} ${zIndex} items-center flex-col justify-center overflow-hidden fixed inset-0`}
    >
      <div
        className={`${overlayStyle} absolute inset-0 bg-gradient-to-tr opacity-90 dark:from-gray-700 dark:via-gray-900 dark:to-gray-700`}
        onClick={handleClick}
      ></div>

      {children}
    </div>
  );
};

OverlayLayer.propTypes = {
  zIndex: PropTypes.string,
  type: PropTypes.string,
  children: PropTypes.any,
};

export default OverlayLayer;
