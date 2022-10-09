import { DefaultTheme } from "styled-components";

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
            bg: "#D7BBF9",
            fg: "#FFFFFF",
        },

        shadow: "#0000001A",

        divider: "#B9B9B9",
    },

    container: {
        large: "1000px",
        medium: "800px",
    },

    font: {
        size: {
            xlarge: "35px",
            large: "30px",
            normal: "22px",
        },
    },
    breakpoints: {
        large: "1200px",
        medium: "800px",
        small: "500px",
    },

    theme: "light",
};
