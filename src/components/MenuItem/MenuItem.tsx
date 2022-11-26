import { Link } from "react-router-dom";

import { MenuItemWrapper } from "./MenuItem.styles";
import { MenuItemProps } from "./MenuItem.types";

export const MenuItem = ({text, link}: MenuItemProps) => {
    return (
        <MenuItemWrapper>
            <Link to={link}>
                {text}
            </Link>
        </MenuItemWrapper>
    );
}
