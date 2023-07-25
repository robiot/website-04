import classNames from "classnames";

export const cx = (...args: classNames.ArgumentArray) => classNames(...args);

export const copyMToClipboard = async () => {
    const m = decodeURIComponent(window.atob("ZWxsaW90QHJvYm" + "lvdC5kZXY="));

    if (navigator.clipboard == undefined) {
        alert(`Mail is ${m}`);

        return;
    }

    await navigator.clipboard.writeText(m);
    alert(`Copied ${m} to clipboard`);
};
