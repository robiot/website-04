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

        link: "#4d71fa",

        divider: "#B9B9B9",
    },

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

    theme: "light",
};
