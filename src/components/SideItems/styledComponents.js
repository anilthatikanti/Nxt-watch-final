import styled from 'styled-components'
import {Link} from 'react-router-dom'

export const SideOptionsVideosContainer = styled.div`
  display: flex;
  height: 100%;
  width: 10%;
  flex-direction: column;
  margin-top: 10px;
  justify-content: space-between;
  background-color: ${props => (props.isDark ? '#181818' : '#ffffff80')};
  @media screen and (max-width: 992px) {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 5%;
  }
`
export const SideOptions = styled.ul`
  list-style-type: none;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 20%;
  padding: 0px;
  margin: 0px;
  @media screen and (max-width: 992px) {
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: Center;
  }
`
export const LinkItem = styled(Link)`
  text-decoration: none;
  display: flex;
  align-items: center;
  width: 150px;
  color: ${props => props.color};
  @media screen and (max-width: 992px) {
    width: 100%;
  }
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
  @media screen and (max-width: 992px) {
    display: none;
  }
`
export const ContactUs = styled.p`
  font-size: 15px;
  color: ${props => (props.isDark ? '#ffffff' : '#000000')};
  font-size: 12px;
  font-weight: 700;
`
export const SocialMediaIcons = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100px;
`
export const ImageIcon = styled.img`
  height: 20px;
  margin: 10px 0px;
`
export const ThankingNote = styled.p`
  color: ${props => (props.isDark ? '#ffffff90' : '#000000')};
  font-size: 10px;
  font-weight: 700;
  width: 130px;
`
