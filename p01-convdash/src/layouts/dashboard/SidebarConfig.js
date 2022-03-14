import { Icon } from '@iconify/react';
import pieChart2Fill from '@iconify/icons-eva/pie-chart-2-fill';
import peopleFill from '@iconify/icons-eva/people-fill';
import shoppingBagFill from '@iconify/icons-eva/shopping-bag-fill';
import fileTextFill from '@iconify/icons-eva/file-text-fill';
import lockFill from '@iconify/icons-eva/lock-fill';
import personAddFill from '@iconify/icons-eva/person-add-fill';
import alertTriangleFill from '@iconify/icons-eva/alert-triangle-fill';
import bookFill from '@iconify/icons-eva/book-fill';
import cameraFill from '@iconify/icons-eva/camera-fill'

import activityFill from '@iconify/icons-eva/activity-fill'
import link2Fill from '@iconify/icons-eva/link-2-fill'
import swapFill from '@iconify/icons-eva/swap-fill'
import inboxFill from '@iconify/icons-eva/inbox-fill'
import arrowheadrightFill from '@iconify/icons-eva/arrowhead-right-fill'
import checkmarkFill from '@iconify/icons-eva/checkmark-square-2-fill'

// ----------------------------------------------------------------------

const getIcon = (name) => <Icon icon={name} width={22} height={22} />;

const sidebarConfig = [
  {
    title: 'Мониторинг',
    path: '/dashboard',
    icon: getIcon(pieChart2Fill)
  },
  {
    title: 'Отчёты',
    path: '/reports',
    icon: getIcon(bookFill)
  },
  {
    title: 'Визуализация',
    path: '/visuals',
    icon: getIcon(cameraFill)
  },
  {
    title: 'Управление МС23',
    path: '/manage',
    icon: getIcon(alertTriangleFill),
    children: [
      {
        title: 'Состояние соединений',
        path: '/manage_status',
        icon: getIcon(activityFill)
      },
      {
        title: 'Настройки соединений',
        path: '/manage_config',
        icon: getIcon(link2Fill)
      },
      {
        title: 'Настройки конвейеров',
        path: '/manage_conveyor',
        icon: getIcon(swapFill)
      },
      {
        title: 'Настройки весов',
        path: '/manage_scales',
        icon: getIcon(inboxFill)
      },
      {
        title: 'Цепочки конвейеров',
        path: '/manage_convchain',
        icon: getIcon(arrowheadrightFill)
      },
      {
        title: 'ТОиР',
        path: '/manage_repair',
        icon: getIcon(checkmarkFill)
      }
    ]
  },
  {
    title: 'Пользователи',
    path: '/user',
    icon: getIcon(peopleFill)
  },
  {
    title: 'Авторизация',
    path: '/login',
    icon: getIcon(lockFill)
  },
  {
    title: 'Регистрация',
    path: '/register',
    icon: getIcon(personAddFill)
  }
];

export default sidebarConfig;
