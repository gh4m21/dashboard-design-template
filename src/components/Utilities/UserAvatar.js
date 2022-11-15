import React from 'react';

const UserAvatar = ({
  username,
  avatar = null,
  api = 'avataaars',
  className = '',
  children,
}) => {
  const avatarImage =
    avatar ??
    `https://avatars.dicebear.com/api/${api}/${username.replace(
      /[^a-z0-9]+/i,
      '-'
    )}.svg`;

  return (
    <div className={className}>
      <img
        src={avatarImage}
        alt={username}
        className='rounded-full block h-auto w-full max-w-full bg-gray-100 dark:bg-slate-800'
      />
      {children}
    </div>
  );
};

export default UserAvatar;
