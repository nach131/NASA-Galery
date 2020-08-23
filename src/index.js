import React from "react";
import ReactDOM from "react-dom";
// import Header from './components/Header';
// import Intro from './components/Intro';
import Gallery from './components/Gallery';

import "./styles.css";

// import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';

// const theme = createMuiTheme({
//   palette: {
//     primary: {
//       main: '#0e1525'
//     },
//     secondary: {
//       main: '#c93838'
//     },
//   },
//   status: {
//     danger: 'orange',
//   },
// });

function App() {
  return (
    // <ThemeProvider theme={theme}>
      <div className="App">
        {/* <Header /> */}
        {/* <Intro /> */}
        <Gallery />
      </div>
    // </ThemeProvider>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
