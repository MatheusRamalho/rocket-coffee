interface HeaderProps {
    title: string
    subtitle: string
}

export const Header = ({ title, subtitle }: HeaderProps) => {
    return (
        <div className="text-center">
            <h1 className="text-6xl md:text-[5rem] font-extrabold">{title}</h1>

            <h2 className="text-6xl md:text-[5rem] font-extrabold text-transparent text-stroke">
                {`<${subtitle}/>`}
            </h2>
        </div>
    )
}
