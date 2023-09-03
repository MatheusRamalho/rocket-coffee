import { useState } from 'react'
import { ReactSVG } from 'react-svg'

import { Link } from '../Link'

import brandDesktop from '../../assets/svgs/brand-desktop.svg'
import brandMobile from '../../assets/svgs/brand-mobile.svg'
import menuOpen from '../../assets/svgs/menu-open.svg'
import menuClose from '../../assets/svgs/menu-close.svg'

import { MenuWrapper } from './Menu.styles'
import { MenuProps } from './Menu.types'

export const Menu = ({ children }: MenuProps) => {
    const [menuImgAction, setMenuImgAction] = useState(menuOpen)
    const [mobileOpen, setMobileOpen] = useState(false)

    const handleToggleMenu = () => {
        menuImgAction === menuOpen ? setMenuImgAction(menuClose) : setMenuImgAction(menuOpen)
        mobileOpen === false ? setMobileOpen(true) : setMobileOpen(false)
    }

    return (
        <MenuWrapper className="">
            <div className="menu-container container">
                <div className="menu-brand">
                    <ReactSVG id="brand-desktop" src={brandDesktop} role="img" aria-label="Logo marca Rocketseat" />
                    <ReactSVG id="brand-mobile" src={brandMobile} role="img" aria-label="Logo marca Rocketseat" />
                </div>

                <nav className={`menu-nav ${mobileOpen && 'menu-nav--open'}`}>
                    <ul className="menu-list">{children}</ul>
                </nav>

                <div className="menu-action">
                    <Link text="Pegar meu café" link="/" />

                    <ReactSVG
                        className="mobile-action"
                        src={menuImgAction}
                        role="img"
                        aria-label="Logo marca Rocketseat"
                        onClick={() => handleToggleMenu()}
                    />
                </div>
            </div>
        </MenuWrapper>
    )
}
