import styled from "styled-components";

export const LayoutWrapper = styled.div`
    position: relative;

    width: 100%;
    height: 100vh;
    overflow: hidden;
    padding: ${props => props.theme.sizes.size56} 0;

    &::before,
    &::after {
        content: '';
        z-index: -1;
        position: absolute;

        width: 321px;
        height: 321px;
        border-radius: 100%;
        background: ${props => props.theme.colors.secondary};
        filter: blur(200px);
    }

    &::before {
        top: 0;
        right: 0;
    }

    &::after {
        bottom: 0;
        left: 0;
    }

    main {
        height: 100%;
    }

    @media screen and (max-width: ${props => props.theme.containers.medium}) {
        padding: 0;

        main {
            margin-top: 88px;
            height: 100%;
        }
    }
`;
