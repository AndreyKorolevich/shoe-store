import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Catalog from './components/Catalog/Catalog';
import About from './components/About/About';
import Contacts from './components/Contacts/Contacts';
import Cart from './components/Cart/Cart';
import Error from './components/Error/Error';
import Main from './components/Main';
import Banner from './components/Common/Banner';
import CardDetail from './components/Catalog/Card/CardDetail';

const App: React.FC = () => (
  <Router>
    <Header />
    <main className="container">
      <div className="row">
        <div className="col">
          <Banner />
          <Switch>
            <Route exact path="/" component={Main} />
            <Route path="/catalog.html" component={Catalog} />
            <Route path="/about.html" component={About} />
            <Route path="/contacts.html" component={Contacts} />
            <Route path="/cart.html" component={Cart} />
            <Route path="/products/:id.html" component={CardDetail} />
            <Route component={Error} />
          </Switch>
        </div>
      </div>
    </main>
    <Footer />
  </Router>
);

export default App;
