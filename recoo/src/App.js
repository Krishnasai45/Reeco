import logo from './logo.svg';
import './App.css';
import NavBar from './componenets/NavBar';
import OrderBar from './componenets/OrderBar';
import Details from './componenets/Details';

function App() {
  return (
    <div className="App">
      <NavBar />
      <OrderBar/>
      <Details/>
      <div>Assign Ment</div>

    </div>
  );
}

export default App;
