import React from 'react'

const NxtWatchContext = React.createContext({
  isDark: false,
  activeTab: 'Home',
  isChangeBgTheme: () => {},
  changeTab: () => {},
})
export default NxtWatchContext
