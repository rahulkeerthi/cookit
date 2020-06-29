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
  palette: {
    common: { black: 'rgba(41, 41, 50, 1)', white: '#fff' },
    background: { paper: 'rgba(245, 241, 248, 1)', default: 'rgba(249, 241, 241, 1)' },
    primary: {
      light: 'rgba(207, 188, 223, 1)',
      main: 'rgba(186, 143, 149, 1)',
      dark: 'rgba(154, 87, 111, 1)',
      contrastText: 'rgba(41, 41, 50, 1)',
    },
    secondary: {
      light: 'rgba(214, 193, 109, 1)',
      main: 'rgba(193, 164, 47, 1)',
      dark: 'rgba(150, 126, 31, 1)',
      contrastText: 'rgba(41, 41, 50, 1)',
    },
    error: {
      light: 'rgba(218, 174, 174, 1)',
      main: 'rgba(243, 124, 115, 1)',
      dark: '#d32f2f',
      contrastText: '#fff',
    },
    text: {
      primary: 'rgba(41, 41, 50, 1)',
      secondary: 'rgba(0, 0, 0, 0.54)',
      disabled: 'rgba(0, 0, 0, 0.38)',
      hint: 'rgba(0, 0, 0, 0.38)',
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
