import { HeaderWrapper } from './Header.styles'
import { HeaderProps } from './Header.types'

export const Header = ({ title, subtitle }: HeaderProps) => {
    return (
        <HeaderWrapper>
            <h1 className="title"> {title} </h1>
            <h1 className="subtitle"> {`<${subtitle}/>`} </h1>
        </HeaderWrapper>
    )
}
