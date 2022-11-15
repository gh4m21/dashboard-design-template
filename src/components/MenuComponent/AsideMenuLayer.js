import React from 'react';
import PropTypes from 'prop-types';
import { MdClose, MdLogout } from 'react-icons/md';
import BaseIcon from '../Utilities/BaseIcon';
import AsideMenuItem from './AsideMenuItem';
import AsideMenuList from './AsideMenuList';
import { useAppSelector } from '../../redux/hooks';

const AsideMenuLayer = ({ menu, className = '', ...props }) => {
  const asideStyle = useAppSelector((state) => state.style.asideStyle);
  const asideBrandStyle = useAppSelector(
    (state) => state.style.asideBrandStyle
  );
  const asideScrollbarsStyle = useAppSelector(
    (state) => state.style.asideScrollbarsStyle
  );
  const darkMode = useAppSelector((state) => state.style.darkMode);

  const logoutItem = {
    label: 'Logout',
    icon: MdLogout,
    color: 'info',
    isLogout: true,
  };

  const handleAsideLgCloseClick = (e) => {
    e.preventDefault();
    props.onAsideLgCloseClick();
  };

  return (
    <aside
      className={`${className} zzz lg:py-2 lg:pl-2 w-60 fixed flex z-40 top-0 h-screen transition-position overflow-hidden`}
    >
      <div
        className={`lg:rounded-2xl flex-1 flex flex-col overflow-hidden dark:bg-slate-900 ${asideStyle}`}
      >
        <div
          className={`flex flex-row h-14 items-center justify-between dark:bg-slate-900 ${asideBrandStyle}`}
        >
          <div className='text-center flex-1 lg:text-left lg:pl-6 xl:text-center xl:pl-0'>
            <b className='font-black'>{'LOGO brand'}</b>
          </div>
          <button
            className='hidden lg:inline-block xl:hidden p-3'
            onClick={handleAsideLgCloseClick}
          >
            <BaseIcon Icon={MdClose} />
          </button>
        </div>
        <div
          className={`flex-1 overflow-y-auto overflow-x-hidden ${
            darkMode ? 'aside-scrollbars-[slate]' : asideScrollbarsStyle
          }`}
        >
          <AsideMenuList menu={menu} />
        </div>
        <ul>
          <AsideMenuItem item={logoutItem} />
        </ul>
      </div>
    </aside>
  );
};

AsideMenuLayer.propTypes = {
  menu: PropTypes.func,
  className: PropTypes.string,
};

export default AsideMenuLayer;
