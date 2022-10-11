export const NavbarHeight = "70px";

export type LinksType = {
    name: string;
    to: string;
}[];

export const Links: LinksType = [
    {
        name: "Home",
        to: "/",
    },
    {
        name: "About",
        to: "/#about",
    },
    {
        name: "Projects",
        to: "/#projects",
    },
];

export const LinksSection2: LinksType = [
    {
        name: "Blog",
        to: "https://old.robiot.dev/blog",
    },
];

export const Contact: LinksType = [
    {
        name: "Github",
        to: "https://github.com/robiot",
    },
    {
        name: "LinkedIn",
        to: "https://www.linkedin.com/in/robiot",
    },
    {
        name: "Twitter",
        to: "https://twitter.com/notrobiot",
    },
    {
        name: "Youtube",
        to: "https://youtube.com/c/robiot",
    },
];

export const Languages = [
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

export const Technologies = [
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

export const Other = [
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

export type ExperiencesType = {
    title: string;
    company: string;
    date: string;
    image: string;
}[];

export const Experiences: ExperiencesType = [
    {
        title: "Open-source Contributor",
        company: "",
        date: "Anything anywhere anytime",
        image: "github.png",
    },
    {
        title: "Software Engineer",
        company: "V3x",
        date: "Since Nov 2021",
        image: "v3x.jpeg",
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
