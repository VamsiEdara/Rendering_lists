import "./styles.css";
import arr from "../public/content";

export default function App() {
  return (
    <div className="App">
      <ul>
        {arr.map((item) => {
          return (
            // <div className="container">
            <li key={item.id} className="container">
              <img
                className="image"
                src={item.image}
                style={{ width: "150px" }}
              />
              <h3>{item.title}</h3>
              <p>Price: {item.price}</p>
              <p>Ratings: {item.rating.rate}</p>
              {/* <p>Description: {item.description}</p> */}
            </li>
            // </div>
          );
        })}
      </ul>
    </div>
  );
}
// {
//   "id": 1,
//   "title": "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
//   "price": 109.95,
//   "description": "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
//   "category": "men's clothing",
//   "image": "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
//   "rating": {
//   "rate": 3.9,
//   "count": 120
//   }
//   },
