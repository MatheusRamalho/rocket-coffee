import { Route, Routes } from "react-router-dom";

import { HomePage } from "../pages/Home/Home";
import { NotFoundPage } from "../pages/NotFound/NotFound";

export const Routers = () => {
    return (
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="*" element={<NotFoundPage />} />
        </Routes>
    );
}