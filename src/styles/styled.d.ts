import 'styled-components'

declare module 'styled-components' {
    export interface DefaultTheme {
        title: string

        fonts: {
            family: string
            regular: string
            bold: string
        }

        colors: {
            primary: string
            secondary: string
            white: string
            gray: string
            grayDark: string
            black: string
            blackDark: string
        }

        sizes: {
            size1: string
            size2: string
            size3: string
            size4: string
            size6: string
            size8: string
            size12: string
            size14: string
            size16: string
            size18: string
            size24: string
            size32: string
            size36: string
            size40: string
            size48: string
            size52: string
            size56: string
            size64: string
            size72: string
            size80: string
            size88: string
            size96: string
            size104: string
            size112: string
            size120: string
            size128: string
            size136: string
            size144: string
            size152: string
            size160: string
            size168: string
            size176: string
            size184: string
            size192: string
            size200: string
        }

        containers: {
            extraLarge: string
            large: string
            medium: string
            small: string
        }
    }
}
