import React from 'react';
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom';
import './App.css';
import ShoppingList from './components/Cart/ShoppingList/ShoppingList'
import Checkout from './components/Cart/Checkout/Checkout'

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/" exact>
          <ShoppingList></ShoppingList>
          </Route>
          <Route path="/checkout" component={Checkout}>
          </Route>
        </Switch>
      </Router>  
    </div>
  );
}

export default App;
