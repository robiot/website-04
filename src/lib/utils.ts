import classNames from "classnames";

export const cx = (...args: classNames.ArgumentArray) => classNames(...args);

export const copyMToClipboard = async () => {
    const m = decodeURIComponent(window.atob("bWVAcm9iaW90LmRldg=="));

    if (navigator.clipboard == undefined) {
        alert(`Mail is ${m}`);

        return;
    }

    await navigator.clipboard.writeText(m);
    alert(`Copied ${m} to clipboard`);
};
