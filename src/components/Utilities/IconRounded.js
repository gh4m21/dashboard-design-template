import React from 'react';
import { colorsBgLight, colorsText } from '../MenuConfig/colors';
import BaseIcon from './BaseIcon';

const IconRounded = ({
  Icon,
  color,
  w = 'w-12',
  h = 'h-12',
  bg = false,
  className = '',
}) => {
  const classAddon = bg
    ? colorsBgLight[color]
    : `${colorsText[color]} bg-gray-50 dark:bg-slate-800`;

  return (
    <BaseIcon
      Icon={Icon}
      w={w}
      h={h}
      size='24'
      className={`rounded-full ${classAddon} ${className}`}
    />
  );
};

export default IconRounded;
