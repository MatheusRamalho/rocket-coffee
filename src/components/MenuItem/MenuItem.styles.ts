import styled from "styled-components";

export const MenuItemWrapper = styled.li`
    width: fit-content;
    height: inherit;

    display: flex;
    align-items: center;
    justify-content: center;

    a {
        font-size: ${props => props.theme.sizes.size16};
        color: ${props => props.theme.colors.white};
    }

`;
