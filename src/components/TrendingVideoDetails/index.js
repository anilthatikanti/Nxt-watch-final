import NxtWatchContent from '../../Context/NxtWatchContext'

import {
  VideoCardContainer,
  ThumbnailImage,
  VideoCardBottomContainer,
  VideoDetailsContainer,
  VideoDetailsText,
  NavLink,
  ViewsAndDate,
} from './StyledComponents'

const TrendingVideoDetails = props => {
  const {details} = props
  const {title, id, thumbnailUrl, viewCount, channel, publishedAt} = details
  const {name} = channel

  return (
    <NxtWatchContent.Consumer>
      {value => {
        const {isDark} = value
        const bgColor = isDark ? '#0f0f0f' : '#f9f9f9'
        const textColor = isDark ? '#f9f9f9' : '#181818'

        return (
          <NavLink to={`videos/${id}`} color={bgColor}>
            <VideoCardContainer>
              <ThumbnailImage src={thumbnailUrl} alt="video thumbnail" />
              <VideoCardBottomContainer>
                <VideoDetailsContainer>
                  <VideoDetailsText textColor={textColor} size={20}>
                    {title}
                  </VideoDetailsText>
                  <VideoDetailsText textColor={textColor}>
                    {name}
                  </VideoDetailsText>
                  <VideoDetailsText textColor={textColor} size={15}>
                    <ViewsAndDate>
                      <p>{viewCount} views</p>
                      <p>{publishedAt}</p>
                    </ViewsAndDate>
                  </VideoDetailsText>
                </VideoDetailsContainer>
              </VideoCardBottomContainer>
            </VideoCardContainer>
          </NavLink>
        )
      }}
    </NxtWatchContent.Consumer>
  )
}

export default TrendingVideoDetails
