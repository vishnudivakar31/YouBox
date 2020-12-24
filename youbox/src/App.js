import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom'

import SecurityPage from './containers/SecurityPage'

function App() {
  return (
    <Router>
      <Switch>
        <Route path='/'>
          <SecurityPage />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
