import { BrowserRouter, Route, Switch } from 'react-router-dom';
import FormPage from '../pages/formulario/FormPage';
import HomePage from '../pages/home/HomePage';
import PaymentPage from '../pages/payment/PaymentPage';
import SuccessPage from '../pages/success/SuccessPage';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route exact path='/form' component={FormPage} />
        <Route exact path='/payment' component={PaymentPage} />
        <Route exact path='/success' component={SuccessPage} />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
