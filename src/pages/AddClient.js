import React from 'react';
import SectionMain from './../components/Section/SectionMain';
import SectionTitleLineWithButton from './../components/Section/SectionTitleLineWithButton';
import { AiOutlineUserAdd } from 'react-icons/ai';

const AddClient = () => {
  return (
    <SectionMain>
      <SectionTitleLineWithButton
        Icon={AiOutlineUserAdd}
        title='Add Client'
        main
      ></SectionTitleLineWithButton>
    </SectionMain>
  );
};

export default AddClient;
