import { Outlet } from 'react-router-dom'

import { Menu } from '../../components/Menu'
import { MenuItem } from '../../components/MenuItem'

import { DefaultLayoutWrapper } from './DefaultLayout.styles'

export const DefaultLayout = () => {
    return (
        <DefaultLayoutWrapper>
            <Menu>
                <MenuItem text="Home" link="/" />
                <MenuItem text="Menu" link="/" />
                <MenuItem text="Recompensas" link="/" />
                <MenuItem text="Gift Cards" link="/" />
                <MenuItem text="Lojas" link="/" />
            </Menu>

            <main className="content">
                <Outlet />
            </main>
        </DefaultLayoutWrapper>
    )
}
