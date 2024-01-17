import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { store } from "./redux/store";
import { Provider } from "react-redux";
import "./index.css"


import * as process from 'process';

window.global = window;
window.process = process;
window.Buffer = [];

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
   <Provider store={store}>
        <App />
    </Provider>
);

