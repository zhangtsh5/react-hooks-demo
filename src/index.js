import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./index.css";
import { ROUTE_LIST } from './routes'

const rootElement = document.getElementById("root");
ReactDOM.render(
  <Router>
    <div className="app">
      <ul className="sider">
        { ROUTE_LIST.map(([label, _, path]) => (
          <li>
            <Link to={`/${path}`}>{label}</Link>
          </li>
        ))}
      </ul>
      <div id="pageContainer" className="page-container">
        <Switch>
          { ROUTE_LIST.map(([_, Component, path]) => (
            <Route
              key={path}
              path={`/${path}`}
            >
              <Component />
            </Route>
          ))}
          <Route path="/" exact>
            <h1>React Hook 最佳实践培训 Demo 合集</h1>
          </Route>
          <Route path="*">Page not found.</Route>
        </Switch>
      </div>
    </div>
  </Router>,
  rootElement
);
