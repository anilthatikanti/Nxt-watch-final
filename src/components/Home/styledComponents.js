import styled from 'styled-components'

export const HomeContainer = styled.div`
  background-color: ${props => (props.isDark ? '#181818 ' : '#f9f9f9')};
  height: 98vh;
  padding: 20px;
  background-size: cover;
  @media screen and (max-width: 992px) {
    width: 100%;
    padding: 10px;
  }
`
export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  height: 100%;
  @media screen and (max-width: 992px) {
    display: flex;
    flex-direction: column;
    width: 100%;
  }
`
export const VideoContainer = styled.div`
  display: flex;
  flex-direction: column;
`

export const PrimeAD = styled.div`
  display: ${props => props.display};
  background-image: url('https://assets.ccbp.in/frontend/react-js/nxt-watch-banner-bg.png');
  background-size: cover;
  width: 90%;
  height: 40vh;
  padding: 50px;
  margin-left: 100px;
  justify-content: space-between;
  @media screen and (max-width: 992px) {
    width: 100%;
    height: 20vh;
    border-style: solid;
    border-radius: 10px;
    border-color: #00000060;
    border-width: 1px;

    margin: 10px 0px 0px 0px;

    display: flex;
    justify-content: center;
    align-items: center;
  }
`
export const HomeSideContainer = styled.div`
  background-color: ${props => props.color};
  padding: 5px;
  display: flex;
  flex-direction: column;
  overflow-y: scroll;
  width: 90%;
  background-color: ${props => props.bgColor};
  @media screen and (max-width: 992px) {
    width: 100%;
  }
`
export const ModelContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  margin-top: 50px;
  @media screen and (max-width: 992px) {
    margin: 0px;
    width: 100%;
  }
`
export const BannerLogo = styled.img`
  height: 40px;
  @media screen and (max-width: 992px) {
    height: 25px;
  }
`
export const PrimeAdText = styled.p`
  font-size: 15px;
  font-weight: 500;
  display: ${props => props.display};
  @media screen and (max-width: 992px) {
    font-size: 12px;
    margin: 10px 0px;
  }
`
export const GetItNowButton = styled.button`
  background-color: transparent;
  border-width: 2px;
  font-weight: 600;
  font-size: 10px;
  border-color: #1e293b;
  color: #1e293b;
  padding: 5px 5px;
  outline: none;
`
export const CloseBtn = styled.button`
  margin-right: -40px;
  margin-top: -35px;
  font-weight: bold;
  font-size: 20px;
  align-self: flex-start;
  border: none;
  background-color: transparent;
  cursor: pointer;
`
