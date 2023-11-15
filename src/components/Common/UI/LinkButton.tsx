import { cx } from "@utils/cx";
import { AnchorHTMLAttributes, forwardRef } from "react";

export const LinkButton = forwardRef<
    HTMLAnchorElement,
    AnchorHTMLAttributes<HTMLAnchorElement>
>((properties, reference) => {
    return (
        <a
            ref={reference}
            {...properties}
            className={cx(
                "flex justify-center items-center w-fit px-5 h-12 gap-3 text-white bg-blue rounded-lg hover:bg-blue/90",
                "cursor-pointer",
                properties.className
            )}
        >
            {properties.children}
        </a>
    );
});
