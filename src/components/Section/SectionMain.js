import React from 'react';
import { containerMaxW } from '../MenuConfig/config';

const SectionMain = ({ children }) => {
  return <section className={`p-6 ${containerMaxW}`}>{children}</section>;
};

export default SectionMain;
