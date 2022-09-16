import React from 'react'

const NxtWatchContext = React.createContext({
  isDark: false,
  activeTab: 'Home',
  savedVideos: [],
  isChangeBgTheme: () => {},
  changeTab: () => {},
  addToSave: () => {},
  removeSavedVideo: () => {},
})
export default NxtWatchContext
