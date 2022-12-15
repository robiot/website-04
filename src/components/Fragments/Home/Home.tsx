import { Container } from "@components/Common/Container/Container";
import { FC } from "react";

// The top of the home page / landing
export const Home: FC = () => {
    return (
        <div>
            {/* <HomePolygons /> */}

            <Container size="large">
                <div
                    className="h-[80vh]"
                    // initial="hidden"
                    // animate="visible"
                    // variants={popUpFromBottomForText}
                >
                    <h1 className="text-6xl font-extrabold">
                        Hello, I'm Elliot.
                    </h1>

                    <h3 className="text-lg">
                        A 15 year old Web and Software developer.
                    </h3>
                    {/* <ContactIcons /> */}
                </div>
            </Container>
        </div>
    );
};
