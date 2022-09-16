import {Component} from 'react'
import {AiFillFire} from 'react-icons/ai'
import TrendingVideoDetails from '../TrendingVideoDetails'
import NxtWatchContext from '../../Context/NxtWatchContext'
import Header from '../Header'
import SideItems from '../SideItems'
import './index.css'

import {
  SearchVideosContainer,
  TrendingHeadContainer,
  TrendingLogo,
  TrendingHead,
  HomeContainer,
  HomeSideContainer,
  Image,
  NotFoundContainer,
  Heading,
  Desc,
  VideoContainer,
  Container,
} from './StyledComponents'

class SavedVideos extends Component {
  renderSavedVideos = () => (
    <NxtWatchContext.Consumer>
      {value => {
        const {savedVideos, isDark} = value

        const bgColor = isDark ? '#0f0f0f' : '#f9f9f9'
        const textColor = isDark ? '#f9f9f9' : '#181818'
        const IconColor = isDark ? 'IconDark' : 'IconLight'
        const isVideosAvailable = savedVideos.length === 0
        return isVideosAvailable ? (
          <NotFoundContainer bgColor={bgColor}>
            <Image
              src="https://assets.ccbp.in/frontend/react-js/nxt-watch-no-saved-videos-img.png"
              alt="no saved videos"
            />
            <Heading className="cart-empty-heading" textColor={textColor}>
              No saved videos found
            </Heading>
            <Desc textColor={textColor}>
              You can save your videos while watching them.
            </Desc>
          </NotFoundContainer>
        ) : (
          <SearchVideosContainer bgColor={bgColor}>
            <TrendingHeadContainer color={textColor} bgColor={bgColor}>
              <TrendingLogo>
                <AiFillFire className={IconColor} />
              </TrendingLogo>
              <TrendingHead color={textColor}>Saved Videos</TrendingHead>
            </TrendingHeadContainer>
            <VideoContainer>
              {savedVideos.map(each => (
                <TrendingVideoDetails key={each.id} details={each} />
              ))}
            </VideoContainer>
          </SearchVideosContainer>
        )
      }}
    </NxtWatchContext.Consumer>
  )

  render() {
    return (
      <NxtWatchContext.Consumer>
        {value => {
          const {isDark} = value
          const bgColor = isDark ? '#0f0f0f' : '#f9f9f9'
          return (
            <HomeContainer data-testid="savedVideos" color={bgColor}>
              <Header />
              <Container>
                <SideItems />
                <HomeSideContainer>
                  {this.renderSavedVideos()}
                </HomeSideContainer>
              </Container>
            </HomeContainer>
          )
        }}
      </NxtWatchContext.Consumer>
    )
  }
}

export default SavedVideos
