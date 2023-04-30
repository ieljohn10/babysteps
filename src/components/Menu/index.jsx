import { useState } from 'react';
import SortIcon from '../../assets/icons/sort_icon@2x.png';
import HeartIcon from '../../assets/icons/white_heart_icon@2x.png';
import './menu.scss';
import { Link } from 'react-router-dom';

const Menu = ({ product }) => {
  const [selectedData, setSelectedData] = useState(null);
  
  const handleClick = (dataToBePass) => {
    return(
      setSelectedData(dataToBePass)
    )
  }
  
  return ( 
    <>
      <div className="menu">
        <div className="menu-header">
          <p>PILIH MENU FAVORIT KAMU</p>
          <div className="sort">
            <p>SORT</p>
            <img src={SortIcon} alt="sort icon" />
          </div>
        </div>
        <Link to='/order'>
          <div className="cardContainer">
              {
                product && 
                product.map((item) => {
                  return (
                    <div className="cardItem" key={item.id} onClick={() => handleClick(item)}>
                      <img src={item.imagepath} id={item.idName} alt={item.alt} />
                      <div className="cardDesc">
                        <p className='producName'>{item.title}</p>
                        <p className='productPrice'>{item.price}</p>
                      </div>
                      <span className="heart">
                        <img src={HeartIcon} alt="heart" />
                      </span>
                    </div>
                  )
                })
              }
          </div>
        </Link>
      </div>
    </>
   );
}
 
export default Menu;