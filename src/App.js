import './scss/main.scss';
import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Kit from './pages/Kit';
import { createMuiTheme, CssBaseline, ThemeProvider } from '@material-ui/core';

const theme = createMuiTheme({
  typography: {
    fontFamily: [
      '"IM Fell English"',
      '-apple-system',
      'serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
    subtitle1: {
      fontFamily: ['Lato', 'sans-serif'].join(','),
    },
    subtitle2: {
      fontFamily: ['Lato', 'sans-serif'].join(','),
    },
    body1: {
      fontFamily: ['Lato', 'sans-serif'].join(','),
    },
    body2: {
      fontFamily: ['Lato', 'sans-serif'].join(','),
    },
    button: {
      fontFamily: ['Lato', 'serif'].join(','),
    },
  },
});

function App() {
  return (
    <Router>
      <CssBaseline />
      <div className="App">
        <ThemeProvider theme={theme}>
          <NavBar />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/kit/:id" render={({ match }) => <Kit id={match.params.id} />} />
            {/* <Route
              exact
              path="/restaurant/:id"
              render={({ match }) => <Restaurant restaurant={selectRestaurant(match.params.id)} />}
            /> */}
          </Switch>
          <Footer />
        </ThemeProvider>
      </div>
    </Router>
  );
  // }
}

export default App;
