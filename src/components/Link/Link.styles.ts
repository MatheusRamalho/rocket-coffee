import styled from "styled-components";

import { Link } from "react-router-dom";

export const LinkWrapper = styled(Link)`
    cursor: pointer;
    width: fit-content;
    padding: ${props => props.theme.sizes.size12} ${props => props.theme.sizes.size36};
    border: ${props => props.theme.sizes.size1} solid ${props => props.theme.colors.primary};
    border-radius: ${props => props.theme.sizes.size6};
    
    text-align: center;
    text-transform: uppercase;
    font-weight: ${props => props.theme.fonts.bold};
    color: ${props => props.theme.colors.white};
`;
