import {Component} from 'react'
import Cookies from 'js-cookie'
import Loader from 'react-loader-spinner'
import ReactPlayer from 'react-player'
import {
  AiOutlineLike,
  AiOutlineDislike,
  AiFillLike,
  AiFillDislike,
} from 'react-icons/ai'
import {RiPlayListAddFill} from 'react-icons/ri'
import {
  ProductsLoaderContainer,
  HomeContainer,
  HomeSideContainer,
  Container,
  VideoDetailsTitle,
  ViewsText,
  IconContainer,
  ViewsCount,
  ViewsDetailsContainer,
  LikesContainer,
  HorizontalLine,
  ChannelLogo,
  ChannelContainer,
  LogoContainer,
  ChannelDetailsContainer,
  NotFoundContainer,
  Image,
  Heading,
  Desc,
  NavLink,
  Retry,
} from './StyledComponents'
import Header from '../Header'
import SideItems from '../SideItems'
import NxtWatchContext from '../../Context/NxtWatchContext'

const apiStatusConstants = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  failure: 'FAILURE',
  inProgress: 'IN_PROGRESS',
}

class VideoItemDetails extends Component {
  state = {
    like: false,
    dislike: false,
    isVideoSaved: false,
    apiStatus: apiStatusConstants.initial,
    videoDetails: [],
  }

  componentDidMount() {
    this.getVideoDetails()
  }

  getVideoDetails = async () => {
    this.setState({apiStatus: apiStatusConstants.inProgress})
    const {match} = this.props
    const {params} = match
    const {id} = params
    const Token = Cookies.get('jwt_token')
    const apiUrl = `https://apis.ccbp.in/videos/${id}`
    const options = {
      methods: 'GET',
      headers: {
        authorization: `Bearer ${Token}`,
      },
    }
    const response = await fetch(apiUrl, options)
    if (response.ok) {
      const data = await response.json()
      const updateVideoDetails = {
        id: data.video_details.id,
        description: data.video_details.description,
        publishedAt: data.video_details.published_at,
        thumbnailUrl: data.video_details.thumbnail_url,
        title: data.video_details.title,
        videoUrl: data.video_details.video_url,
        viewCount: data.video_details.view_count,
        channel: {
          name: data.video_details.channel.name,
          profileImageUrl: data.video_details.channel.profile_image_url,
          subscriberCount: data.video_details.channel.subscriber_count,
        },
      }
      this.setState({
        videoDetails: updateVideoDetails,
        apiStatus: apiStatusConstants.success,
      })
    } else {
      this.setState({apiStatus: apiStatusConstants.failure})
    }
  }

  renderLoadingView = () => (
    <ProductsLoaderContainer
      className="products-loader-container"
      data-testid="loader"
    >
      <Loader type="ThreeDots" color="#0b69ff" height="50" width="50" />
    </ProductsLoaderContainer>
  )

  renderVideoDetails = () => {
    const {videoDetails} = this.state
    const {
      id,
      description,
      viewCount,
      videoUrl,
      channel,
      title,
      publishedAt,
    } = videoDetails
    const {name, profileImageUrl, subscriberCount} = channel

    return (
      <NxtWatchContext.Consumer>
        {value => {
          const {like, dislike, isVideoSaved} = this.state
          const {isDark, removeSavedVideo, addToSave, savedVideos} = value

          const bgColor = isDark ? '#0f0f0f' : '#f9f9f9'

          const likeClass = like ? '#2563eb' : '#64748b'

          const dislikeClass = dislike ? '#2563eb' : '#64748b'

          const savedVideo = savedVideos.find(each => each.id === id)

          const likeIcon = like ? <AiFillLike /> : <AiOutlineLike />

          const dislikeIcon = dislike ? <AiFillDislike /> : <AiOutlineDislike />

          const onClickLikeButton = () => {
            this.setState(prevState => ({
              like: !prevState.like,
              dislike: false,
            }))
          }

          const onClickDislikeButton = () => {
            this.setState(prevState => ({
              dislike: !prevState.dislike,
              like: false,
            }))
          }
          const addOrRemove = () => {
            if (isVideoSaved === true) {
              this.setState({isVideoSaved: false}, removeSavedVideo(id))
            } else {
              addToSave({...videoDetails, like, dislike, isVideoSaved})
            }
          }

          const saveVideoToList = async () => {
            await this.setState(
              prev => ({isVideoSaved: !prev.isVideoSaved}),
              addOrRemove,
            )
          }

          return (
            <HomeContainer isDark={isDark}>
              <Header />
              <Container>
                <SideItems />
                <HomeSideContainer
                  isDark={isDark}
                  bgColor={bgColor}
                  data-testid="videoItemDetails"
                >
                  <ReactPlayer
                    url={videoUrl}
                    controls
                    width="90%"
                    height="500px"
                  />
                  <VideoDetailsTitle isDark={isDark}>{title}</VideoDetailsTitle>
                  <ViewsDetailsContainer>
                    <ViewsCount>
                      <ViewsText color="#64748b">{viewCount} views</ViewsText>
                      <ViewsText color="#64748b">{publishedAt}</ViewsText>
                    </ViewsCount>
                    <LikesContainer>
                      <IconContainer
                        type="button"
                        color={likeClass}
                        onClick={onClickLikeButton}
                      >
                        {likeIcon}
                        <ViewsText color={likeClass}>Like</ViewsText>
                      </IconContainer>
                      <IconContainer
                        color={dislikeClass}
                        type="button"
                        onClick={onClickDislikeButton}
                      >
                        {dislikeIcon}
                        <ViewsText color={dislikeClass}>Dislike</ViewsText>
                      </IconContainer>
                      <IconContainer
                        onClick={saveVideoToList}
                        color={isVideoSaved ? '#4f46e5' : '#64748b'}
                      >
                        <RiPlayListAddFill />
                        <ViewsText color={isVideoSaved ? '#4f46e5' : '#64748b'}>
                          {isVideoSaved ? 'Saved' : 'Save'}
                        </ViewsText>
                      </IconContainer>
                    </LikesContainer>
                  </ViewsDetailsContainer>
                  <HorizontalLine />
                  <ChannelContainer>
                    <LogoContainer>
                      <ChannelLogo src={profileImageUrl} alt="channel logo" />
                    </LogoContainer>
                    <ChannelDetailsContainer>
                      <ViewsText>{name}</ViewsText>
                      <ViewsText>{subscriberCount} Subscribers</ViewsText>
                      <ViewsText> {description}</ViewsText>
                    </ChannelDetailsContainer>
                  </ChannelContainer>
                </HomeSideContainer>
              </Container>
            </HomeContainer>
          )
        }}
      </NxtWatchContext.Consumer>
    )
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
        We are having some trouble to complete your request. Please try again.
      </Desc>
      <NavLink>
        <Retry className="button" type="button" onClick={this.getVideoDetails}>
          Retry
        </Retry>
      </NavLink>
    </NotFoundContainer>
  )

  renderAllVideoDetails = () => {
    const {apiStatus} = this.state

    switch (apiStatus) {
      case apiStatusConstants.success:
        return this.renderVideoDetails()
      case apiStatusConstants.inProgress:
        return this.renderLoadingView()
      case apiStatusConstants.failure:
        return this.renderFailureView()
      default:
        return null
    }
  }

  render() {
    return <>{this.renderAllVideoDetails()}</>
  }
}
export default VideoItemDetails
