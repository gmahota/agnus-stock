export default function config(
  state = {
    name: 'Agnus Stock Mang. ',
    description: 'Agnus Stock Managment',
    url: '/',
    layout: 'layout-1',
    collapsed: false,
    rightSidebar: false,
    backdrop: false
  },
  action
) {
  switch (action.type) {
    case 'SET_CONFIG':
      return {
        ...state,
        ...action.config
      }
    case 'SET_CONFIG_KEY':
      return {
        ...state,
        [`${action.key}`]: action.value
      }
    default:
      return state
  }
}
