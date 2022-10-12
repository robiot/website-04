declare module "react-piano" {
    export const Keyboard: () => {};
    export const Piano: (_: {
        noteRange: {
            first: number;
            last: number;
        };
        playNote: (_) => void;
        stopNote: (_) => void;

        width: number;

        activeNotes: number[];

        keyWidthToHeight: number;

        renderNoteLabel: (_: {
            keyboardShortcut;
            midiNumber;
            isActive;
            isAccidental;
        }) => any;

        className: string;

        disabled: boolean;

        keyboardShortcuts: { key: string; midiNumber: number }[];

        onPlayNoteInput: (_: number, _: { prevActiveNotes: any }) => void;
        onStopNoteInput: (_: number, _: { prevActiveNotes: any }) => void;
    }) => import("react").ReactElement;
    export const ControlledPiano: () => {};
    export const KeyboardShortcuts: {
        create: (_: {
            firstNote: number;
            lastNote: number;
            keyboardConfig: { natural: string; flat: string; sharp: string }[];
        }) => { key: string /* String? */; midiNumber: number }[];
        BOTTOM_ROW: { natural: string; flat: string; sharp: string }[];
        HOME_ROW: [{ natural: string; flat: string; sharp: string }];
        QWERTY_ROW: [{ natural: string; flat: string; sharp: string }];
    };
    export const MidiNumbers: {
        fromNote: (_: string) => number | null;
        getAtrributes: () => object;
        MAX_MIDI_NUMBER: number;
        MIN_MIDI_NUMBER: number;
        NATURAL_MIDI_NUMBERS: number;
    };
}
