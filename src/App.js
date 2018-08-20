import React, { Component } from 'react';
import './App.css';
import { Route, Switch } from "react-router-dom";
import Home from './components/Home';
import Lists from './components/Lists';
import MovieItem from './components/MovieItem';
import PageTransition from 'react-router-page-transition';


class App extends Component {
  render() {
    return (
      <div className="App">
        <PageTransition timeout={500}>
          <Switch location={this.props.location}>
            <Route exact path="/" component={Home} />
            <Route path="/lists" component={Lists} />
            <Route path="/movieItem/:movieId" component={MovieItem} />
          </Switch>
        </PageTransition>
      </div>
    );
  }
}

export default App;
