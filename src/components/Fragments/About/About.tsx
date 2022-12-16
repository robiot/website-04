import { Container } from "@components/Common/Container/Container";
import { PrimaryTextCol1, PrimaryTextCol2 } from "@utils/constants";
import { FC } from "react";

export const About: FC = () => {
    return (
        <section id="about" className="bg-grey2 py-16">
            <Container>
                <div className="flex justify-between gap-20 text-base">
                    <p className="flex-1">{PrimaryTextCol1}</p>

                    <p className="flex-1">{PrimaryTextCol2}</p>
                </div>
            </Container>
        </section>
    );
};
