import styled from 'styled-components'
import {Link} from 'react-router-dom'

export const VideoCardContainer = styled.li`
  display: flex;
  flex-direction: column;
  max-width: 300px;
  list-style-type: none;
  width: 100%;
  cursor: pointer;
  margin: 25px;
  background-color: ${props => props.bgColor};
  @media screen and (max-width: 992px) {
    max-width: 992px;
    width: 100%;
    margin: 0px;
  }
`

export const ThumbnailImage = styled.img`
  width: 100%;
`
export const VideoCardBottomContainer = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  margin: 5px;
  flex-wrap: wrap;
`

export const ProfileImage = styled.img`
  height: 40px;
  width: 40px;
  margin-right: 10px;
`
export const VideoDetailsContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 10px;
`
export const VideoDetailsText = styled.p`
  color: #475569;
  font-family: 'Roboto';
  font-size: 12px;
  font-weight: bold;
  color: ${props => props.color};
`

export const NavLink = styled(Link)`
  color: #1e293b;
  text-decoration: none;
  margin-bottom: 10px;
  @media screen and (max-width: 992px) {
    margin-top: 5px;
  }
`
