import "./App.css";

const pizzaData = [
  {
    name: "Butter Chicken",
    ingredients: "Creamy tomato-based curry with tender chicken pieces",
    price:'₹250',
    photoName: "dishes/Butter Chicken.webp",
    soldOut: false
  },
  {
    name: "Paneer Tikka",
    ingredients: "Grilled cottage cheese marinated in yogurt and spices",
    price:'₹200',
    photoName: "dishes/Paneer Tikka.webp",
    soldOut: false
  },
  {
    name: "Masala Dosa",
    ingredients: "Crispy rice crepe filled with spicy potato stuffing",
    price:'₹75',
    photoName: "dishes/Masala Dosa.webp",
    soldOut: true
  },
  {
    name: "Biryani",
    ingredients: "Aromatic basmati rice cooked with spices and marinated meat",
    price:'₹300',
    photoName: "dishes/biryani.jpeg",
    soldOut: false
  },
  {
    name: "Chole Bhature",
    ingredients: "Spicy chickpea curry served with deep-fried bread",
    price:'₹150',
    photoName: "dishes/chole_bhature.jpeg",
    soldOut: false
  },
  {
    name: "Gulab Jamun",
    ingredients: "Soft deep-fried dumplings soaked in sugar syrup",
    price:'₹50',
    photoName: "dishes/gulab_jamun.jpeg",
    soldOut: false
  }
];


function App() {
  return (
    <div className="container">
      <Header />
      <Menu />
      <Footer />
    </div>
  );
}

function Header() {
  return (
    <>
      <header className="header">
        <h1>  Authentic Indian Delights </h1>
      </header>
    </>
  );
}

function Menu() {
  return (
    <main className="menu">
      <h2>Our menu</h2>

      { pizzaData ? (
            <>
                <p>
                Authentic Indian cuisine. Six creative dishes to choose from. All from our traditional tandoor and clay pots, all organic, all delicious.
                </p>
                <ul className="pizzas">
                   {   pizzaData.map((pizza) => (
                       <Pizza pizzaObj={pizza} key={pizza.name} />
                  ))}
                </ul>
            </>
                      ) :
        (
          <>
            <p>no items</p>
          </>
        )
      }
    </main>
  );
}

function Pizza({ pizzaObj }) {
  return (
    <li className={`pizza ${pizzaObj.soldOut ? "sold-out" : ""}`}>
      <img src={pizzaObj.photoName} alt={pizzaObj.name} />
      <div>
        <h3>{pizzaObj.name}</h3>
        <p>{pizzaObj.ingredients}</p>
        <span>{pizzaObj.soldOut ? "SOLD OUT" : pizzaObj.price}</span>
      </div>
    </li>
  );
}

function Footer() {
  const hour = new Date().getHours();
  const openHour = 10;
  const closeHour = 22;
  const isOpen = hour >= openHour && hour <= closeHour;

  return (
    <footer className="footer">
      {isOpen ? (
        <Order closeHour={closeHour} openHour={openHour} />
      ) : (
        <p>
          We're happy to welcome you between {openHour}:00 and {closeHour}:00.
        </p>
      )}
    </footer>
  );
}

function Order({openHour,closeHour}){
  return (
    <div className="order">
      <p>
        We're open from {openHour}:00 am to {closeHour}:00 pm. Come visit us or order
        online.
      </p>
      <button className="btn">Order</button>
    </div>
  );
}

export default App;
