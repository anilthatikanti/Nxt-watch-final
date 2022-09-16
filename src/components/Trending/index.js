import {Component} from 'react'
import Cookies from 'js-cookie'
import Loader from 'react-loader-spinner'
import {AiFillFire} from 'react-icons/ai'
import './index.css'
import {
  HomeContainer,
  Container,
  HomeSideContainer,
  ProductsLoaderContainer,
  NotFoundContainer,
  Image,
  Heading,
  Desc,
  NavLink,
  Retry,
  SearchVideosContainer,
  TrendingHeadContainer,
  TrendingLogo,
  TrendingHead,
  VideoContainer,
} from './StyledComponents'
import TrendingVideoDetails from '../TrendingVideoDetails'

import NxtWatchContext from '../../Context/NxtWatchContext'
import Header from '../Header'
import SideItems from '../SideItems'

const apiStatusConstants = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  failure: 'FAILURE',
  inProgress: 'IN_PROGRESS',
}

class Trending extends Component {
  state = {
    apiStatus: apiStatusConstants.initial,
    trendingList: [],
  }

  componentDidMount() {
    this.getRequest()
  }

  getRequest = async () => {
    this.setState({apiStatus: apiStatusConstants.inProgress})

    const jwtToken = Cookies.get('jwt_token')
    const apiUrl = `https://apis.ccbp.in/videos/trending`
    const options = {
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
      method: 'GET',
    }
    const response = await fetch(apiUrl, options)
    if (response.ok) {
      const data = await response.json()
      const updateData = data.videos.map(each => ({
        id: each.id,
        publishedAt: each.published_at,
        thumbnailUrl: each.thumbnail_url,
        title: each.title,
        viewCount: each.view_count,
        channel: {
          name: each.channel.name,
          profileImageUrl: each.channel.profile_image_url,
        },
      }))
      this.setState({
        trendingList: updateData,
        apiStatus: apiStatusConstants.success,
      })
    } else {
      this.setState({apiStatus: apiStatusConstants.failure})
    }
  }

  renderHomeVideos = () => {
    const {trendingList} = this.state

    return (
      <NxtWatchContext.Consumer>
        {value => {
          const {isDark} = value

          const bgColor = isDark ? '#0f0f0f' : '#f9f9f9'
          const textColor = isDark ? '#f9f9f9' : '#181818'
          const IconColor = isDark ? 'IconDark' : 'IconLight'
          return (
            <SearchVideosContainer data-testid="trending" bgColor={bgColor}>
              <TrendingHeadContainer color={textColor} bgColor={bgColor}>
                <TrendingLogo>
                  <AiFillFire className={IconColor} />
                </TrendingLogo>
                <TrendingHead color={textColor}>Trending</TrendingHead>
              </TrendingHeadContainer>
              <VideoContainer>
                {trendingList.map(each => (
                  <TrendingVideoDetails key={each.id} details={each} />
                ))}
              </VideoContainer>
            </SearchVideosContainer>
          )
        }}
      </NxtWatchContext.Consumer>
    )
  }

  renderLoadingView = () => (
    <ProductsLoaderContainer
      className="products-loader-container"
      data-testid="loader"
    >
      <Loader type="ThreeDots" color="#0b69ff" height="50" width="50" />
    </ProductsLoaderContainer>
  )

  renderFailureView = () => (
    <NotFoundContainer>
      <Image
        src="https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-light-theme-img.png"
        alt="failure view"
        className="jobs-failure-img"
      />
      <Heading>Oops! Something Went Wrong</Heading>
      <Desc className="jobs-failure-description">
        We are having some trouble to complete your request.Please try again.
      </Desc>
      <NavLink>
        <Retry className="button" type="button" onClick={this.getRequest}>
          Retry
        </Retry>
      </NavLink>
    </NotFoundContainer>
  )

  renderAllVideos = () => {
    const {apiStatus} = this.state

    switch (apiStatus) {
      case apiStatusConstants.success:
        return this.renderHomeVideos()
      case apiStatusConstants.inProgress:
        return this.renderLoadingView()
      case apiStatusConstants.failure:
        return this.renderFailureView()
      default:
        return null
    }
  }

  render() {
    return (
      <NxtWatchContext.Consumer>
        {value => {
          const {isDark} = value
          return (
            <HomeContainer isDark={isDark}>
              <Header />
              <Container>
                <SideItems />
                <HomeSideContainer>{this.renderAllVideos()}</HomeSideContainer>
              </Container>
            </HomeContainer>
          )
        }}
      </NxtWatchContext.Consumer>
    )
  }
}
export default Trending
