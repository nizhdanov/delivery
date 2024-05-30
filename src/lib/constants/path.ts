import { Calculator, Clock, UserRound } from 'lucide-react';

export const links = [
  {
    title: 'История',
    to: '/history',
    icon: Clock
  },
  {
    title: 'Профиль',
    to: '/profile',
    icon: UserRound
  }
];

export const mobilelinks = [
  {
    title: 'Расчёт',
    to: '/',
    icon: Calculator
  },
  ...links
];
