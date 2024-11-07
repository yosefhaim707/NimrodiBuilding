import { Navigate, Route } from "react-router-dom";


const ProtectedRoute = (path: string, component: JSX.Element, isAllowed: boolean): JSX.Element => {
    return (
        isAllowed ? 
        <Route path={path} element={component} /> 
        : <Navigate to="/forbidden" />
    );
};

