import UserImg from '../../assets/profile/profile1@2x.png';
import './user.scss';

export default function User() {
  return(
    <div className="user-component">
      <img className='user-profile' src={UserImg} alt="user-profile" />
      <div className="name-container">
        <p className="suffix">Mr.</p>
        <p className="user-name">YUDI SETIAWAN</p>
      </div>
    </div>
  )
}