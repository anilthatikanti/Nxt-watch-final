import styled from 'styled-components'
import {Link} from 'react-router-dom'

export const SideOptionsVideosContainer = styled.div`
  display: flex;
  height: 100%;
  width: 80px;
  flex-direction: column;
  justify-content: space-between;
`
export const SideOptions = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 20%;
`
export const LinkItem = styled(Link)`
  text-decoration: none;
  display: flex;
  align-items: center;
  width: 150px;
  color: ${props => (props.color ? '#ff0000' : props.isActiveColor)};
`
export const LinkPara = styled.p`
  font-weight: bold;
  color: ${props => props.color};
  margin-left: 8px;
  font-size: 10px;
`
export const SocialMedia = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px 0px;
`
export const ContactUs = styled.h1`
  font-size: 15px;
  color: ${props => (props.isDark ? '#ffffff' : '#000000')};
  font-size: 12px;
  font-weight: 700;
`
export const SocialMediaIcons = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`
export const ImageIcon = styled.img`
  height: 20px;
`
export const ThankingNote = styled.h1`
  color: ${props => (props.isDark ? '#ffffff90' : '#000000')};
  font-size: 10px;
  font-weight: 700;
  width: 130px;
`
