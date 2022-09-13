import {Component} from 'react'
import {Route, Switch, Redirect} from 'react-router-dom'
import NxtWatchContext from './Context/NxtWatchContext'
import Login from './components/Login'
import Home from './components/Home'
import './App.css'

// Replace your code here
class App extends Component {
  state = {isDark: false, activeTab: 'Home'}

  isChangeBgTheme = () => {
    this.setState(prevState => ({isDark: !prevState.isDark}))
  }

  changeTab = tab => {
    this.setState({activeTab: tab})
  }

  render() {
    const {isDark, activeTab} = this.state
    return (
      <NxtWatchContext.Provider
        value={{
          isDark,
          activeTab,
          changeTab: this.changeTab,
          isChangeBgTheme: this.isChangeBgTheme,
        }}
      >
        <Switch>
          <Route exact path="/login" component={Login} />
          <Route exact path="/" component={Home} />
        </Switch>
      </NxtWatchContext.Provider>
    )
  }
}

export default App
