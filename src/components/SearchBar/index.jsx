import { MdOutlineShoppingCart } from "react-icons/md";
import SearchIcon from '../../assets/icons/search_icon@2x.png';
import './search.scss';
import { Link } from "react-router-dom";

const SearchBar = () => {
  return ( 
    <div className="searchbar">
      <div className="input-container">
        <input type="text" name="search" id="search" placeholder="Input text"/>
        <img src={SearchIcon} alt="search icon" />
      </div>
      <div className="notification-div">
        <span className="red-notif"></span>
        <Link to='order'><MdOutlineShoppingCart color="B3ADAD" fontSize="1.5625em"/></Link>
      </div>
    </div>
   );
}
 
export default SearchBar;