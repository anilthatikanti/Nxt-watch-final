import {Component} from 'react'
import {IoMdClose} from 'react-icons/io'
import {
  HomeContainer,
  Container,
  ModelContainer,
  PrimeAD,
  BannerLogo,
  PrimeAdText,
  GetItNowButton,
  CloseBtn,
  HomeSideContainer,
} from './styledComponents'
import SearchVideos from '../SearchVideos'
import Header from '../Header'
import SideItems from '../SideItems'
import NxtWatchContext from '../../Context/NxtWatchContext'
import './index.css'

class Home extends Component {
  state = {display: 'flex'}

  onCloseBanner = () => {
    this.setState({display: 'none'})
  }

  primeAdContainer = () => {
    const {display} = this.state

    return (
      <>
        <PrimeAD display={display} data-testid="banner">
          <ModelContainer>
            <BannerLogo
              src=" https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png"
              alt="nxt watch logo"
            />
            <PrimeAdText display={display}>
              Buy Nxt Watch Premium prepaid plans with UPI
            </PrimeAdText>
            <GetItNowButton>GET IT NOW</GetItNowButton>
          </ModelContainer>
          <CloseBtn
            type="button"
            data-testid="close"
            onClick={this.onCloseBanner}
          >
            <IoMdClose />
          </CloseBtn>
        </PrimeAD>
        <SearchVideos />
      </>
    )
  }

  render() {
    return (
      <NxtWatchContext.Consumer>
        {value => {
          const {isDark} = value
          const bgColor = isDark ? '#181818' : '#f9f9f9'
          return (
            <HomeContainer isDark={isDark}>
              <Header />
              <Container>
                <SideItems />
                <HomeSideContainer color={bgColor} data-testid="home">
                  {this.primeAdContainer()}
                </HomeSideContainer>
              </Container>
            </HomeContainer>
          )
        }}
      </NxtWatchContext.Consumer>
    )
  }
}
export default Home
