import { BrowserRouter, Route, Switch } from "react-router-dom";
import NavBar from "./components/NavBar";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
function App() {
    return (
        <div className="container mx-auto">
            <BrowserRouter>
                <NavBar />
                <Switch>
                    <Route exact={true} path="/" component={Home} />
                    <Route path="/profile" component={Profile} />
                </Switch>
            </BrowserRouter>
        </div>
    );
}

export default App;
