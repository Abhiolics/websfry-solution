export const navItems = [
  {
    type: 'link',
    href: '/',
    label: 'Home',
  },
  {
    type: 'link',
    label: 'Chat',
    href: '/text-generat',
  },
  {
    type: 'link',
    label: 'Pricing',
    href: '/prici',
  },
  {
    type: 'link',
    label: 'Contact',
    href: '/contac',
  },
  {
    type: 'dropdown',
    label: 'Pages',
    items: [
      { href: '/signi', label: 'Sign In' },
      { href: '/signu', label: 'Sign Up' },
      { href: '/reset-passwor', label: 'Reset Password' },
      { href: '/not-foun', label: '404 Error' },
    ],
  },
] satisfies NavItem[];

type NavItem = Record<string, string | unknown> &
  (
    | {
        type: 'link';
        href: string;
      }
    | {
        type: 'dropdown';
      }
  );
