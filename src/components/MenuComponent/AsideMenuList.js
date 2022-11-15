import React from 'react';
import PropTypes from 'prop-types';
import AsideMenuItem from './AsideMenuItem';

const AsideMenuList = ({ menu, isDropdownList = false, className = '' }) => {
  return (
    <ul className={className}>
      {menu?.map((item, index) => (
        <AsideMenuItem
          key={index}
          item={item}
          isDropdownList={isDropdownList}
        />
      ))}
    </ul>
  );
};

AsideMenuList.propTypes = {
  menu: PropTypes.any,
  isDropdownList: PropTypes.bool,
  className: PropTypes.string,
};

export default AsideMenuList;
