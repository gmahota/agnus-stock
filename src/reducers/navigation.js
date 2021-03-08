import {
  FiToggleLeft,
  FiList,
  FiActivity,
  FiCalendar,
  FiStar,
  FiDroplet,
  FiGrid,
  FiClock,
  FiCopy,
  FiUser,
  FiPieChart,
  FiCompass,
  FiHelpCircle,
  FiShoppingCart,
  FiHome
} from 'react-icons/fi'

const initialState = [
  {
    title: 'Stock Managment',
    items: [
      {
        url: '/dashboard',
        icon: <FiCompass size={20} />,
        title: 'Dashboard',
        items: []
      },
      {
        url: '/',
        icon: <FiActivity size={20} />,
        title: 'Inventario',
        items: [
          {
            url: '/stock/entrada',
            title: 'Entrada',
            items: []
          },
          {
            url: '/stock/saida',
            title: 'Saida',
            items: []
          },
          {
            url: '/stock/entrada/stocks',
            title: 'Stock Entradas',
            items: []
          },
          {
            url: '/stock/saida/stocks',
            title: 'Stock Saida',
            items: []
          },
          {
            url: '/stock/',
            title: 'Stock',
            items: []
          }
        ]
      }
    ]
  },
  {
    title: 'Pages',
    items: [
      {
        url: '/',
        icon: <FiCopy size={20} />,
        title: 'Authentication',
        badge: {
          color: 'bg-indigo-500 text-white',
          text: 7
        },
        items: [
          {
            url: '/contact-us-1',
            title: 'Contact us',
            items: []
          },
          {
            url: '/create-account',
            title: 'Create account',
            items: []
          },
          {
            url: '/email-confirmation',
            title: 'Email confirmation',
            items: []
          },
          {
            url: '/logout',
            title: 'Logout',
            items: []
          },
          {
            url: '/reset-password',
            title: 'Reset password',
            items: []
          },
          {
            url: '/forgot-password',
            title: 'Forgot password',
            items: []
          },
          {
            url: '/lock-screen',
            title: 'Lock screen',
            items: []
          },
          {
            url: '/subscribe',
            title: 'Subscribe',
            items: []
          }
        ]
      },
      {
        url: '/',
        icon: <FiUser size={20} />,
        title: 'User',
        items: [
          {
            url: '/user-profile',
            title: 'User profile',
            items: []
          },
          {
            url: '/social-feed',
            title: 'Social feed',
            items: []
          }
        ]
      }
    ]
  }
]

export default function navigation(state = initialState, action) {
  switch (action.type) {
    default:
      return state
  }
}
