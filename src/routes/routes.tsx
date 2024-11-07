import { FC } from "react";
import ProtectedRoute from "./protectedRoute";
import Reception from "../pages/Reception/Reception";



const Routes: FC = () => {
    return (
        <Routes>
            <ProtectedRoute path="/reception" component={<Reception />} isAllowed={true} />
        </Routes>
    )