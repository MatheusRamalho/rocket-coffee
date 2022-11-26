import { LinkWrapper } from "./Link.styles";
import { LinkProps } from "./Link.types";

export const Link = ({text, link}: LinkProps) => {
    return (
        <LinkWrapper
            to={link}
        >
            {text}
        </LinkWrapper>
    );
}
