import styled from 'styled-components'
import {Link} from 'react-router-dom'

export const HomeContainer = styled.div`
  background-color: ${props => (props.isDark ? '#181818 ' : '#f9f9f9')};
  height: 98vh;
  padding: 20px;
  background-size: cover;
  @media screen and (max-width: 992px) {
    width: 100%;
    height: 100vh;
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
export const GamingHeading = styled.h1`
  color: ${props => (props.isDark ? '#f9f9f9' : '#0f0f0f')};
`
export const HomeSideContainer = styled.div`
  display: flex;
  flex-direction: column;
  overflow-y: scroll;
  width: 90%;
  background-color: ${props => props.bgColor};
  @media screen and (max-width: 992px) {
    width: 100%;
    padding: 0px;
  }
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
export const SearchVideosContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${props => props.bgColor};
  overflow-y: scroll;
  padding: 30px;
  @media screen and (max-width: 992px) {
    padding: 10px;
  }
`
export const VideosContainer = styled.ul`
  width: 100%;
  display: flex;
  flex-direction: row;
  list-style-type: none;
  flex-wrap: wrap;
  padding: 0px;
  margin: 0px;
  @media screen and (max-width: 992px) {
    padding: 0px;
    margin: 0px;
    justify-content: space-between;
  }
`
export const ProductsLoaderContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`
