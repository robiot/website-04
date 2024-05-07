export const NavbarHeight = "70px";

export const PrimaryTextCol1 =
    "I'm Elliot, also called Robiot online, a dedicated and enthusiastic Web and Software Developer. My journey in the programming world began as a hobby, which has since evolved into something I work with.";

export const PrimaryTextCol2 =
    "I often share my projects on GitHub, where some of them have gained popularity. I'm grateful for the positive feedback and support I've received. If you're interested in checking out my work, feel free to visit my GitHub profile and take a look around.";

export type LinksDataType = {
    name: string;
    to: string;
}[];

export const LinksData: LinksDataType = [
    {
        name: "Home",
        to: "/",
    },
    {
        name: "About",
        to: "/#about",
    },
    {
        name: "Skills",
        to: "/#skills",
    },
    {
        name: "Experience",
        to: "/#experience",
    },
    {
        name: "Projects",
        to: "/#projects",
    },
    {
        name: "Blog",
        to: "https://blog.robiot.dev",
    },
];

export const ContactData: LinksDataType = [
    {
        name: "Github",
        to: "https://github.com/robiot",
    },
    {
        name: "LinkedIn",
        to: "https://www.linkedin.com/in/robiot",
    },
    {
        name: "X",
        to: "https://x.com/robiot103",
    },
];

export type SkillsDataType = {
    name: string;
    image: string;
}[];

export const LanguagesData: SkillsDataType = [
    {
        name: "Javascript",
        image: "javascript.png",
    },
    {
        name: "Typescript",
        image: "typescript.svg",
    },
    {
        name: "Python",
        image: "python.png",
    },
    {
        name: "Rust",
        image: "rust.png",
    },
    {
        name: "C",
        image: "c.png",
    },
    {
        name: "C#",
        image: "csharp.png",
    },
    {
        name: "Dart",
        image: "dart.png",
    },
];

export const TechnologiesData = [
    {
        name: "React",
        image: "react.png",
    },
    {
        name: "Styled Components",
        image: "styled-components.png",
    },
    {
        name: "Next.js",
        image: "next.png",
    },
    {
        name: "Unity",
        image: "unity.png",
    },
    {
        name: "Tailwind",
        image: "tailwind.png",
    },
    {
        name: "React Native",
        image: "react.png",
    },
    {
        name: "Flutter",
        image: "flutter.svg",
    },
];

export const OtherData = [
    {
        name: "Photoshop",
        image: "photoshop.png",
    },
    {
        name: "Illustrator",
        image: "illustrator.png",
    },

    {
        name: "Git",
        image: "git.png",
    },
    {
        name: "Davinci Resolve",
        image: "resolve.png",
    },
    {
        name: "Arch Linux",
        image: "arch.png",
    },
    {
        name: "Blender",
        image: "blender.ico",
    },
    {
        name: "Figma",
        image: "figma.png",
    },
];

export type ExperiencesDataType = {
    title: string;
    company: string;
    date: string;
    image: string;
}[];

export const ExperiencesData: ExperiencesDataType = [
    {
        title: "Open-source Contributor",
        company: "",
        date: "Anything anywhere anytime",
        image: "github.png",
    },
    {
        title: "Full-stack Developer",
        company: "ENS",
        date: "Jan 2023 - Oct 2023",
        image: "ens.jpg",
    },
    {
        title: "Web Developer Intern",
        company: "Telenor",
        date: "Oct 2022",
        image: "telenor.jpeg",
    },
    {
        title: "Web Developer",
        company: "Winter",
        date: "Apr 2022 - Sep 2022",
        image: "winter.jpeg",
    },
];

export type ProjectsDataType = {
    title: string;
    description: string;
    identifier: string;
}[];

export const ProjectsData: ProjectsDataType = [
    {
        title: "Rustcat",
        description:
            "Rustcat is an easy to use port listener and reverse shell for Linux, MacOS, and Windows.",
        identifier: "robiot/rustcat",
    },
    {
        title: "XClicker",
        description:
            "An easy to use, feature-rich and blazing fast Autoclicker for linux desktops using x11.",
        identifier: "robiot/xclicker",
    },
    {
        title: "Alpha Clicker",
        description:
            "Alpha Clicker is an autoclicker for Windows with a modern user interface.",
        identifier: "robiot/AlphaClicker",
    },
];
