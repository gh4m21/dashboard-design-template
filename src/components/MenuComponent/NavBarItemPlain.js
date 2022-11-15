import React from 'react';
import { useAppSelector } from '../../redux/hooks';

const NavBarItemPlain = ({
  display = 'flex',
  useMargin = false,
  onClick,
  children,
}) => {
  const navBarItemLabelStyle = useAppSelector(
    (state) => state.style.navBarItemLabelStyle
  );
  const navBarItemLabelHoverStyle = useAppSelector(
    (state) => state.style.navBarItemLabelHoverStyle
  );

  const classBase =
    'items-center cursor-pointer dark:text-white dark:hover:text-slate-400';
  const classAddon = `${display} ${navBarItemLabelStyle} ${navBarItemLabelHoverStyle} ${
    useMargin ? 'my-2 mx-3' : 'py-2 px-3'
  }`;

  return (
    <div className={`${classBase} ${classAddon}`} onClick={onClick}>
      {children}
    </div>
  );
};

export default NavBarItemPlain;
