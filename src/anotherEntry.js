import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './styles.css';  // Import CSS file
import AnotherComponent from './anotherEntry'

const root = ReactDOM.createRoot(document.getElementById('root')); // Create a root
root.render(<AnotherComponent/>);