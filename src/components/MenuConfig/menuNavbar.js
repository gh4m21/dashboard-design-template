import { AiOutlineLogout } from 'react-icons/ai';
import { CgDarkMode } from 'react-icons/cg';

const menuNavBar = [
  {
    isCurrentUser: true,
    menu: [
      //   {
      //     icon: mdiAccount,
      //     label: 'My Profile',
      //     href: '/profile',
      //   },
      //   {
      //     isDivider: true,
      //   },
      {
        icon: AiOutlineLogout,
        label: 'Log Out',
        isLogout: true,
      },
    ],
  },
  {
    icon: CgDarkMode,
    label: 'Light/Dark',
    isDesktopNoLabel: true,
    isToggleLightDark: true,
  },
];

export default menuNavBar;
