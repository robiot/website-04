import { Container } from "@components/Common/Container/Container";
import { PrimaryTextCol1, PrimaryTextCol2 } from "@utils/constants";
import { FC } from "react";

export const About: FC = () => {
    return (
        <section id="about" className="relative pt-[20vh] pb-40 ">
            <div className="absolute inset-0 w-full bg-grey2 -skew-y-1" />
            <Container className="relative">
                <div className="flex justify-between gap-10 md:gap-20 text-base flex-col md:flex-row">
                    <p className="flex-1">{PrimaryTextCol1}</p>

                    <p className="flex-1">{PrimaryTextCol2}</p>
                </div>
            </Container>
        </section>
    );
};
