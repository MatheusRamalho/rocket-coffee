import { ReactNode } from 'react'

interface SectionProps {
    id: string
    legend: string
    children?: ReactNode
}

export const Section = ({ id, legend, children }: SectionProps) => {
    return (
        <section id={id} className="w-full h-full py-24 px-6">
            <h6 hidden> {legend} </h6>

            <div className="container h-full mx-auto flex flex-col items-center justify-center">
                {children}
            </div>
        </section>
    )
}
