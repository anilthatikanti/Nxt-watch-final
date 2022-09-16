import {NotFoundContainer, Heading, Desc, Image} from './StyledComponents'
// import Header from '../Header'
import NxtWatchContext from '../../Context/NxtWatchContext'

const NotFound = () => (
  <NxtWatchContext.Consumer>
    {value => {
      const {isDark} = value

      const imageUrl = isDark
        ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-not-found-dark-theme-img.png'
        : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-not-found-light-theme-img.png'

      const isDarkHeading = isDark ? 'white' : 'black'

      const isDarkDesc = isDark ? 'white' : 'black'

      const isDarkContainer = isDark ? 'black' : 'white'

      return (
        <>
          <NotFoundContainer isDark={isDarkContainer}>
            <Image src={imageUrl} alt="not found" />
            <Heading isDark={isDarkHeading} isDarkTheme>
              Page Not Found
            </Heading>
            <Desc isDark={isDarkDesc}>
              we are sorry, the page you requested could not be found.
            </Desc>
          </NotFoundContainer>
        </>
      )
    }}
  </NxtWatchContext.Consumer>
)

export default NotFound
