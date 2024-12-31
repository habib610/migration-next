import { BrowserRouter, Route, Switch, useHistory } from "react-router-dom";
import NavBar from "./components/NavBar";
import Dashboard from "./pages/Dashboard";
import Profile from "./pages/Profile";
function App() {
    return (
        <div>
            <BrowserRouter>
                <NavBar />
                <h1>Inside React </h1>
                <Routes />
            </BrowserRouter>
        </div>
    );
}

export default App;

const Routes = () => {
    const history = useHistory();
    return (
        <div className="container mx-auto">
            <Switch>
                {/* <Route exact={true} path="/" component={Profile} />{" "} */}
                <Route exact={true} path="/" component={Profile} />
                <Route exact={true} path="/auth/profile" component={Profile} />
                <Route
                    exact={true}
                    path="/auth/dashboard"
                    component={Dashboard}
                />
            </Switch>
        </div>
    );
};
