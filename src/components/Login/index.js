import {Component} from 'react'
import {Redirect} from 'react-router-dom'
import Cookies from 'js-cookie'
import NxtWatchContext from '../../Context/NxtWatchContext'
import {
  LoginContainer,
  FormContainer,
  WebsiteLogo,
  Label,
  InputContainer,
  ShowPassword,
  Input,
} from './styledComponents'
import './index.css'

class Login extends Component {
  state = {
    username: '',
    password: '',
    errorShow: false,
    errorMsg: '',
    passwordShow: false,
  }

  onSubmit = JwtToken => {
    Cookies.set('jwt_token', JwtToken, {expires: 30, path: '/'})
    const {history} = this.props
    history.replace('/')
  }

  failureMsg = errorMsg => {
    this.setState({errorShow: true, errorMsg})
  }

  registrationUser = async event => {
    event.preventDefault()
    const {username, password} = this.state
    const userDetails = {username, password}
    const url = 'https://apis.ccbp.in/login'
    const options = {
      method: 'POST',
      body: JSON.stringify(userDetails),
    }
    const response = await fetch(url, options)
    const data = await response.json()
    if (response.ok === true) {
      this.onSubmit(data.jwt_token)
    } else {
      this.failureMsg(data.error_msg)
    }
  }

  userRegistrationName = e => {
    this.setState({username: e.target.value})
  }

  userPassword = e => {
    this.setState({password: e.target.value})
  }

  isShowingPassword = () => {
    this.setState(prevState => ({passwordShow: !prevState.passwordShow}))
  }

  render() {
    const {errorMsg, username, password, errorShow, passwordShow} = this.state
    const JwtToken = Cookies.get('jwt_token')
    const passwordType = passwordShow ? 'text' : 'password'

    if (JwtToken !== undefined) {
      return <Redirect to="/" />
    }
    return (
      <NxtWatchContext.Consumer>
        {value => {
          const {isDark} = value

          const LoginWebsiteLogo = isDark
            ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png'
            : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png'

          return (
            <LoginContainer isDark={isDark}>
              <FormContainer isDark={isDark}>
                <form onSubmit={this.registrationUser}>
                  <div className="loginIconContainer">
                    <WebsiteLogo src={LoginWebsiteLogo} />
                  </div>
                  <Label htmlFor="username" isDark={isDark}>
                    USERNAME
                  </Label>
                  <br />
                  <InputContainer isDark={isDark}>
                    <Input
                      isDark={isDark}
                      value={username}
                      type="text"
                      id="username"
                      placeholder="Username"
                      onChange={this.userRegistrationName}
                    />
                  </InputContainer>
                  <br />
                  <Label htmlFor="password" isDark={isDark}>
                    PASSWORD
                  </Label>
                  <br />
                  <InputContainer isDark={isDark}>
                    <Input
                      isDark={isDark}
                      value={password}
                      type={passwordType}
                      id="password"
                      placeholder="Password"
                      onChange={this.userPassword}
                    />
                  </InputContainer>
                  <br />
                  <ShowPassword>
                    <input
                      id="show"
                      type="checkbox"
                      onChange={this.isShowingPassword}
                    />
                    <Label isDark={isDark} htmlFor="show">
                      Show Password
                    </Label>
                  </ShowPassword>
                  {errorShow && <p className="error-message">*{errorMsg}</p>}
                  <button type="submit" className="loginBtn">
                    Login
                  </button>
                </form>
              </FormContainer>
            </LoginContainer>
          )
        }}
      </NxtWatchContext.Consumer>
    )
  }
}
export default Login
