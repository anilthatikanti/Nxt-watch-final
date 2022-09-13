import {Component} from 'react'
import {
  HomeContainer,
  Container,
  ModelContainer,
  PrimeAD,
  BannerLogo,
} from './styledComponents'
import Header from '../Header'
import SideItems from '../SideItems'
import NxtWatchContext from '../../Context/NxtWatchContext'

class Home extends Component {
  state = {display: 'flex'}

  primeAdContainer = () => {
    const {display} = this.state

    return (
      <>
        <PrimeAD display={display}>
          <ModelContainer>
            <BannerLogo
              src=" https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png"
              alt="nxt watch logo"
            />
          </ModelContainer>
        </PrimeAD>
      </>
    )
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
                {this.primeAdContainer()}
              </Container>
            </HomeContainer>
          )
        }}
      </NxtWatchContext.Consumer>
    )
  }
}
export default Home
