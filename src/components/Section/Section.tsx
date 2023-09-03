import { SectionWrapper } from './Section.styles'
import { SectionProps } from './Section.types'

export const Section = ({ id, legend, children }: SectionProps) => {
    return (
        <SectionWrapper id={id}>
            <h6 hidden> {legend} </h6>

            <div className="container">{children}</div>
        </SectionWrapper>
    )
}
