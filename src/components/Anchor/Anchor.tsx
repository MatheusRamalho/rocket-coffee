import Link from 'next/link'

interface AnchorProps {
    text: string
    link: string
    customClass?: string
}

export const Anchor = ({ text, link, customClass }: AnchorProps) => {
    return (
        <Link
            className={`cursor-pointer w-fit py-3 px-9 border border-primary-500 rounded-md text-center uppercase font-bold text-white  transition-colors hover:bg-primary-500 hover:border-primary-300 ${customClass}`}
            href={link}
        >
            {text}
        </Link>
    )
}
