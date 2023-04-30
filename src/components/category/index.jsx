import './category.scss';
const Category = () => {

  const options = [
    {
      "id": 1,
      "name": "BURGER",
    },
    {
      "id": 2,
      "name": "KEBAB",
    },
    {
      "id": 3,
      "name": "MIE",
    },
    {
      "id": 4,
      "name": "AYAM",
    }
  ]

  return ( 
    <div className="category">
      <div className="scroll-container">
        <div className="category-container">
          {
            options.map((item) => {
              return(
                <div className="option-item"key={item.id}>
                  <p>{item.name}</p>
                </div>
              )
            })
          }
        </div>
      </div>
      <div className="category-indicator">
        <div className="container">
          <span className="indicator indicator1"></span>
          <span className="indicator indicator2"></span>
          <span className="indicator indicator3"></span>
        </div>
      </div>
    </div>
   );
}
 
export default Category;