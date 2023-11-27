import { BrowserRouter, Switch, Route } from "react-router-dom";
import Coin from "./routes/Coin.tsx";
import Coins from "./routes/Coins.tsx";

interface IRouterProps {
    toggleDark: () => void;
    isDark: boolean;

}
function Router({ toggleDark, isDark }: IRouterProps) {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/:coinId">
                    <Coin isDark={isDark}/>
                </Route>
                <Route path="/">
                    <Coins toggleDark={toggleDark} />
                </Route>
            </Switch>
        </BrowserRouter>
    );
}
export default Router;