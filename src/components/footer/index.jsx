import HomeIcon from '../../assets/icons/home_icon@2x.png';
import FavIcon from '../../assets/icons/white_heart_icon@2x.png';
import BoughtIcon from '../../assets/icons/hand_coin_icon@2x.png';
import ProfileIcon from '../../assets/icons/profile_settings_icon@2x.png';
import './footer.scss';

const Footer = () => {
  return ( 
    <div className="footer">
      <ul className="nav">
        <li className="nav-item">
          <img src={HomeIcon} alt="home nav" />
        </li>
        <li className="nav-item">
          <img src={FavIcon} alt="favorite icon" />
        </li>
        <li className="nav-item">
          <img src={BoughtIcon} alt="bought icon" />
        </li>
        <li className="nav-item">
          <img src={ProfileIcon} alt="profile settings icon" />
        </li>
      </ul>
    </div>
   );
}
 
export default Footer;