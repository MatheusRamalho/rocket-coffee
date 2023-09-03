import { Route, Routes } from 'react-router-dom'

import { DefaultLayout } from '../layouts/DefaultLayout'

import { HomePage } from '../pages/Home'
import { NotFoundPage } from '../pages/NotFound'

export const Routers = () => {
    return (
        <Routes>
            <Route path="/" element={<DefaultLayout />}>
                <Route path="/" element={<HomePage />} />
                <Route path="*" element={<NotFoundPage />} />
            </Route>
        </Routes>
    )
}
