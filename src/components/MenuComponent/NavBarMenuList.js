import React from 'react';
import NavBarItem from './NavBarItem';

const NavBarMenuList = ({ menu }) => {
  return (
    <>
      {menu.map((item, index) => (
        <NavBarItem key={index} item={item} />
      ))}
    </>
  );
};

export default NavBarMenuList;
