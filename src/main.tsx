import React from "react";
import ReactDOM from "react-dom/client";
import {HashRouter} from "react-router-dom";
import App from "./App";
import "./index.css";
import {Provider} from "react-redux";
import {store} from "./redux/store";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
    <React.StrictMode>
        <Provider store={store}>
            <HashRouter>
                <App/>
            </HashRouter>
        </Provider>
    </React.StrictMode>
);
