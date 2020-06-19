import React, { useState, useEffect } from 'react';
import { Router, Switch, Route } from 'react-router';
import { createBrowserHistory } from 'history';
import Navbar from './components/shared/Navbar';
import { Container, Dimmer, Loader } from 'semantic-ui-react';
import Home from './components/Home';
import People from './components/People';
import Planets from './components/Planets';

const browserHistory = createBrowserHistory();

function App() {
  const [people, setPeople] = useState([]);
  const [planets, setPlanets] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchPeople();
    fetchPlanets();
  }, []);

  async function fetchPeople(page = 1) {
    let res = await fetch(`https://swapi.dev/api/people/?page=${page}`)
      .then((data) => data.json())
      .catch((err) => console.log(err));
    setPeople(res.results);
    setLoading(false);
  }

  async function fetchPlanets(page = 1) {
    let res = await fetch(`https://swapi.dev/api/planets/?page=${page}`)
      .then((data) => data.json())
      .catch((err) => console.log(err));
    setPlanets(res.results);
    setLoading(false);
  }

  return (
    <React.Fragment>
      <Router history={browserHistory}>
        <Navbar />
        <Container>
          {loading ? (
            <Dimmer active inverted>
              <Loader inverted>Loading</Loader>
            </Dimmer>
          ) : (
            <Switch>
              <Route path='/' exact>
                <Home />
              </Route>
              <Route path='/people' exact>
                <People
                  data={people}
                  updatePage={(page) => {
                    fetchPeople(page);
                  }}
                />
              </Route>
              <Route path='/planets' exact>
                <Planets
                  data={planets}
                  updatePage={(page) => {
                    fetchPlanets(page);
                  }}
                />
              </Route>
            </Switch>
          )}
        </Container>
      </Router>
    </React.Fragment>
  );
}

export default App;
