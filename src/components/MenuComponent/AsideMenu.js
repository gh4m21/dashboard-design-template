import React from 'react';
import PropTypes from 'prop-types';
import AsideMenuLayer from './AsideMenuLayer';
import OverlayLayer from './OverlayLayer';

const AsideMenu = ({
  isAsideMobileExpanded = false,
  isAsideLgActive = false,
  ...props
}) => {
  return (
    <>
      <AsideMenuLayer
        menu={props.menu}
        className={`${
          isAsideMobileExpanded ? 'left-0' : '-left-60 lg:left-0'
        } ${!isAsideLgActive ? 'lg:hidden xl:flex' : ''}`}
        onAsideLgCloseClick={props.onAsideLgClose}
      />
      {isAsideLgActive && (
        <OverlayLayer zIndex='z-30' onClick={props.onAsideLgClose} />
      )}
    </>
  );
};

AsideMenu.propTypes = {
  isAsideMobileExpanded: PropTypes.bool,
  isAsideLgActive: PropTypes.bool,
};

export default AsideMenu;
