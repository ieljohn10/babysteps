import './order.scss';
import StarIcon from '../../assets/icons/star_icon@2x.png';
import BackIcon from '../../assets/icons/back@2x.png';
import FavIcon from '../../assets/icons/heart_icon@2x.png';
import CartIcon from '../../assets/icons/shop_icon@2x.png';
import ShareIcon from '../../assets/icons/share_icon@2x.png';
import ProductBanner from '../../assets/cover/burger_banner@2x.png';
import Toppings from '../../components/toppings';
import AddOrder from '../../components/AddOrder';
import { useContext } from 'react';
import { Link } from 'react-router-dom';

export default function Order() {
  const product = useContext(useContext);
  return(
    <div className="order">
      <div className="header">
          <Link to='/'><img className='backBtn' src={BackIcon} alt="back icon" /></Link>

          <div className="icon-container">
            <img src={FavIcon} alt="favorite icon" />
            <img src={CartIcon} alt="cart icon" />
            <img src={ShareIcon} alt="share icon" />
          </div>
      </div>

      <div className="productOrder">
          <img className='productBanner' src={ProductBanner} alt='burger banner'/>
      </div>
      
      <Toppings product={product} />

        <div className="productDetails">
          <div className="reviewContainer">
            <p className="productName">BURGER BIG <span className="price">RP. 25000</span></p>
            <div className="rateContainer">
              <div className="rateContent">
                <img className='starIcon' src={StarIcon} alt="star icon" />
                <p className='rateNumber'>5.0</p>
              </div>
              <p className="see-reviews">See Reviews</p>
            </div>
          </div>
          <p className='productDesc'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum</p>
        </div>

      <AddOrder />
    </div>
  )
}