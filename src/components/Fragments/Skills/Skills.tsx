import { Container } from "@components/Common/Container/Container";
import { FC } from "react";

import { SkillsTable } from "./SkillsTable";

export const Skills: FC = () => {
    return (
        <section id="skills" className="-mt-16">
            <Container size="xlarge">
                <div className="bg-blue py-10 pb-20 px-10 rounded-3xl">
                    <Container>
                        <h3 className="text-center text-5xl font-bold text-grey3">
                            Skills
                        </h3>
                    </Container>
                </div>
            </Container>

            <Container>
                <SkillsTable />
            </Container>
        </section>
    );
};
