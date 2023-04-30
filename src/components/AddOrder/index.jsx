import './addorder.scss';

const AddOrder = () => {
  return ( 
    <div className="addOrder">

      <div className="quantity">
        <p className="label">ORDER</p>
        <div className="container">
          <button className="add">+</button>
            <p className="orderQuantity">0</p>
          <button className="minus">-</button>
        </div>
      </div>
      
      <div className="quantity">
        <p className="label">TOPPING</p>
        <div className="container">
          <button className="add">+</button>
            <p className="orderQuantity">0</p>
          <button className="minus">-</button>
        </div>
      </div>

      <div className="totalContainer">
        <div className="totalDisplay">
          <p className="totalLabel">total</p>
          <p className="totalPrice">RP. 55000</p>
        </div>
        <button className="orderBtn">ORDER</button>
      </div>
    </div>
   );
}
 
export default AddOrder;