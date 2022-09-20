import styled from 'styled-components'
import {Link} from 'react-router-dom'

export const VideoCardContainer = styled.li`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  max-width: 250px;
  list-style-type: none;
  cursor: pointer;
  margin: 25px;
  padding-bottom: 10px;
  min-height: 400px;
  @media screen and (max-width: 992px) {
    width: 100%;
    max-height: 200px;
    padding: 0px;
    margin: 5px;
  }
`

export const ThumbnailImage = styled.img`
  width: 100%;
  height: 250px;
  object-fit: fill;
`
export const VideoCardBottomContainer = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
`
export const VideoDetailsContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 25px;
`
export const VideoDetailsText = styled.p`
  color: #475569;
  font-family: 'Roboto';
  font-size: 15px;
  font-weight: bold;
  @media screen and (max-width: 992px) {
    padding-top: 10px;
  }
`

export const NavLink = styled(Link)`
  color: #1e293b;
  text-decoration: none;
  margin-bottom: 10px;
`
