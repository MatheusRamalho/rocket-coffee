import { ReactSVG } from "react-svg";

import { Link } from "../Link";

import brandDesktop from "../../assets/brand-desktop.svg";

import { MenuWrapper } from "./Menu.styles";
import { MenuProps } from "./Menu.types";

export const Menu = ({ children }: MenuProps) => {
    return (
        <MenuWrapper className="">
            <div className="menu-container container">
                <div className="menu-brand">
                    <ReactSVG src={brandDesktop} role="img" aria-label="Logo marca Rocketseat" />
                </div>

                <nav className="menu-nav">
                    <ul className="menu-list">
                        {children}
                    </ul>
                </nav>

                <div className="menu-action">
                    <Link text="Pegar meu café" link="/" />
                </div>
            </div>
        </MenuWrapper>
    );
}
