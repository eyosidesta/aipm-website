import React from "react";
import { useLocation } from "react-router-dom";
import AdminPageContainer from "./AdminPageContainer";
import SignIn from "./SignIn";

const AppAdmin = () => {
    const location = useLocation();
    return (
        <div>
            {location.pathname !== "/login" ? <AdminPageContainer /> : <SignIn />}
        </div>
    )
}

export default AppAdmin;