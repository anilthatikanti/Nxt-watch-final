import {Component} from 'react'
import {Route, Switch, Redirect} from 'react-router-dom'
import NxtWatchContext from './Context/NxtWatchContext'
import Login from './components/Login'
import Home from './components/Home'
import VideoItemDetails from './components/VideoItemDetails'
import './App.css'
import ProtectedRoute from './components/ProtectedRoute'
import Trending from './components/Trending'
import Gaming from './components/Gaming'
import SavedVideos from './components/SavedVideos'
import NotFound from './components/NotFound'

// Replace your code here
class App extends Component {
  state = {isDark: false, activeTab: 'Home', savedVideos: []}

  isChangeBgTheme = () => {
    this.setState(prevState => ({isDark: !prevState.isDark}))
  }

  changeTab = tab => {
    this.setState({activeTab: tab})
  }

  addToSave = videoDetails => {
    const {savedVideos} = this.state

    const isAlreadyIn = savedVideos.find(each => each.id === videoDetails.id)
    if (isAlreadyIn) {
      this.setState(prevState => ({
        savedVideos: [...prevState.savedVideos],
      }))
    } else {
      this.setState(prevState => ({
        savedVideos: [...prevState.savedVideos, videoDetails],
      }))
    }
  }

  removeSavedVideo = id => {
    const {savedVideos} = this.state
    const updateList = savedVideos.filter(each => each.id !== id)
    this.setState({savedVideos: updateList})
  }

  render() {
    const {isDark, activeTab, savedVideos} = this.state

    return (
      <NxtWatchContext.Provider
        value={{
          isDark,
          activeTab,
          savedVideos,
          addToSave: this.addToSave,
          removeSavedVideo: this.removeSavedVideo,
          changeTab: this.changeTab,
          isChangeBgTheme: this.isChangeBgTheme,
        }}
      >
        <Switch>
          <Route exact path="/login" component={Login} />
          <ProtectedRoute exact path="/" component={Home} />
          <ProtectedRoute
            exact
            path="/videos/:id"
            component={VideoItemDetails}
          />
          <ProtectedRoute exact path="/trending" component={Trending} />
          <ProtectedRoute exact path="/gaming" component={Gaming} />
          <ProtectedRoute exact path="/saved-videos" component={SavedVideos} />
          <Route path="/not-found" component={NotFound} />
          <Redirect to="not-found" />
        </Switch>
      </NxtWatchContext.Provider>
    )
  }
}

export default App
