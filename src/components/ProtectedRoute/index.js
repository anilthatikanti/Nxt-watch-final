import Cookies from 'js-cookie'
import {Redirect} from 'react-router-dom'

const ProtectedRoute = props => {
  const Token = Cookies.get('jwt_token')

  if (Token === undefined) {
    return <Redirect to="/login" />
  }
  return <Redirect {...props} />
}

export default ProtectedRoute
