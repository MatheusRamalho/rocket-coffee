import { ReactNode } from 'react'

import { Menu } from '@/components/Menu'

interface SiteLayoutProps {
    children: ReactNode
}

export default function SiteLayout({ children }: SiteLayoutProps) {
    return (
        <div
            className="relative w-full h-screen overflow-hidden p-0 lg:py-14
            before:content-[''] before:z-[-1] before:absolute before:top-0 before:right-0 before:size-80 before:rounded-full before:bg-primary-300 before:blur-[200px]
            after:content-[''] after:z-[-1] after:absolute after:bottom-0 after:left-0 after:size-80 after:rounded-full after:bg-primary-300 after:blur-[200px]"
        >
            <Menu.Root>
                <Menu.Item text="Home" link="/" />
                <Menu.Item text="Menu" link="/" />
                <Menu.Item text="Recompensas" link="/" />
                <Menu.Item text="Gift Cards" link="/" />
                <Menu.Item text="Lojas" link="/" />
            </Menu.Root>

            <main className="h-full mt-[88px] lg:mt-0"> {children} </main>
        </div>
    )
}
