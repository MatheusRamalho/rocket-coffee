import styled from "styled-components";

export const HeaderWrapper = styled.div`
    text-align: center;

    .title,
    .subtitle {
        font-size: ${props => props.theme.sizes.size80};
        font-weight: ${props => props.theme.fonts.bold};
    }

    .subtitle {
        color: transparent;
        -webkit-text-stroke-width: ${props => props.theme.sizes.size2};
        -webkit-text-stroke-color: ${props => props.theme.colors.primary};
    }
`;
