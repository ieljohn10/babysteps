import './splash.scss';
import BurgerSplash from '../../assets/cover/burger_banner@2x.png';

export default function Splash() {
  return ( 
      <div className="splash">
        <img src={BurgerSplash} alt='burger-image' />
      </div>
   );
}