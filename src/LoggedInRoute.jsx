import { memo, useContext } from "react"
import { Redirect, Route } from "react-router"
import { AuthContext } from "./AuthService"

export const LoggedInRoute = memo(({ component: Component, ...rest }) => {
    const user = useContext(AuthContext)
    return (
        <Route
            {...rest}
            render={(props) => user ? (
                <Component {...props} />
            ) : (
                <Redirect to={"/login"} />
            )}
        />
    )
})