import styled from 'styled-components'

export const ThemeBtn = styled.button`
  border: none;
  background-color: transparent;
  color: ${props => props.isDark && '#ffffff'};
  cursor: pointer;
`
export const HeaderContainer = styled.div`
  background-color: ${props => (props.isDark ? '#181818' : '#f0f0f0')};
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  @media screen and (max-width: 992px) {
    max-width: 992px;
    height: 30px;
  }
`
export const LogoutBox = styled.div`
  background-color: ${props => (props.isDark ? '#181818' : '#f0f0f0')};
  color: ${props => (props.isDark ? '#f0f0f0' : '#181818')};
  border-style: solid;
  border-radius: 10px;
  padding: 15px;
  border-width: 1px;
`

export const LogoutBoxOption = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`
export const CancelBtn = styled.button`
  border-color: ${props => (props.isDark ? '#f0f0f0' : '#181818')};
  background-color: transparent;
  color: ${props => (props.isDark ? '#f0f0f0' : '#181818')};
  border-radius: 4px;
  padding: 3px;
  font-weight: 600;
  cursor: pointer;
`
export const ConfirmBtn = styled.button`
  border: none;
  background-color: #3b82f6;
  color: #ffffff;
  font-weight: 600;
  border-radius: 4px;
  padding: 5px;
  cursor: pointer;
`
