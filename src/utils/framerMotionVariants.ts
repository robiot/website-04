export const popUp = {
    hidden: { scale: 0, opacity: 0 },
    visible: {
        opacity: 1,
        scale: 1,
    },
    transition: {
        type: "spring",
    },
};

export const fromBottomVariant = {
    hidden: { y: 100, opacity: 0 },
    visible: {
        y: 0,
        opacity: 1,
        transition: {
            duration: 0.1,
            type: "spring",
            stiffness: 70,
        },
    },
};

export const popUpFromBottomForText = {
    hidden: { opacity: 0, y: 40 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            type: "spring",
            // stiffness: 0,
        },
    },
};

export const mobileNavItemSideways = {
    hidden: { x: -40, opacity: 0 },
    visible: {
        x: 0,
        opacity: 1,
    },
};

export const FadeContainer = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: { delayChildren: 0, staggerChildren: 0.1 },
    },
};
