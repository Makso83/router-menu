import React from "react";
import { Route, BrowserRouter, Switch } from "react-router-dom";
import HomePage from "./components/HomePage";
import DriftPage from "./components/DriftPage";
import TimeAttackPage from "./components/TimeAttackPage";
import ForzaPage from "./components/ForzaPage";
import Menu from "./components/Menu";

export default function App() {
    return (
        <BrowserRouter>
            <div>
                <Menu />
                <div className="page">
                    <Switch>
                        <Route path="/drift" component={DriftPage} />
                        <Route path="/timeattack" component={TimeAttackPage} />
                        <Route path="/forza" component={ForzaPage} />
                        <Route path="/" component={HomePage} />
                    </Switch>
                </div>
            </div>
        </BrowserRouter>
    );
}
