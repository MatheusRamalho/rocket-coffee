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
            height: auto;

            #brand-mobile {
                display: none;
            }
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

        .menu-action {
            .mobile-action {
                cursor: pointer;
                display: none;

                svg {
                    width: ${props => props.theme.sizes.size32};
                    height: ${props => props.theme.sizes.size32};
                }
            }
        }
    }

    @media screen and (max-width: ${props => props.theme.containers.medium}) {
        position: fixed;
        top: 0;

        height: ${props => props.theme.sizes.size88};
        border-bottom: ${props => props.theme.sizes.size1} solid ${props => props.theme.colors.black};

        .menu-container {
            .menu-brand {
                #brand-desktop {
                    display: none;
                }

                #brand-mobile {
                    display: block;
                }
            }

            .menu-action {
                a {
                    display: none;
                    opacity: 0;
                    pointer-events: none;
                }

                .mobile-action {
                    display: block;
                }
            }

            .menu-nav {
                position: absolute;
                top: 88px;
                left: 0;

                width: 100%;
                height: 100vh;
                background-color: ${props => props.theme.colors.blackDark};
                transition: display 5s;

                display: none;

                &--open {
                    display: block;
                }

                .menu-list {
                    width: 100%;

                    flex-direction: column;
                    justify-content: flex-start;
                    gap: 0;
                }
            }
        }
    }
`;
