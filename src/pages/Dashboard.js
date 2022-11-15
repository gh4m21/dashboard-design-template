import React from 'react';
import SectionMain from './../components/Section/SectionMain';
import SectionTitleLineWithButton from './../components/Section/SectionTitleLineWithButton';
import { MdShowChart } from 'react-icons/md';

const Homepage = () => {
  return (
    <SectionMain>
      <SectionTitleLineWithButton
        Icon={MdShowChart}
        title='Overview'
        main
      ></SectionTitleLineWithButton>
    </SectionMain>
  );
};

export default Homepage;
