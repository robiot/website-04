"use client";

import { About } from "@components/Fragments/About/About";
import { Experience } from "@components/Fragments/Experience/Experience";
import { Home } from "@components/Fragments/Home/Home";
import { OpenSource } from "@components/Fragments/OpenSource/OpenSource";
import { Projects } from "@components/Fragments/Projects/Projects";
import { Skills } from "@components/Fragments/Skills/Skills";
import type { NextPage } from "next";

const IndexPage: NextPage = () => {
    return (
        <>
            <Home />
            <About />
            <OpenSource />
            <Skills />
            <Experience />
            <Projects />
        </>
    );
};

export default IndexPage;
