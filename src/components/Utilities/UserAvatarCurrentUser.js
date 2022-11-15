import React from 'react';
import { useAppSelector } from '../../redux/hooks';
import UserAvatar from './UserAvatar';

const UserAvatarCurrentUser = ({ className = '', children }) => {
  const userName = useAppSelector((state) => state.main.userName);
  const userAvatar = useAppSelector((state) => state.main.userAvatar);

  return (
    <UserAvatar username={userName} avatar={userAvatar} className={className}>
      {children}
    </UserAvatar>
  );
};

export default UserAvatarCurrentUser;
