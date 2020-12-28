import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom'

import SecurityPage from './containers/SecurityPage'
import HomePage from './containers/HomePage'

function App() {
  return (
    <Router>
      <Switch>

        <Route exact path='/home'>
          <HomePage />
        </Route>

        <Route exact path='/'>
          <SecurityPage />
        </Route>

      </Switch>
    </Router>
  );
}

export default App;
