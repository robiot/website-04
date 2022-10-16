import { DefaultTheme } from "styled-components";

const defaults: Omit<Omit<DefaultTheme, "palette">, "theme"> = {
    container: {
        xlarge: "1300px",
        large: "1200px",
        medium: "900px",
    },

    font: {
        size: {
            xlarge: "60px",
            large: "30px",
            medium: "27px",
            normal: "19px",
            small: "15px",
        },
    },

    icon: {
        size: {
            large: "40px",
            normal: "30px",
        },
    },

    breakpoints: {
        large: "1200px",
        medium: "1000px",
        small: "500px",
    },
};

export const LightTheme: DefaultTheme = {
    palette: {
        primary: {
            bg: {
                from: "#F6F1F5",
                to: "#ECEFF6",
            },

            fg: "#10101C",
            fgWashedOut: "#666666",
        },

        accent: {
            on: "#000000",
            teal: "#CCE5E5",
            yellow: "#FEDA79",
            purple: "#D7BBF9",
        },

        section: {
            1: {
                bg: "#00071B",

                fg: "#FFFFFF",
            },
            2: {
                bg: {
                    from: "#E8E3E7",
                    to: "#E1E3E8",
                },

                fg: "#000000",
                fgWashedOut: "#666666",
            },
        },

        widget: {
            bg: "#FFFFFF",
            fg: "#10101C",
        },

        button: {
            bg: "#3460FE",
            fg: "#FFFFFF",
        },

        shadow: "#0000001A",

        link: "#4d71fa",

        divider: "#B9B9B9",
    },

    ...defaults,

    theme: "light",
};

export const DarkTheme: DefaultTheme = {
    palette: {
        primary: {
            bg: {
                from: "#000000", // #00071b
                to: "#000000",
            },

            fg: "#bbbec4",
            fgWashedOut: "#888888",
        },

        accent: {
            on: "#000000",
            teal: "#a6baba",
            yellow: "#e3c36d",
            purple: "#af97cc",
        },

        section: {
            1: {
                bg: "#0d1117",

                fg: "#bbbec4",
            },
            2: {
                bg: {
                    from: "#111111",
                    to: "#111111",
                },

                fg: "#FFFFFF",
                fgWashedOut: "#666666",
            },
        },

        widget: {
            bg: "#13171c",
            fg: "#bbbec4",
        },

        button: {
            bg: "#3460FE",
            fg: "#FFFFFF",
        },

        shadow: "#FFFFFF1A",

        link: "#4d71fa",

        divider: "#333333",
    },

    ...defaults,

    theme: "dark",
};
