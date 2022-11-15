import React from 'react';
import { containerMaxW } from './MenuConfig/config';
import BaseLevel from './BaseLevel';
// import JustboilLogo from './justboil/Logo';

const FooterBar = ({ children }) => {
  const year = new Date().getFullYear();

  return (
    <footer className={`py-2 px-6 ${containerMaxW}`}>
      <BaseLevel>
        <div className='text-center md:text-left mb-6 md:mb-0'>
          <b>
            &copy;{year},{` `}
            <a
              href='https://yvesgervensconstant.me/'
              rel='noreferrer'
              target='_blank'
            >
              Gh4m
            </a>
            .
          </b>
          {` `}
          {children}
        </div>
        <div className='md:py-2'>
          <a
            href='https://yvesgervensconstant.me'
            rel='noreferrer'
            target='_blank'
          >
            Gh4m
            {/* <JustboilLogo className='w-auto h-8 md:h-6' /> */}
          </a>
        </div>
      </BaseLevel>
    </footer>
  );
};

export default FooterBar;
