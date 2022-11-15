import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { RiMenuFoldLine, RiMenuUnfoldLine, RiMenuFill } from 'react-icons/ri';
import menuAside from '../components/MenuConfig/menuAside';
import menuNavBar from '../components/MenuConfig/menuNavbar';
import BaseIcon from '../components/Utilities/BaseIcon';
import NavBar from '../components/MenuComponent/NavBar';
import NavBarItemPlain from '../components/MenuComponent/NavBarItemPlain';
import AsideMenu from '../components/MenuComponent/AsideMenu';
import FooterBar from '../components/FooterBar';
import { setUser } from '../redux/mainSlice';
import { useAppDispatch, useAppSelector } from '../redux/hooks';

const AuthenticatedLayout = ({ children }) => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(
      setUser({
        name: 'John Doe',
        email: 'john@example.com',
        avatar:
          'https://avatars.dicebear.com/api/avataaars/example.svg?options[top][]=shortHair&options[accessoriesChance]=93',
      })
    );
  });

  const darkMode = useAppSelector((state) => state.style.darkMode);

  const [isAsideMobileExpanded, setIsAsideMobileExpanded] = useState(false);
  const [isAsideLgActive, setIsAsideLgActive] = useState(false);

  const layoutAsidePadding = 'xl:pl-60';

  return (
    <div
      className={`${
        darkMode ? 'dark' : ''
      } overflow-hidden lg:overflow-visible lg:overflow-x-hidden`}
    >
      <div
        className={`${layoutAsidePadding} ${
          isAsideMobileExpanded ? 'ml-60 lg:ml-0' : ''
        } pt-14 min-h-screen w-screen transition-position lg:w-auto bg-gray-50 dark:bg-slate-800 dark:text-slate-100`}
      >
        <NavBar
          menu={menuNavBar}
          className={`${layoutAsidePadding} ${
            isAsideMobileExpanded ? 'ml-60 lg:ml-0' : ''
          }`}
        >
          <NavBarItemPlain
            display='flex lg:hidden'
            onClick={() => setIsAsideMobileExpanded(!isAsideMobileExpanded)}
          >
            <BaseIcon
              Icon={isAsideMobileExpanded ? RiMenuFoldLine : RiMenuUnfoldLine}
              size='24'
            />
          </NavBarItemPlain>
          <NavBarItemPlain
            display='hidden lg:flex xl:hidden'
            onClick={() => setIsAsideLgActive(true)}
          >
            <BaseIcon Icon={RiMenuFill} size='24' />
          </NavBarItemPlain>
        </NavBar>
        <AsideMenu
          isAsideMobileExpanded={isAsideMobileExpanded}
          isAsideLgActive={isAsideLgActive}
          menu={menuAside}
          onAsideLgClose={() => setIsAsideLgActive(false)}
        />
        {children}
        <FooterBar>
          Code on{` `}
          <a
            href='https://tailwind-vue.justboil.me/'
            target='_blank'
            rel='noreferrer'
            className='text-blue-600'
          >
            GitHub
          </a>
        </FooterBar>
      </div>
    </div>
  );
};

AuthenticatedLayout.propTypes = { children: PropTypes.any };

export default AuthenticatedLayout;
