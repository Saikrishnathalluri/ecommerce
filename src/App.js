import './App.css';
import Header from './Header'
import  Router from './Router'


import Login from './Login'
import Home from './Home'
import Checkout from './Checkout'
import Footer from './Footer';

function App() {
  return (
    <Router>
      <div className="App">           
        <Switch>
          <Route path="/checkout">
            <Header/>
            <Checkout/>
          </Route>
          <Route path="/login">
            <Login/>
          </Route>
          <Route path="/">
              <Header/>
              <Home/>
              <Footer/>
          </Route>
        </Switch>
          

      </div>
    </Router>
  );
}

export default App;
