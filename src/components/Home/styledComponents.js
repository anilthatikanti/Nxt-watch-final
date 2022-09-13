import styled from 'styled-components'

export const HomeContainer = styled.div`
  background-color: ${props => (props.isDark ? '#181818 ' : '#f9f9f9')};
  height: 100vh;
  padding: 20px;
  background-size: cover;
`
export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  height: 100%;
`
export const VideoContainer = styled.div`
  display: flex;
  flex-direction: column;
`
export const PrimeAD = styled.div`
  display: ${props => props.display};
  background-image: url('https://assets.ccbp.in/frontend/react-js/nxt-watch-banner-bg.png');
  background-size: cover;
  width: 80%;
  height: 40vh;
  padding: 50px;
  justify-content: space-between;
`

export const ModelContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: flex-start;
`
export const BannerLogo = styled.img`
  height: 40px;
`
