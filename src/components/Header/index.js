import Cookies from 'js-cookie'
import {BsBrightnessHigh} from 'react-icons/bs'
import {FaMoon} from 'react-icons/fa'
import {withRouter, Link} from 'react-router-dom'
import NxtWatchContext from '../../Context/NxtWatchContext'
import {ThemeBtn, HeaderContainer} from './styledComponents'
import './index.css'

const Header = props => {
  const clickLogout = () => {
    Cookies.remove('jwt_token')
    const {history} = props
    history.replace('/login')
  }

  return (
    <NxtWatchContext.Consumer>
      {value => {
        const {isDark, isChangeBgTheme} = value

        const changeTheme = () => {
          isChangeBgTheme()
        }

        const HeaderWebsiteLogo = isDark
          ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png'
          : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png'

        return (
          <HeaderContainer isDark={isDark}>
            <Link to="/">
              <img
                className="websiteHeaderLogo"
                src={HeaderWebsiteLogo}
                alt="website logo"
              />
            </Link>

            <div className="profileContainer">
              <ThemeBtn type="button" onClick={changeTheme} isDark={isDark}>
                {isDark ? <BsBrightnessHigh size={15} /> : <FaMoon size={15} />}
              </ThemeBtn>
              <img
                className="profile"
                src="https://assets.ccbp.in/frontend/react-js/nxt-watch-profile-img.png"
                alt="profile"
              />
              <button type="button" className="logoutBtn" onClick={clickLogout}>
                Logout
              </button>
            </div>
          </HeaderContainer>
        )
      }}
    </NxtWatchContext.Consumer>
  )
}
export default withRouter(Header)
