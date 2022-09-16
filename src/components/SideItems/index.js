import {IoMdHome} from 'react-icons/io'
import {HiFire} from 'react-icons/hi'
import {MdPlaylistAdd} from 'react-icons/md'
import {FaGamepad} from 'react-icons/fa'
import NxtWatchContext from '../../Context/NxtWatchContext'
import {
  SideOptionsVideosContainer,
  SideOptions,
  LinkPara,
  LinkItem,
  SocialMedia,
  ContactUs,
  SocialMediaIcons,
  ImageIcon,
  ThankingNote,
} from './styledComponents'

const SideItems = () => (
  <NxtWatchContext.Consumer>
    {value => {
      const {isDark, activeTab, changeTab} = value

      const clickOptionHome = () => {
        changeTab('Home')
      }

      const clickOptionTrending = () => {
        changeTab('Trending')
      }

      const clickOptionGaming = () => {
        changeTab('Gaming')
      }

      const clickOptionSavedVideos = () => {
        changeTab('SavedVideos')
      }

      const bgColor = isDark ? '#ffffff80' : '#181818'
      const textColor = isDark ? '#f9f9f9' : '#181818'
      const selectedItemColor = !isDark ? '#00306e' : '#ffffff'

      return (
        <SideOptionsVideosContainer isDark={isDark}>
          <SideOptions>
            <li>
              <LinkItem
                to="/"
                onClick={clickOptionHome}
                isActive={bgColor}
                color={activeTab === 'Home' ? '#ff0000' : {bgColor}}
              >
                <IoMdHome />
                <LinkPara
                  isDark={isDark}
                  color={
                    activeTab === 'Home' ? {selectedItemColor} : {textColor}
                  }
                  isActiveParaColor={textColor}
                >
                  Home
                </LinkPara>
              </LinkItem>
            </li>
            <li>
              <LinkItem
                to="/trending"
                onClick={clickOptionTrending}
                isActive={bgColor}
                color={activeTab === 'Trending' ? '#ff0000' : {bgColor}}
              >
                <HiFire />
                <LinkPara
                  isDark={isDark}
                  color={
                    activeTab === 'Trending' ? {selectedItemColor} : {textColor}
                  }
                  isActiveParaColor={textColor}
                >
                  Trending
                </LinkPara>
              </LinkItem>
            </li>
            <li>
              <LinkItem
                to="/gaming"
                onClick={clickOptionGaming}
                isActive={bgColor}
                color={activeTab === 'Gaming' ? '#ff0000' : {bgColor}}
              >
                <FaGamepad />
                <LinkPara
                  isDark={isDark}
                  color={
                    activeTab === 'Gaming' ? {selectedItemColor} : {textColor}
                  }
                  isActiveParaColor={textColor}
                >
                  Gaming
                </LinkPara>
              </LinkItem>
            </li>
            <li>
              <LinkItem
                to="/saved-videos"
                onClick={clickOptionSavedVideos}
                isActive={bgColor}
                color={activeTab === 'SavedVideos' ? '#ff0000' : {bgColor}}
              >
                <MdPlaylistAdd />
                <LinkPara
                  isDark={isDark}
                  color={
                    activeTab === 'SavedVideos'
                      ? {selectedItemColor}
                      : {textColor}
                  }
                  isActiveParaColor={textColor}
                >
                  Saved Videos
                </LinkPara>
              </LinkItem>
            </li>
          </SideOptions>
          <SocialMedia>
            <ContactUs isDark={isDark}>CONTACT US</ContactUs>
            <SocialMediaIcons>
              <ImageIcon
                src="https://assets.ccbp.in/frontend/react-js/nxt-watch-facebook-logo-img.png"
                alt="facebook logo"
              />
              <ImageIcon
                src="https://assets.ccbp.in/frontend/react-js/nxt-watch-twitter-logo-img.png"
                alt="twitter logo"
              />
              <ImageIcon
                src="https://assets.ccbp.in/frontend/react-js/nxt-watch-linked-in-logo-img.png"
                alt="linked in logo"
              />
            </SocialMediaIcons>
            <ThankingNote isDark={isDark}>
              Enjoy! Now to see your channels and recommendations!
            </ThankingNote>
          </SocialMedia>
        </SideOptionsVideosContainer>
      )
    }}
  </NxtWatchContext.Consumer>
)

export default SideItems
