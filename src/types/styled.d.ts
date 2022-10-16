import "styled-components";

declare module "styled-components" {
    export interface DefaultTheme {
        palette: {
            primary: {
                bg: {
                    from: string; // "#F6F1F5"
                    to: string; // "#ECEFF6"
                };

                fg: string;
                fgWashedOut: string;
            };

            accent: {
                on: string;
                teal: string;
                yellow: string;
                purple: string;
            };

            section: {
                1: {
                    bg: string;

                    fg: string;
                };
                /**
                 *  Footer
                 */
                2: {
                    bg: {
                        from: string;
                        to: string;
                    };

                    fg: string;
                    fgWashedOut: string;
                };
            };

            widget: {
                bg: string;
                fg: string;
            };

            button: {
                bg: string;
                fg: string;
            };

            shadow: string;

            link: string;

            divider: string; // B9B9B9
        };

        container: {
            xlarge: string;
            large: string;
            medium: string;
        };

        font: {
            size: {
                xlarge: string;
                large: string;
                medium: string;
                normal: string;
                small: string;
            };
        };

        icon: {
            size: {
                large: string;
                normal: string;
            };
        };

        breakpoints: {
            large: string;
            medium: string;
            small: string;
        };

        theme: "dark" | "light";
    }
}
