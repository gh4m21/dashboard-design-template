import React, { Children } from 'react';
import { FiSettings } from 'react-icons/fi';
import BaseButton from '../Form/BaseButton';
import BaseIcon from '../Utilities//BaseIcon';
import IconRounded from '../Utilities/IconRounded';

const SectionTitleLineWithButton = ({
  Icon,
  title,
  main = false,
  children,
}) => {
  const hasChildren = !!Children.count(children);

  return (
    <section
      className={`${main ? '' : 'pt-6'} mb-6 flex items-center justify-between`}
    >
      <div className='flex items-center justify-start'>
        {Icon && main && (
          <IconRounded Icon={Icon} color='light' className='mr-3' bg />
        )}
        {Icon && !main && <BaseIcon Icon={Icon} className='mr-2' size='20' />}
        <h1 className={`leading-tight ${main ? 'text-3xl' : 'text-2xl'}`}>
          {title}
        </h1>
      </div>
      {children}
      {!hasChildren && <BaseButton Icon={FiSettings} color='whiteDark' />}
    </section>
  );
};

export default SectionTitleLineWithButton;
