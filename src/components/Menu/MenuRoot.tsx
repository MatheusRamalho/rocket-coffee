'use client'

import { useState, ReactNode } from 'react'
import Image from 'next/image'

import { Anchor } from '../Anchor'

import brandDesktop from '@/assets/svgs/brand-desktop.svg'
import brandMobile from '@/assets/svgs/brand-mobile.svg'
import menuOpen from '@/assets/svgs/menu-open.svg'
import menuClose from '@/assets/svgs/menu-close.svg'

interface MenuRootProps {
    children: ReactNode
}

export const MenuRoot = ({ children }: MenuRootProps) => {
    const [menuImgAction, setMenuImgAction] = useState(menuOpen)
    const [mobileOpen, setMobileOpen] = useState(false)

    const handleToggleMenu = () => {
        menuImgAction === menuOpen
            ? setMenuImgAction(menuClose)
            : setMenuImgAction(menuOpen)
        mobileOpen === false ? setMobileOpen(true) : setMobileOpen(false)
    }

    return (
        <header className="w-full fixed lg:static top-0 lg:top-auto h-[5.5rem] lg:h-14 border-b border-b-gray-900 lg:border-none">
            <div className="h-[inherit] container mx-auto px-6 flex items-center justify-between gap-14">
                <div className="h-auto">
                    <Image
                        id="brand-desktop"
                        src={brandDesktop}
                        role="img"
                        alt="Logo marca Rocketseat"
                        className="hidden lg:block"
                    />

                    <Image
                        id="brand-mobile"
                        src={brandMobile}
                        role="img"
                        alt="Logo marca Rocketseat"
                        className="block lg:hidden"
                    />
                </div>

                <nav
                    className={`flex-1 absolute lg:static top-[88px] lg:top-auto left-0 lg:left-auto w-full lg:w-fit h-screen lg:h-[inherit] transition-all hidden lg:block bg-gray-900 lg:bg-transparent ${
                        mobileOpen && '!block'
                    }`}
                >
                    <ul className="h-[inherit] w-full flex items-center flex-col lg:flex-row justify-start lg:justify-center gap-0 lg:gap-8">
                        {' '}
                        {children}{' '}
                    </ul>
                </nav>

                <div className="menu-action">
                    <Anchor
                        text="Pegar meu café"
                        link="/"
                        customClass="hidden lg:block opacity-0 lg:opacity-100 pointer-events-none lg:pointer-events-auto"
                    />

                    <Image
                        className="cursor-pointer block lg:hidden size-8"
                        src={menuImgAction}
                        role="img"
                        alt="Logo marca Rocketseat"
                        onClick={() => handleToggleMenu()}
                    />
                </div>
            </div>
        </header>
    )
}
