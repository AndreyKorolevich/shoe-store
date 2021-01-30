import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { useSelector } from 'react-redux';
import './App.css';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Catalog from './components/Catalog/Catalog';
import About from './components/About/About';
import Contacts from './components/Contacts/Contacts';
import Cart from './components/Cart/Cart';
import NotCorrectUrl from './components/Error/NotCorrectUrl';
import Main from './components/Main';
import Banner from './components/Common/Banner';
import CardDetail from './components/Catalog/Card/CardDetail';
import Error from './components/Common/Error';
import { getError } from './redux/selectors/error_selector';
import cn from 'classnames';

const App: React.FC = () => {
  const error = useSelector(getError);
  return (
    <div className={cn({ wrapper: error })}>
      <Router>
        <Header />
        <main className='container'>
          <div className='row'>
            <div className='col'>
              <Banner />
              <Switch>
                <Route exact path='/' component={Main} />
                <Route path='/catalog.html' component={Catalog} />
                <Route path='/about.html' component={About} />
                <Route path='/contacts.html' component={Contacts} />
                <Route path='/cart.html' component={Cart} />
                <Route path='/products/:id.html' component={CardDetail} />
                <Route component={NotCorrectUrl} />
              </Switch>
            </div>
          </div>
        </main>
        <Footer />
        <Error />
      </Router>
    </div>
  );
};

export default App;
