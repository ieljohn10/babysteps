import { useEffect, useState } from 'react';
import './toppings.scss';

const Toppings = () => {
  const [toppings, setToppings] = useState(null);

  useEffect(()=>{
    fetch('http://localhost:8001/toppings')
      .then( res => {
        return res.json();
      })
      .then( data => {
        setToppings(data);
      });
  }, []);
  
  return ( 
    <>
      <p className='title'>Toping</p>
      <div className="toppings">
        <div className="content">
          {
            toppings &&
            toppings.map((item) => {
              return(
                <div className="toppingContainer" key={item.id}>
                    <div className="topping-item">
                      <img className='toppingImg' src={item.ToppingImg} alt="category image" />
                      <button className='addBtn'>+</button>
                    </div>
                    <div className="priceDesc">
                      <p className='toppingName'>{item.toppingName}</p>
                      <div className="priceContainer">
                        <p className='currency'>RP.</p>
                        <p className='toppingPrice'>{item.price}</p>
                      </div>
                    </div>
                </div>
              )
            })
          }
        </div>

        <div className="productDataContainer">
            
        </div>
      </div>
    </>
   );
}
 
export default Toppings;