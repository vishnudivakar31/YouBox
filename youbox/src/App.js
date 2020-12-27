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

        <Route path='/home'>
          <HomePage />
        </Route>

        <Route path='/'>
          <SecurityPage />
        </Route>
        
      </Switch>
    </Router>
  );
}

export default App;
