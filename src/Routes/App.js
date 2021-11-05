import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Footer from '../Components/Footer';
import Navigation from '../Components/Navigation';
import Home from '../Views/Home'
import NotFound from '../Views/NotFound';
import Page2 from '../Views/Page2';

function App() {
  return (
    <BrowserRouter>
      <Navigation />
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/view1' component={Page2} />
        <Route path='*' exact={true} component={NotFound} />
      </Switch>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
