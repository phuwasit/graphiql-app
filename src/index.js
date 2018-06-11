import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import "../node_modules/graphiql/graphiql.css";
import registerServiceWorker from "./registerServiceWorker";
import GraphiQL from "graphiql";

require("dotenv").config();

const GRAPHQL_HOST = process.env.REACT_APP_GRAPHQL_HOST || 'localhost';
const GRAPHQL_POST = process.env.REACT_APP_GRAPHQL_PORT || 5000;
const ACCESS_TOKEN = process.env.REACT_APP_ACCESS_TOKEN || "";

function graphQLFetcher(graphQLParams) {
  return fetch(`http://${GRAPHQL_HOST}:${GRAPHQL_POST}/graphql`, {
    method: "post",
    mode: "cors",
    headers: {
      "Content-Type": "application/json",
      authorization: `Bearer ${ACCESS_TOKEN}`
    },
    body: JSON.stringify(graphQLParams)
  }).then(response => response.json());
}

ReactDOM.render(
  <GraphiQL fetcher={graphQLFetcher} />,
  document.getElementById("root")
);
registerServiceWorker();
