import styled from 'styled-components'
import {AiOutlineSearch} from 'react-icons/ai'
import {Link} from 'react-router-dom'

export const SearchContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-style: solid;
  border-radius: 5px;
  border-width: 2px;
  width: 50%;
  border-color: #47556990;
  background-color: ${props => (props.isDark ? '#231f20' : '#f9f9f9')};
  @media screen and (max-width: 992px) {
    width: 70%;
    border-width: 1px;
  }
`
export const SearchBtn = styled.button`
  border-color: #47556940;
  margin: 1px;
  outline: none;
  background-color: transparent;
`

export const SearchBar = styled.input`
  border: none;
  background-color: transparent;
  width: 93%;
  padding: 6px;
  outline: none;
  color: ${props => (props.isDark ? '#f9f9f9' : '#231f20')};
  @media screen and (max-width: 992px) {
    padding: 0px 0px 0px 15px;
  }
`
export const SearchIcon = styled(AiOutlineSearch)`
  font-size: 20px;
  margin: 2px 7px;
  color: ${props => (props.isDark ? '#f9f9f9' : '#231f20')};
`

export const VideoContainer = styled.ul`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  @media screen and (max-width: 992px) {
    padding: 0px;
    margin: 0px;
  }
`
export const ProductsLoaderContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`
export const SearchedVideoContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${props => props.bgColor};
  overflow-y: scroll;
  padding: 30px;
  width: 100%;
  @media screen and (max-width: 992px) {
    height: 100%;
    width: 100%;
    padding: 0px;
  }
`
export const SearchBox = styled.div`
  background-color: ${props => (props.isDark ? '#181818' : '#f9f9f9')};
  padding: 3px 15px;
  width: 80%;
  margin-left: 50px;
  margin-top: -30px;
  @media screen and (max-width: 992px) {
    margin: 5px 0px 0px 0px;
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
export const NoVideosFound = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
