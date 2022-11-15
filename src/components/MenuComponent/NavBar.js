import React, { useState } from 'react';
import { AiOutlineClose } from 'react-icons/ai';
import { BsThreeDotsVertical } from 'react-icons/bs';
import { containerMaxW } from '../MenuConfig/config';
import BaseIcon from '../Utilities/BaseIcon';
import NavBarItemPlain from './NavBarItemPlain';
import NavBarMenuList from './NavBarMenuList';

const NavBar = ({ menu, className = '', children }) => {
  const [isMenuNavBarActive, setIsMenuNavBarActive] = useState(false);

  const handleMenuNavBarToggleClick = () => {
    setIsMenuNavBarActive(!isMenuNavBarActive);
  };

  return (
    <nav
      className={`${className} top-0 inset-x-0 fixed bg-gray-50 h-14 z-30 transition-position w-screen lg:w-auto dark:bg-slate-800`}
    >
      <div className={`flex lg:items-stretch ${containerMaxW}`}>
        <div className='flex flex-1 items-stretch h-14'>{children}</div>
        <div className='flex-none items-stretch flex h-14 lg:hidden'>
          <NavBarItemPlain onClick={handleMenuNavBarToggleClick}>
            <BaseIcon
              Icon={isMenuNavBarActive ? AiOutlineClose : BsThreeDotsVertical}
              size='24'
            />
          </NavBarItemPlain>
        </div>
        <div
          className={`${
            isMenuNavBarActive ? 'block' : 'hidden'
          } max-h-screen-menu overflow-y-auto lg:overflow-visible absolute w-screen top-14 left-0 bg-gray-50 shadow-lg lg:w-auto lg:flex lg:static lg:shadow-none dark:bg-slate-800`}
        >
          <NavBarMenuList menu={menu} />
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
