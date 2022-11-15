import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';
import BaseIcon from '../Utilities/BaseIcon';
import { Link, useLocation } from 'react-router-dom';
import { getButtonColor } from '../MenuConfig/colors';
import AsideMenuList from './AsideMenuList';
import { useAppSelector } from '../../redux/hooks';
// import { useRouter } from 'next/router';

const AsideMenuItem = ({ item, isDropdownList = false }) => {
  const [isLinkActive, setIsLinkActive] = useState(false);
  const [isDropdownActive, setIsDropdownActive] = useState(false);

  const asideMenuItemStyle = useAppSelector(
    (state) => state.style.asideMenuItemStyle
  );
  const asideMenuDropdownStyle = useAppSelector(
    (state) => state.style.asideMenuDropdownStyle
  );
  const asideMenuItemActiveStyle = useAppSelector(
    (state) => state.style.asideMenuItemActiveStyle
  );

  const activeClassAddon =
    !item.color && isLinkActive ? asideMenuItemActiveStyle : '';

  const { pathname } = useLocation();

  useEffect(() => {
    if (item.href) {
      const linkPathName = item.href;

      const activePathname = pathname;

      setIsLinkActive(linkPathName === activePathname);
    }
  }, [item.href, pathname]);

  const asideMenuItemInnerContents = (
    <>
      {item.icon && (
        <BaseIcon
          Icon={item.icon}
          className={`flex-none ${activeClassAddon}`}
          w='w-16'
          size='18'
        />
      )}
      <span
        className={`grow text-ellipsis line-clamp-1 ${
          item.menu ? '' : 'pr-12'
        } ${activeClassAddon}`}
      >
        {item.label}
      </span>
      {item.menu && (
        <BaseIcon
          Icon={isDropdownActive ? AiOutlineMinus : AiOutlinePlus}
          className={`flex-none ${activeClassAddon}`}
          w='w-12'
        />
      )}
    </>
  );

  const componentClass = [
    'flex cursor-pointer',
    isDropdownList ? 'py-3 px-6 text-sm' : 'py-3',
    item.color
      ? getButtonColor(item.color, false, true)
      : `${asideMenuItemStyle} dark:text-slate-300 dark:hover:text-white`,
  ].join(' ');

  return (
    <li>
      {item.href && (
        <Link to={item.href}>
          <div className={componentClass}>{asideMenuItemInnerContents}</div>
        </Link>
      )}
      {!item.href && (
        <div
          className={componentClass}
          onClick={() => setIsDropdownActive(!isDropdownActive)}
        >
          {asideMenuItemInnerContents}
        </div>
      )}
      {item.menu && (
        <AsideMenuList
          menu={item.menu}
          className={`${asideMenuDropdownStyle} ${
            isDropdownActive ? 'block dark:bg-slate-800/50' : 'hidden'
          }`}
          isDropdownList
        />
      )}
    </li>
  );
};

AsideMenuItem.propTypes = {
  item: PropTypes.object,
  isDropdownList: PropTypes.bool,
};

export default AsideMenuItem;
