// See https://github.com/danigb/soundfont-player
// for more documentation on prop options.
import React, { FC } from "react";
import Soundfont from "soundfont-player";

export const SoundFontProvider: FC<{ instrumentName: string }> = (
    properties
) => {
    return this.props.render({
        isLoading: !this.state.instrument,
        playNote: this.playNote,
        stopNote: this.stopNote,
        stopAllNotes: this.stopAllNotes,
    });
};

class SoundfontProvider extends React.Component {
    private instrumentName: string = "acoustic_grand_piano";
    private hostname: string;
    private format: string = "mp3";
    private soundfont: "MusyngKite" | "FluidR3_GM";

    private audioContext: typeof window.AudioContext;

    constructor(props: any) {
        super(props);
        this.state = {
            activeAudioNodes: {},
            instrument: undefined,
        };
    }

    componentDidMount() {
        this.loadInstrument(this.props.instrumentName);
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevProps.instrumentName !== this.props.instrumentName) {
            this.loadInstrument(this.props.instrumentName);
        }
    }

    loadInstrument = (instrumentName) => {
        // Re-trigger loading state
        this.setState({
            instrument: null,
        });
        Soundfont.instrument(this.props.audioContext, instrumentName, {
            format: this.props.format,
            soundfont: this.props.soundfont,
            nameToUrl: (name, soundfont, format) => {
                return `${this.props.hostname}/${soundfont}/${name}-${format}.js`;
            },
        }).then((instrument) => {
            this.setState({
                instrument,
            });
        });
    };

    playNote = (midiNumber) => {
        this.props.audioContext.resume().then(() => {
            const audioNode = this.state.instrument.play(midiNumber);

            this.setState({
                activeAudioNodes: Object.assign(
                    {},
                    this.state.activeAudioNodes,
                    {
                        [midiNumber]: audioNode,
                    }
                ),
            });
        });
    };

    stopNote = (midiNumber) => {
        this.props.audioContext.resume().then(() => {
            if (!this.state.activeAudioNodes[midiNumber]) {
                return;
            }

            const audioNode = this.state.activeAudioNodes[midiNumber];

            audioNode.stop();
            this.setState({
                activeAudioNodes: Object.assign(
                    {},
                    this.state.activeAudioNodes,
                    {
                        [midiNumber]: null,
                    }
                ),
            });
        });
    };

    // Clear any residual notes that don't get called with stopNote
    stopAllNotes = () => {
        this.props.audioContext.resume().then(() => {
            const activeAudioNodes = Object.values(this.state.activeAudioNodes);

            for (const node of activeAudioNodes) {
                if (node) {
                    node.stop();
                }
            }
            this.setState({
                activeAudioNodes: {},
            });
        });
    };

    render() {
        return this.props.render({
            isLoading: !this.state.instrument,
            playNote: this.playNote,
            stopNote: this.stopNote,
            stopAllNotes: this.stopAllNotes,
        });
    }
}

export default SoundfontProvider;
