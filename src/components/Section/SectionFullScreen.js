import React from 'react';
import {
  gradientBgPurplePink,
  gradientBgDark,
  gradientBgPinkRed,
} from '../MenuConfig/colors';
import { useAppSelector } from '../../redux/hooks';

const SectionFullScreen = ({ bg, children }) => {
  const darkMode = useAppSelector((state) => state.style.darkMode);

  let componentClass = 'flex min-h-screen items-center justify-center ';

  if (darkMode) {
    componentClass += gradientBgDark;
  } else if (bg === 'purplePink') {
    componentClass += gradientBgPurplePink;
  } else if (bg === 'pinkRed') {
    componentClass += gradientBgPinkRed;
  }

  return <div className={componentClass}>{children}</div>;
};

export default SectionFullScreen;
