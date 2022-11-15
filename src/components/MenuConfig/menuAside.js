import { FiMonitor } from 'react-icons/fi';
import { AiOutlineUserAdd } from 'react-icons/ai';
import { CgUserList } from 'react-icons/cg';

const menuAside = [
  {
    href: '/dashboard',
    label: 'Dashboard',
    icon: FiMonitor,
  },
  {
    href: '/add_client',
    label: 'Add Client',
    icon: AiOutlineUserAdd,
  },
  {
    href: '/list_client',
    label: 'List Client',
    icon: CgUserList,
  },
];

export default menuAside;
