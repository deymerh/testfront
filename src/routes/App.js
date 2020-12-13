import { BrowserRouter, Route, Switch } from 'react-router-dom';
import HomePage from '../pages/home/HomePage';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path='/' component={HomePage} />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
