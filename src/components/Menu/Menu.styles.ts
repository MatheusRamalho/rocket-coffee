import styled from "styled-components";

export const MenuWrapper = styled.header`
    width: 100%;
    height: ${props => props.theme.sizes.size52};

    .menu-container {
        height: inherit;
        padding: 0 ${props => props.theme.sizes.size24};

        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: ${props => props.theme.sizes.size52};

        .menu-brand {
            height: inherit;
        }

        .menu-nav {
            flex: 1;
            height: inherit;

            .menu-list {
                height: inherit;

                display: flex;
                align-items: center;
                justify-content: center;
                gap: ${props => props.theme.sizes.size32};
            }
        }
    }
`;
