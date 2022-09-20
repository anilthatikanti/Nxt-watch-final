import styled from 'styled-components'

export const LoginContainer = styled.div`
  background-color: ${props => (props.isDark ? '#000000' : '#f9f9f9')};
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  @media screen and (max-width: 992px) {
    background-color: ${props => (props.isDark ? '#000000' : '#f9f9f9')};
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 40px;
  }
`
export const FormContainer = styled.div`
  background-color: ${props => (props.isDark ? '#181818 ' : '#ffffff')};
  box-shadow: #181818 1px 1px 16px 0px;
  width: 350px;
  padding: 64px 48px 64px 48px;
  border-radius: 15px;
  @media screen and (max-width: 992px) {
    background-color: ${props => (props.isDark ? '#181818 ' : '#ffffff')};
    box-shadow: #181818 1px 1px 16px 0px;
    width: 100%;
    max-width: 350px;
    padding: 40px 20px;
    border-radius: 15px;
  }
`
export const WebsiteLogo = styled.img`
  height: 20px;
  @media screen and (max-width: 992px) {
    height: 15px;
  }
`
export const Label = styled.label`
  color: ${props => (props.isDark ? '#ffffff40' : '#00000090')};
  font-size: 10px;
  font-weight: 600;
  font-family: 'Roboto';
  @media screen and (max-width: 992px) {
    font-size: 8px;
  }
`
export const InputContainer = styled.div`
  border-style: solid;
  border-color: ${props => (props.isDark ? '#ffffff30' : '#00000030')};
  padding: 5px;
  border-width: 2px;
  border-radius: 3px;
  color: #00000020;
  width: 100%;
  margin-top: 5px;
  background-color: transparent;
  @media screen and (max-width: 992px) {
    border-style: solid;
    border-color: ${props => (props.isDark ? '#ffffff30' : '#00000030')};
    padding: 3px;
    width: 100%;
    border-width: 1px;
    border-radius: 2px;
    color: #00000020;
    margin-top: 5px;
    background-color: transparent;
  }
`
export const ShowPassword = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100px;
  align-items: center;
  font-weight: 600;
  margin-top: -10px;
  margin-bottom: 10px;
  color: ${props => (props.isDark ? '#ffffff' : '#000000')};
  @media screen and (max-width: 992px) {
    max-width: 80px;
    margin-top: -7px;
    margin-bottom: 7px;
  }
`
export const Input = styled.input`
  background-color: transparent;
  outline: none;
  border: none;
  color: ${props => (props.isDark ? '#ffffff' : '#00000060')};
  font-weight: 600;
  outline: none;
`
export const ThemeBtn = styled.button`
  border: none;
  background-color: transparent;
`
export const LoginBtn = styled.button`
  color: ${props => props.color};
  background-color: #3b82f6;
  border-radius: 3px;
  outline: none;
  width: 100%;
  border: none;
  font-size: 10px;
  padding: 5px;
  font-family: 'roboto';
  @media screen and (max-width: 992px) {
    font-size: 7px;
  }
`
