import "react-piano/dist/styles.css";

import { Layout } from "@components/Assembled/Layout/Layout";
import { PrimaryText } from "@lib/constants";
import type { NextPage } from "next";
import { NextSeo } from "next-seo";
import { KeyboardShortcuts, MidiNumbers, Piano } from "react-piano";
import SoundfontProvider from "soundfont-player";

const IndexPage: NextPage = () => {
    const firstNote = MidiNumbers.fromNote("c3")!;
    const lastNote = MidiNumbers.fromNote("f5")!;
    const keyboardShortcuts = KeyboardShortcuts.create({
        firstNote: firstNote,
        lastNote: lastNote,
        keyboardConfig: KeyboardShortcuts.HOME_ROW,
    });

    return (
        <Layout>
            <NextSeo
                title="robiot - Page not found"
                description={PrimaryText}
                openGraph={{
                    url: "https://robiot.dev",
                    type: "image/png",
                    images: [
                        {
                            url: "/img/og/ogimage.png",
                            width: 1406,
                            height: 803,
                            alt: "Image",
                            type: "image/png",
                        },
                    ],
                    site_name: "Robiot",
                }}
                twitter={{
                    handle: "@handle",
                    site: "@site",
                    cardType: "summary_large_image",
                }}
            />

            <SoundfontProvider>
                <Piano
                    noteRange={{ first: firstNote, last: lastNote }}
                    playNote={(midiNumber) => {
                        // Play a given note - see notes below
                    }}
                    stopNote={(midiNumber) => {
                        // Stop playing a given note - see notes below
                    }}
                    width={1000}
                    keyboardShortcuts={keyboardShortcuts}
                />
            </SoundfontProvider>
            {/* <div style={{ height: "150vh" }}>aa</div> */}
        </Layout>
    );
};

export default IndexPage;
