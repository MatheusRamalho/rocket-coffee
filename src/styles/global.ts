import { createGlobalStyle } from "styled-components";
import { handleTypefaceText, handleTypefaceTitle } from "./mixins";

export default createGlobalStyle`
    /* --------------------------------------------------------------------------
    | CSS RESET...
    |-------------------------------------------------------------------------- */
    *, *::before, *::after {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    /* --------------------------------------------------------------------------
    | PAGE...
    |-------------------------------------------------------------------------- */
    html {
        scroll-behavior: smooth;
    }

    body {
        width: 100%;
        min-height: 100vh;
        background-color: ${props => props.theme.colors.blackDark};

        font-family: ${props => props.theme.fonts.family};
        font-weight: ${props => props.theme.fonts.regular};
        color: ${props => props.theme.colors.white};

        scroll-behavior: smooth;

        &::-webkit-scrollbar {
            width: ${props => props.theme.sizes.size12};
            padding-right: ${props => props.theme.sizes.size4};
            background: ${props => props.theme.colors.black};
        }

        &::-webkit-scrollbar-thumb {
            border-radius: ${props => props.theme.sizes.size2};
            background: ${props => props.theme.colors.blackDark};
        }
    }

    /* --------------------------------------------------------------------------
    | LISTS...
    |-------------------------------------------------------------------------- */
    ul, ol {
        list-style-type: none;
    }

    /* --------------------------------------------------------------------------
    | FILES...
    |-------------------------------------------------------------------------- */
    img, picture, video, canvas, svg {
        display: block;
        width: 100%;
    }

    /* --------------------------------------------------------------------------
    | LINKS...
    |-------------------------------------------------------------------------- */
    a {
        ${handleTypefaceText({ size: 'text-3', device: 'desktop' })};

        color: ${props => props.theme.colors.white};
        text-decoration: none;
        outline: none;
        transition: .5s ease;

        &:not(disabled):hover {
            opacity: 0.9;
        }
    }

    /* --------------------------------------------------------------------------
    | TYPOGRAPHYS...
    |-------------------------------------------------------------------------- */
    h1, h2, h3, h4, h5, h6,
    p, span, small, address {
        overflow-wrap: break-word; // Para que o texto quebre...
        hyphens: auto; // Adiciona hífen...
    }

    h1 {
        ${handleTypefaceTitle({ size: 'h1', device: 'desktop' })};
        @include handleResponsive(s) {
            ${handleTypefaceTitle({ size: 'h1', device: 'mobile' })};
        }
    }

    h2 {
        ${handleTypefaceTitle({ size: 'h2', device: 'desktop' })};
        @include handleResponsive(s) {
            ${handleTypefaceTitle({ size: 'h2', device: 'mobile' })};
        }
    }

    h3 {
        ${handleTypefaceTitle({ size: 'h3', device: 'desktop' })};
        @include handleResponsive(s) {
            ${handleTypefaceTitle({ size: 'h3', device: 'mobile' })};
        }
    }

    h4 {
        ${handleTypefaceTitle({ size: 'h4', device: 'desktop' })};
        @include handleResponsive(s) {
            ${handleTypefaceTitle({ size: 'h4', device: 'mobile' })};
        }
    }

    h5 {
        text-transform: uppercase;

        ${handleTypefaceTitle({ size: 'h5', device: 'desktop' })};
        @include handleResponsive(s) {
            ${handleTypefaceTitle({ size: 'h5', device: 'mobile' })};
        }
    }

    p {
        ${handleTypefaceText({ size: 'text-2', device: 'desktop' })};

        @include handleResponsive(s) {
            ${handleTypefaceText({ size: 'text-2', device: 'mobile' })};
        }
    }

    /* --------------------------------------------------------------------------
    | CONTAINERS...
    |-------------------------------------------------------------------------- */
    .container {
        max-width: ${props => props.theme.containers.extraLarge};
        overflow: hidden;
        margin: 0 auto;
        padding: ${props => props.theme.sizes.size96} ${props => props.theme.sizes.size24};

        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: row;

        @include handleResponsive(s) {
            padding: ${props => props.theme.sizes.size32} ${props => props.theme.sizes.size18};
            flex-direction: column;
        }
    }

    /* --------------------------------------------------------------------------
    | FLEXBOX...
    |-------------------------------------------------------------------------- */
    .flex {
        display: flex;
        align-items: center;
        justify-content: normal;

        &--start {
            justify-content: flex-start;
        }

        &--center {
            justify-content: center;
        }

        &--end {
            justify-content: flex-end;
        }

        &--between {
            justify-content: space-between;
        }

        &--column {
            flex-direction: column;
        }

        &--row {
            flex-direction: row;
        }

        &--wrap {
            flex-wrap: wrap;
        }

        &--start-a {
            align-items: flex-start;
        }

        &--end-a {
            align-items: flex-end;
        }
    }

    /*
        Propriedade flex, é um atalho para as propriedades:
        - flex-grow (Capacidade do item crescer)...
        - flex-shrink (Capacidade de redução do item)...
        - flex-basis (Tamanho inicial do item)...
    */
    .flex-item {
        flex: 0 1 22.5rem;

        &--1 {
            flex-grow: 1;
        }

        &--2 {
            flex-grow: 2;
        }

        &--3 {
            flex-grow: 3;
        }

        &--4 {
            flex-grow: 4;
        }

        &--5 {
            flex-grow: 5;
        }

        &--auto {
            flex: 2 1 auto;
        }
    }

    /* --------------------------------------------------------------------------
    | WIDTHS...
    |-------------------------------------------------------------------------- */
    .w {
        &.w--auto {
            width: auto;
        }

        &.w--100 {
            width: 100%;
        }

        &.w--85 {
            width: 85%;
        }

        &.w--75 {
            width: 75%;
        }

        &.w--50 {
            width: 50%;
        }

        &.w--25 {
            width: 25%;
        }
    }

    /* --------------------------------------------------------------------------
    | MARGIN...
    |-------------------------------------------------------------------------- */
    .m {
        &--0 {
            margin: 0;
        }

        &--1 {
            margin: ${props => props.theme.sizes.size8};
        }

        &--2 {
            margin: ${props => props.theme.sizes.size16};
        }

        &--3 {
            margin: ${props => props.theme.sizes.size24};
        }

        &--4 {
            margin: ${props => props.theme.sizes.size32};
        }

        &--5 {
            margin: ${props => props.theme.sizes.size48};
        }

        &--6 {
            margin: ${props => props.theme.sizes.size64};
        }

        &--7 {
            margin: ${props => props.theme.sizes.size72};
        }

        &--8 {
            margin: ${props => props.theme.sizes.size96};
        }

        &--9 {
            margin: ${props => props.theme.sizes.size128};
        }

        &--auto {
            margin: 0 auto;
        }
    }

    .mt {
        &--0 {
            margin-top: 0;
        }

        &--1 {
            margin-top: ${props => props.theme.sizes.size8};
        }

        &--2 {
            margin-top: ${props => props.theme.sizes.size16};
        }

        &--3 {
            margin-top: ${props => props.theme.sizes.size24};
        }

        &--4 {
            margin-top: ${props => props.theme.sizes.size32};
        }

        &--5 {
            margin-top: ${props => props.theme.sizes.size48};
        }

        &--6 {
            margin-top: ${props => props.theme.sizes.size64};
        }

        &--7 {
            margin-top: ${props => props.theme.sizes.size72};
        }

        &--8 {
            margin-top: ${props => props.theme.sizes.size96};
        }

        &--9 {
            margin-top: ${props => props.theme.sizes.size128};
        }
    }

    .mr {
        &--0 {
            margin-right: 0;
        }

        &--1 {
            margin-right: ${props => props.theme.sizes.size8};
        }

        &--2 {
            margin-right: ${props => props.theme.sizes.size16};
        }

        &--3 {
            margin-right: ${props => props.theme.sizes.size24};
        }

        &--4 {
            margin-right: ${props => props.theme.sizes.size32};
        }

        &--5 {
            margin-right: ${props => props.theme.sizes.size48};
        }

        &--6 {
            margin-right: ${props => props.theme.sizes.size64};
        }

        &--7 {
            margin-right: ${props => props.theme.sizes.size72};
        }

        &--8 {
            margin-right: ${props => props.theme.sizes.size96};
        }

        &--9 {
            margin-right: ${props => props.theme.sizes.size128};
        }
    }

    .mb {
        &--0 {
            margin-bottom: 0;
        }

        &--1 {
            margin-bottom: ${props => props.theme.sizes.size8};
        }

        &--2 {
            margin-bottom: ${props => props.theme.sizes.size16};
        }

        &--3 {
            margin-bottom: ${props => props.theme.sizes.size24};
        }

        &--4 {
            margin-bottom: ${props => props.theme.sizes.size32};
        }

        &--5 {
            margin-bottom: ${props => props.theme.sizes.size48};
        }

        &--6 {
            margin-bottom: ${props => props.theme.sizes.size64};
        }

        &--7 {
            margin-bottom: ${props => props.theme.sizes.size72};
        }

        &--8 {
            margin-bottom: ${props => props.theme.sizes.size96};
        }

        &--9 {
            margin-bottom: ${props => props.theme.sizes.size128};
        }
    }

    .ml {
        &--0 {
            margin-left: 0;
        }

        &--1 {
            margin-left: ${props => props.theme.sizes.size8};
        }

        &--2 {
            margin-left: ${props => props.theme.sizes.size16};
        }

        &--3 {
            margin-left: ${props => props.theme.sizes.size24};
        }

        &--4 {
            margin-left: ${props => props.theme.sizes.size32};
        }

        &--5 {
            margin-left: ${props => props.theme.sizes.size48};
        }

        &--6 {
            margin-left: ${props => props.theme.sizes.size64};
        }

        &--7 {
            margin-left: ${props => props.theme.sizes.size72};
        }

        &--8 {
            margin-left: ${props => props.theme.sizes.size96};
        }

        &--9 {
            margin-left: ${props => props.theme.sizes.size128};
        }
    }

    .mx {
        &--0 {
            margin-left: 0;
            margin-right: 0;
        }

        &--1 {
            margin-left: ${props => props.theme.sizes.size8};
            margin-right: ${props => props.theme.sizes.size8};
        }

        &--2 {
            margin-left: ${props => props.theme.sizes.size16};
            margin-right: ${props => props.theme.sizes.size16};
        }

        &--3 {
        margin-left: ${props => props.theme.sizes.size24};
            margin-right: ${props => props.theme.sizes.size24};
        }

        &--4 {
            margin-left: ${props => props.theme.sizes.size32};
            margin-right: ${props => props.theme.sizes.size32};
        }

        &--5 {
            margin-left: ${props => props.theme.sizes.size48};
            margin-right: ${props => props.theme.sizes.size48};
        }

        &--6 {
            margin-left: ${props => props.theme.sizes.size64};
            margin-right: ${props => props.theme.sizes.size64};
        }

        &--7 {
        margin-left: ${props => props.theme.sizes.size72};
            margin-right: ${props => props.theme.sizes.size72};
        }

        &--8 {
            margin-left: ${props => props.theme.sizes.size96};
            margin-right: ${props => props.theme.sizes.size96};
        }

        &--9 {
            margin-left: ${props => props.theme.sizes.size128};
            margin-right: ${props => props.theme.sizes.size128};
        }
    }

    .my {
        &--0 {
            margin-top: 0;
            margin-bottom: 0;
        }

        &--1 {
            margin-top: ${props => props.theme.sizes.size8};
            margin-bottom: ${props => props.theme.sizes.size8};
        }

        &--2 {
            margin-top: ${props => props.theme.sizes.size16};
            margin-bottom: ${props => props.theme.sizes.size16};
        }

        &--3 {
            margin-top: ${props => props.theme.sizes.size24};
            margin-bottom: ${props => props.theme.sizes.size24};
        }

        &--4 {
            margin-top: ${props => props.theme.sizes.size32};
            margin-bottom: ${props => props.theme.sizes.size32};
        }

        &--5 {
            margin-top: ${props => props.theme.sizes.size48};
            margin-bottom: ${props => props.theme.sizes.size48};
        }

        &--6 {
            margin-top: ${props => props.theme.sizes.size64};
            margin-bottom: ${props => props.theme.sizes.size64};
        }

        &--7 {
            margin-top: ${props => props.theme.sizes.size72};
            margin-bottom: ${props => props.theme.sizes.size72};
        }

        &--8 {
            margin-top: ${props => props.theme.sizes.size96};
            margin-bottom: ${props => props.theme.sizes.size96};
        }

        &--9 {
            margin-top: ${props => props.theme.sizes.size128};
            margin-bottom: ${props => props.theme.sizes.size128};
        }
    }

    /* --------------------------------------------------------------------------
    | PADDING...
    |-------------------------------------------------------------------------- */
    .p {
        &--0 {
            padding: 0;
        }

        &--1 {
            padding: ${props => props.theme.sizes.size8};
        }

        &--2 {
            padding: ${props => props.theme.sizes.size16};
        }

        &--3 {
            padding: ${props => props.theme.sizes.size24};
        }

        &--4 {
            padding: ${props => props.theme.sizes.size32};
        }

        &--5 {
            padding: ${props => props.theme.sizes.size48};
        }

        &--6 {
            padding: ${props => props.theme.sizes.size64};
        }

        &--7 {
            padding: ${props => props.theme.sizes.size72};
        }

        &--8 {
            padding: ${props => props.theme.sizes.size96};
        }

        &--9 {
            padding: ${props => props.theme.sizes.size128};
        }
    }

    .pt {
        &--0 {
            padding-top: 0;
        }

        &--1 {
            padding-top: ${props => props.theme.sizes.size8};
        }

        &--2 {
            padding-top: ${props => props.theme.sizes.size16};
        }

        &--3 {
            padding-top: ${props => props.theme.sizes.size24};
        }

        &--4 {
            padding-top: ${props => props.theme.sizes.size32};
        }

        &--5 {
            padding-top: ${props => props.theme.sizes.size48};
        }

        &--6 {
            padding-top: ${props => props.theme.sizes.size64};
        }

        &--7 {
            padding-top: ${props => props.theme.sizes.size72};
        }

        &--8 {
            padding-top: ${props => props.theme.sizes.size96};
        }

        &--9 {
            padding-top: ${props => props.theme.sizes.size128};
        }
    }

    .pr {
        &--0 {
            padding-right: 0;
        }

        &--1 {
            padding-right: ${props => props.theme.sizes.size8};
        }

        &--2 {
            padding-right: ${props => props.theme.sizes.size16};
        }

        &--3 {
            padding-right: ${props => props.theme.sizes.size24};
        }

        &--4 {
            padding-right: ${props => props.theme.sizes.size32};
        }

        &--5 {
            padding-right: ${props => props.theme.sizes.size48};
        }

        &--6 {
            padding-right: ${props => props.theme.sizes.size64};
        }

        &--7 {
            padding-right: ${props => props.theme.sizes.size72};
        }

        &--8 {
            padding-right: ${props => props.theme.sizes.size96};
        }

        &--9 {
            padding-right: ${props => props.theme.sizes.size128};
        }
    }

    .pb {
        &--0 {
            padding-bottom: 0;
        }

        &--1 {
            padding-bottom: ${props => props.theme.sizes.size8};
        }

        &--2 {
            padding-bottom: ${props => props.theme.sizes.size16};
        }

        &--3 {
            padding-bottom: ${props => props.theme.sizes.size24};
        }

        &--4 {
            padding-bottom: ${props => props.theme.sizes.size32};
        }

        &--5 {
            padding-bottom: ${props => props.theme.sizes.size48};
        }

        &--6 {
            padding-bottom: ${props => props.theme.sizes.size64};
        }

        &--7 {
            padding-bottom: ${props => props.theme.sizes.size72};
        }

        &--8 {
            padding-bottom: ${props => props.theme.sizes.size96};
        }

        &--9 {
            padding-bottom: ${props => props.theme.sizes.size128};
        }
    }

    .pl {
        &--0 {
            padding-left: 0;
        }

        &--1 {
            padding-left: ${props => props.theme.sizes.size8};
        }

        &--2 {
            padding-left: ${props => props.theme.sizes.size16};
        }

        &--3 {
            padding-left: ${props => props.theme.sizes.size24};
        }

        &--4 {
            padding-left: ${props => props.theme.sizes.size32};
        }

        &--5 {
            padding-left: ${props => props.theme.sizes.size48};
        }

        &--6 {
            padding-left: ${props => props.theme.sizes.size64};
        }

        &--7 {
            padding-left: ${props => props.theme.sizes.size72};
        }

        &--8 {
            padding-left: ${props => props.theme.sizes.size96};
        }

        &--9 {
            padding-left: ${props => props.theme.sizes.size128};
        }
    }

    .px {
        &--0 {
            padding-left: 0;
            padding-right: 0;
        }

        &--1 {
            padding-left: ${props => props.theme.sizes.size8};
            padding-right: ${props => props.theme.sizes.size8};
        }

        &--2 {
            padding-left: ${props => props.theme.sizes.size16};
            padding-right: ${props => props.theme.sizes.size16};
        }

        &--3 {
        padding-left: ${props => props.theme.sizes.size24};
            padding-right: ${props => props.theme.sizes.size24};
        }

        &--4 {
            padding-left: ${props => props.theme.sizes.size32};
            padding-right: ${props => props.theme.sizes.size32};
        }

        &--5 {
            padding-left: ${props => props.theme.sizes.size48};
            padding-right: ${props => props.theme.sizes.size48};
        }

        &--6 {
            padding-left: ${props => props.theme.sizes.size64};
            padding-right: ${props => props.theme.sizes.size64};
        }

        &--7 {
        padding-left: ${props => props.theme.sizes.size72};
            padding-right: ${props => props.theme.sizes.size72};
        }

        &--8 {
            padding-left: ${props => props.theme.sizes.size96};
            padding-right: ${props => props.theme.sizes.size96};
        }

        &--9 {
            padding-left: ${props => props.theme.sizes.size128};
            padding-right: ${props => props.theme.sizes.size128};
        }
    }

    .py {
        &--0 {
            padding-top: 0;
            padding-bottom: 0;
        }

        &--1 {
            padding-top: ${props => props.theme.sizes.size8};
            padding-bottom: ${props => props.theme.sizes.size8};
        }

        &--2 {
            padding-top: ${props => props.theme.sizes.size16};
            padding-bottom: ${props => props.theme.sizes.size16};
        }

        &--3 {
            padding-top: ${props => props.theme.sizes.size24};
            padding-bottom: ${props => props.theme.sizes.size24};
        }

        &--4 {
            padding-top: ${props => props.theme.sizes.size32};
            padding-bottom: ${props => props.theme.sizes.size32};
        }

        &--5 {
            padding-top: ${props => props.theme.sizes.size48};
            padding-bottom: ${props => props.theme.sizes.size48};
        }

        &--6 {
            padding-top: ${props => props.theme.sizes.size64};
            padding-bottom: ${props => props.theme.sizes.size64};
        }

        &--7 {
            padding-top: ${props => props.theme.sizes.size72};
            padding-bottom: ${props => props.theme.sizes.size72};
        }

        &--8 {
            padding-top: ${props => props.theme.sizes.size96};
            padding-bottom: ${props => props.theme.sizes.size96};
        }

        &--9 {
            padding-top: ${props => props.theme.sizes.size128};
            padding-bottom: ${props => props.theme.sizes.size128};
        }
    }

    /* --------------------------------------------------------------------------
    | TESTES...
    |-------------------------------------------------------------------------- */
    .border {
        border: ${props => props.theme.sizes.size4} dashed red;
    }

    .logo {
        will-change: filter;

        &:hover {
            filter: drop-shadow(0 0 2em #646cffaa);
        }

        &.react:hover {
            filter: drop-shadow(0 0 2em #61dafbaa);
        }
    }

    .coffee-img {
        width: 80%;
        margin: ${props => props.theme.sizes.size52} auto 0 auto;
    }
`;
