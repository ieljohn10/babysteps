
import User from '../../components/user';
import { BsFillBellFill } from "react-icons/bs";
import SearchBar from '../../components/SearchBar';
import Category from '../../components/category';
import Menu from '../../components/Menu';
import Footer from '../../components/footer';
import './home.scss';

export default function Home({ product }){
  return(
    <>
      <div className="home">
        <div className="header">
          <div className="user-container">
            <User />
            <div className="notification-div">
              <span className="red-notif"></span>
              <BsFillBellFill color="B3ADAD" fontSize="1.5em"/>
            </div>
          </div>
          <div className="search">
            <SearchBar />
          </div>
        </div>
        <Category />
        <Menu product={product} />
        <Footer />
      </div>    
    </>
  )
}