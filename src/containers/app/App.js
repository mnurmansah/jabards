import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import Home from '../home/Home';

const history = createBrowserHistory();

function App() {
  return (
    <Container className="pd-20">
      <Row>
        <Col>
          <Router history={history}>
            <Switch>
              <Route path="/" exact component={Home} />
            </Switch>
          </Router>
        </Col>
      </Row>
    </Container>
  );
}

export default App;
