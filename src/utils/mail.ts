import classNames from "classnames";

export const cx = (..._arguments: classNames.ArgumentArray) =>
    classNames(..._arguments);

export const copyMToClipboard = async () => {
    const m = decodeURIComponent(window.atob("bWVAcm9ia" + "W90LmRldg=="));

    if (navigator.clipboard == undefined) {
        alert(`Mail is ${m}`);

        return;
    }

    await navigator.clipboard.writeText(m);
    alert(`Copied ${m} to clipboard`);
};
