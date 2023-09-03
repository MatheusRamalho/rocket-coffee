import styled from 'styled-components'

export const MenuItemWrapper = styled.li`
    cursor: pointer;
    width: fit-content;
    height: inherit;
    border-bottom: ${(props) => props.theme.sizes.size6} solid transparent;
    transition: all 0.5 ease;

    transition:
        border 1s,
        color 2s;

    display: flex;
    align-items: center;
    justify-content: center;

    a {
        font-size: ${(props) => props.theme.sizes.size16};
        color: ${(props) => props.theme.colors.white};
    }

    &:hover {
        border-bottom-color: ${(props) => props.theme.colors.primary};

        a {
            font-weight: ${(props) => props.theme.fonts.bold};
        }
    }

    @media screen and (max-width: ${(props) => props.theme.containers.medium}) {
        width: 100%;
        height: ${(props) => props.theme.sizes.size56};
        padding: 0 ${(props) => props.theme.sizes.size32};
        border-bottom: ${(props) => props.theme.sizes.size1} solid ${(props) => props.theme.colors.black};
        border-left: ${(props) => props.theme.sizes.size6} solid transparent;

        justify-content: flex-start;

        &:hover {
            border-left-color: ${(props) => props.theme.colors.primary};
            border-bottom-color: ${(props) => props.theme.colors.black};

            a {
                font-weight: ${(props) => props.theme.fonts.bold};
            }
        }
    }
`
