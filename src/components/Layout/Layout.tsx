import { Menu } from "../Menu";
import { MenuItem } from "../MenuItem";

import { LayoutWrapper } from "./Layout.styles";
import { LayoutProps } from "./Layout.types";

export const Layout = ({ children }: LayoutProps) => {
    return (
        <LayoutWrapper>
            <Menu>
                <MenuItem text="Home" link="/" />
                <MenuItem text="Menu" link="/" />
                <MenuItem text="Recompensas" link="/" />
                <MenuItem text="Gift Cards" link="/" />
                <MenuItem text="Lojas" link="/" />
            </Menu>

            <main className="content">
                {children}
            </main>
        </LayoutWrapper>
    );
}
