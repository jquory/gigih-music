import { url } from '../../api/spotify'
import logoSpotiy from '../../spotify.png'
import gengigih from '../../gengigih-logo.png'
import './style.css'

const Login = () => {
  return (
    <div className='login'>
      <div className="image">
        <img src={logoSpotiy} alt="" />
        <img src={gengigih} alt="" />
      </div>
      <a href={url}>LOGIN</a>
    </div>
  )
}

export default Login