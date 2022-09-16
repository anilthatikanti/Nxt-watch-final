import styled from 'styled-components'
import {Link} from 'react-router-dom'

export const HomeContainer = styled.div`
  background-color: ${props => (props.isDark ? '#181818 ' : '#f9f9f9')};
  height: 98vh;
  padding: 20px;
  background-size: cover;
`
export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  height: 100%;
`
export const VideoContainer = styled.ul`
  display: flex;
  flex-direction: column;
  padding: 0px;
  margin: 0px;
`

export const HomeSideContainer = styled.div`
  display: flex;
  flex-direction: column;
  overflow-y: scroll;
  width: 90%;
  background-color: ${props => props.bgColor};
`
export const ProductsLoaderContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
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
  width: 250px;
  margin: 20px;
`
export const Heading = styled.h1`
  color: black;
  text-align: center;
  font-size: 20px;
`
export const Desc = styled.p`
  color: black;
  text-align: center;
  font-size: 12px;
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
  padding: 5px 15px;
  color: #ffffff;
  cursor: pointer;
  align-self: center;
  border: none;
  border-radius: 4px;
  background-color: #4f46e5;
  margin-bottom: 20px;
`
export const NoVideosFound = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
export const SearchVideosContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${props => props.bgColor};
  overflow-y: scroll;
  padding: 30px;
`
export const TrendingHeadContainer = styled.div`
  display: flex;
  align-items: center;
  height: 100px;
  margin-left: 50px;
  background-color: ${props => props.bgColor};
  color: ${props => props.color}
  width: 100%;
`
export const VideosContainer = styled.ul`
  display: flex;
  flex-direction: column;
  list-style-type: none;
  padding: 0px;
  margin: 0px;
`
export const TrendingLogo = styled.div`
  background-color: #94a3b8;
  border: 0px none;
  border-radius: 50px;
  height: 50px;
  width: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 10px;
`
export const TrendingHead = styled.h1`
  color: ${props => props.color};
  font-family: 'Roboto';
  font-weight: bold;
`
