import { memo } from "react"
import { Route, Switch } from "react-router"
import { Login } from "../components/pages/Login"
import { Page404 } from "../components/pages/Pgae404"
import { Room } from "../components/pages/Room"
import { SignUp } from "../components/pages/SignUp"
import { LoggedInRoute } from "../LoggedInRoute"

export const Router = memo(() => {
    return (
        <Switch>
            <Route exact path="/">
                <SignUp />
            </Route>
            <Route path="/login">
                <Login />
            </Route>
            <LoggedInRoute path="/room" component={Room} />
            <Route path="*">
                <Page404 />
            </Route>
        </Switch>
    )
})