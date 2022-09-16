import {Component} from 'react'
import Cookies from 'js-cookie'
import Loader from 'react-loader-spinner'
import Header from '../Header'
import SideItems from '../SideItems'
import NxtWatchContext from '../../Context/NxtWatchContext'
import {
  HomeContainer,
  HomeSideContainer,
  Container,
  NotFoundContainer,
  Image,
  GamingHeading,
  Heading,
  Desc,
  NavLink,
  Retry,
  SearchVideosContainer,
  VideosContainer,
  ProductsLoaderContainer,
} from './StyledComponents'
import GamingVideoDetails from '../GamingVideoDetails'

const apiStatusConstants = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  failure: 'FAILURE',
  inProgress: 'IN_PROGRESS',
}
class Gaming extends Component {
  state = {gamingList: [], apiStatus: apiStatusConstants.initial}

  componentDidMount() {
    this.getResults()
  }

  getResults = async () => {
    this.setState({apiStatus: apiStatusConstants.inProgress})
    const Token = Cookies.get('jwt_token')
    const apiUrl = 'https://apis.ccbp.in/videos/gaming'
    const options = {
      method: 'GET',
      headers: {
        authorization: `Bearer ${Token}`,
      },
    }
    const response = await fetch(apiUrl, options)
    if (response.ok) {
      const data = await response.json()
      console.log(data)
      const updateData = data.videos.map(each => ({
        id: each.id,
        thumbnailUrl: each.thumbnail_url,
        title: each.title,
        viewCount: each.view_count,
      }))
      this.setState({
        gamingList: updateData,
        apiStatus: apiStatusConstants.success,
      })
    } else {
      this.setState({apiStatus: apiStatusConstants.failure})
    }
  }

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
        <Retry className="button" type="button" onClick={this.getResults}>
          Retry
        </Retry>
      </NavLink>
    </NotFoundContainer>
  )

  renderGamingVideos = () => (
    <NxtWatchContext.Consumer>
      {value => {
        const {isDark} = value

        const {gamingList} = this.state

        const bgColor = isDark ? '#0f0f0f' : '#f9f9f9'

        return (
          <SearchVideosContainer data-testid="gaming" bgColor={bgColor}>
            <GamingHeading isDark={isDark}>Gaming</GamingHeading>
            <VideosContainer bgColor={bgColor}>
              {gamingList.map(each => (
                <GamingVideoDetails key={each.id} details={each} />
              ))}
            </VideosContainer>
          </SearchVideosContainer>
        )
      }}
    </NxtWatchContext.Consumer>
  )

  renderLoadingView = () => (
    <ProductsLoaderContainer
      className="products-loader-container"
      data-testid="loader"
    >
      <Loader type="ThreeDots" color="#0b69ff" height="50" width="50" />
    </ProductsLoaderContainer>
  )

  renderAllVideos = () => {
    const {apiStatus} = this.state

    switch (apiStatus) {
      case apiStatusConstants.success:
        return this.renderGamingVideos()

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
export default Gaming
