import { BrowserRouter, Switch, Route } from "react-router-dom";
import Coin from "./routes/Coin.tsx";
import Coins from "./routes/Coins.tsx";

interface IRouterProps {}

function Router({}: IRouterProps) {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/:coinId">
                    <Coin />
                </Route>
                <Route path="/">
                    <Coins />
                </Route>
            </Switch>
        </BrowserRouter>
    );
}
export default Router;