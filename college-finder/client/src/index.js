import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import registerServiceWorker from "./registerServiceWorker";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { createBrowserHistory } from 'history';
const history = createBrowserHistory({});


ReactDOM.render(<Router history={history}><Route component={App} /></Router>, document.getElementById("root"));
registerServiceWorker();
