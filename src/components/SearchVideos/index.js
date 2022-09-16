import {Component} from 'react'
import Cookies from 'js-cookie'
import Loader from 'react-loader-spinner'
import NxtWatchContext from '../../Context/NxtWatchContext'
import VideoItem from '../VideoItem'

import {
  SearchContainer,
  SearchBar,
  SearchIcon,
  SearchBtn,
  VideoContainer,
  ProductsLoaderContainer,
  SearchedVideoContainer,
  SearchBox,
  NotFoundContainer,
  Image,
  Heading,
  Desc,
  Retry,
  NavLink,
  NoVideosFound,
} from './StyledComponents'

const apiStatusConstants = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  failure: 'FAILURE',
  inProgress: 'IN_PROGRESS',
}

class SearchVideos extends Component {
  state = {
    searchInput: '',
    searchValue: '',
    apiStatus: apiStatusConstants.initial,
    searchedVideos: [],
  }

  componentDidMount() {
    this.getRequest()
  }

  getRequest = async () => {
    const {searchValue} = this.state
    this.setState({apiStatus: apiStatusConstants.inProgress})

    const jwtToken = Cookies.get('jwt_token')
    const apiUrl = `https://apis.ccbp.in/videos/all?search=${searchValue}`
    const options = {
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
      method: 'GET',
    }
    const response = await fetch(apiUrl, options)

    if (response.ok) {
      const fetchedData = await response.json()
      const updatedData = fetchedData.videos.map(each => ({
        id: each.id,
        channel: {
          name: each.channel.name,
          profileImageUrl: each.channel.profile_image_url,
        },
        publishedAt: each.published_at,
        thumbnailUrl: each.thumbnail_url,
        viewCount: each.view_count,
        title: each.title,
      }))
      this.setState({
        searchedVideos: updatedData,
        apiStatus: apiStatusConstants.success,
      })
    } else {
      this.setState({apiStatus: apiStatusConstants.failure})
    }
  }

  // --------------SEARCH CONTENT ----------------------------------
  onChangeSearchInput = e => {
    this.setState({searchInput: e.target.value})
  }

  onEnterClickSearch = e => {
    const {searchInput} = this.state
    if (e.key === 'Enter') {
      this.setState({searchValue: searchInput}, this.getRequest)
    }
  }

  onClickSearchButton = () => {
    const {searchInput} = this.state
    this.setState({searchValue: searchInput}, this.getRequest)
  }

  // -----------------------LOADER ------------------------------

  renderLoadingView = () => (
    <ProductsLoaderContainer data-testid="loader">
      <Loader type="ThreeDots" color="#0b69ff" height="50" width="50" />
    </ProductsLoaderContainer>
  )

  // ----------------------------------------------------------

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
        <Retry onClick={this.getRequest}>Retry</Retry>
      </NavLink>
    </NotFoundContainer>
  )

  renderHomeVideos = () => {
    const {searchedVideos, searchInput} = this.state

    return (
      <NxtWatchContext.Consumer>
        {value => {
          const {isDark} = value
          const bgColor = isDark ? '#0f0f0f' : '#f9f9f9'
          const isVideosAvailable = searchedVideos.length === 0

          return isVideosAvailable ? (
            <NoVideosFound>
              <Image
                src="https://assets.ccbp.in/frontend/react-js/nxt-watch-no-search-results-img.png"
                className="no-products-img"
                alt="no videos"
              />
              <Heading className="no-products-heading">
                No Search results found
              </Heading>
              <Desc className="no-products-description">
                Try different key words or remove search filter
              </Desc>
              <Retry onClick={this.getSuggestionVideos}>Retry</Retry>
            </NoVideosFound>
          ) : (
            <SearchedVideoContainer color={bgColor}>
              <SearchBox isDark={isDark}>
                <SearchContainer isDark={isDark}>
                  <SearchBar
                    isDark={isDark}
                    type="search"
                    placeholder="Search"
                    value={searchInput}
                    onChange={this.onChangeSearchInput}
                    onKeyDown={this.onEnterClickSearch}
                  />
                  <SearchBtn
                    type="button"
                    data-testid="searchButton"
                    onClick={this.onClickSearchButton}
                  >
                    <SearchIcon isDark={isDark} />
                  </SearchBtn>
                </SearchContainer>
              </SearchBox>
              <VideoContainer>
                {searchedVideos.map(eachVideo => (
                  <VideoItem key={eachVideo.id} details={eachVideo} />
                ))}
              </VideoContainer>
            </SearchedVideoContainer>
          )
        }}
      </NxtWatchContext.Consumer>
    )
  }

  render() {
    return <>{this.renderAllVideos()}</>
  }
}
export default SearchVideos
