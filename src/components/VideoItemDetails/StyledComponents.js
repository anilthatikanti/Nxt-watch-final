import styled from 'styled-components'
import {Link} from 'react-router-dom'

export const ProductsLoaderContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`
export const HomeContainer = styled.div`
  background-color: ${props => (props.isDark ? '#181818 ' : '#f9f9f9')};
  height: 100vh;
  padding: 20px;
  background-size: cover;
  @media screen and (max-width: 992px) {
    width: 100%;
    padding: 10px;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
  }
`
export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  height: 100%;
  @media screen and (max-width: 992px) {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    width: 100%;
    padding: 0px;
    margin: 0px;
  }
`
export const HomeSideContainer = styled.div`
  display: flex;
  flex-direction: column;
  overflow-y: scroll;
  width: 90%;
  background-color: ${props => props.bgColor};
  padding: 10px;
  background-color: ${props => (props.isDark ? '#0f0f0f' : '#f9f9f9')};
  @media screen and (max-width: 992px) {
    width: 100%;
  }
`
export const ReactPlayerContainer = styled.div`
  width:100vw;
  }
`
export const VideoDetailsTitle = styled.p`
  font-family: 'Roboto';
  color: ${props => (!props.isDark ? '#181818' : '#ffffff')};
  margin-left: 10px;
  font-weight: bold;
  @media screen and (max-width: 992px) {
    font-size: 15px;
    margin: 10px 0px 10px 0px;
  }
`
export const ViewsDetailsContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 90%;
`
export const LikesContainer = styled.div`
  display: flex;
`

export const IconContainer = styled.button`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-right: 15px;
  cursor: pointer;
  background-color: transparent;
  border: 0px none;
  color: ${props => props.color};
`

export const ViewsText = styled.p`
  color: ${props => props.color};
  font-family: 'Roboto';
  margin-left: 10px;
  @media screen and (max-width: 992px) {
    font-size: 13px;
    margin: 5px 0px 5px 0px;
  }
`
export const ViewsCount = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 190px;
`
export const HorizontalLine = styled.hr`
  background-color: #64748b;
  color: #181818;
  width: 98%;
  margin: 15px;
  height: 2px;
  border: none;
`
export const ChannelContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`
export const ChannelLogo = styled.img`
  height: 50px;
  width: 50px;
`
export const LogoContainer = styled.div`
  background-color: #cbd5e1;
  border-radius: 40px;
  padding: 10px;
  width: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const ChannelDetailsContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 20px;
`
export const NotFoundContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100vh;
  align-items: center;
  background-color: #fff;
`

export const Image = styled.img`
  width: 300px;
  margin: 20px;
`

export const Heading = styled.h1`
  color: black;
  text-align: center;
  font-size: 30px;
`

export const Desc = styled.p`
  color: black;
  text-align: center;
  font-size: 20px;
`

export const NavLink = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  color: #1e293b;
  text-decoration: none;
  margin-bottom: 32px;
`

export const Retry = styled.button`
  padding: 15px;
  color: blue;
  cursor: pointer;
`
