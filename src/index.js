import React from 'react';
import ReactDOM from 'react-dom';
// Apparently this is needed to make MaterialUI work in newer versions
// import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import './index.css';
import App from './App';

// const Wrapper = () => 
//     <MuiThemeProvider>
//         <App />
//     </MuiThemeProvider>
    
// ReactDOM.render(<Wrapper />, document.getElementById('root'));
ReactDOM.render(<App />, document.getElementById('root'))
// registerServiceWorker();
