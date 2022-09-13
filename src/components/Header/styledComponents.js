import styled from 'styled-components'

export const ThemeBtn = styled.button`
  border: none;
  background-color: transparent;
  color: ${props => props.isDark && '#ffffff'};
`
export const HeaderContainer = styled.div`
  background-color: ${props => (props.isDark ? '#181818' : '#f0f0f0')};
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`
