import Link from 'next/link'

interface MenuItemProps {
    text: string
    link: string
}

export const MenuItem = ({ text, link }: MenuItemProps) => {
    return (
        <li
            className="
            cursor-pointer w-full lg:w-fit h-14 lg:h-[inherit] px-8 lg:px-0
            border-l-4 lg:border-l-0 border-l-transparent border-b lg:border-b-4 border-b-gray-700 lg:border-b-transparent
            transition-all duration-75 ease-linear delay-75 flex items-center justify-start lg:justify-center
            group hover:lg:border-b-primary-500 hover:border-l-primary-500 hover:lg:border-l-transparent"
        >
            <Link
                href={link}
                className="text-base text-white group-hover:font-bold"
            >
                {text}
            </Link>
        </li>
    )
}
